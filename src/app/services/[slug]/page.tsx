import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowLeft,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} — BalancePoint Acupuncture`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <main className="flex-1">
      {/* Back Link */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="size-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="glass-card overflow-hidden">
          <div className="w-full h-56 bg-muted flex items-center justify-center overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
        <div className="flex flex-col items-center gap-6 p-10 text-center md:flex-row md:text-left">
          {/* Icon */}
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FontAwesomeIcon icon={service.icon} className="size-8" />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="gap-1.5">
                <FontAwesomeIcon icon={faClock} className="size-3" />
                {service.duration}
              </Badge>
              <Badge variant="default" className="text-base font-semibold">
                {service.price}
              </Badge>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="glass-card p-10">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            What&apos;s Included
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mt-0.5 size-5 shrink-0 text-primary"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
        <div className="gradient-divider mx-auto mb-8 w-24" />
        <h2 className="text-2xl font-semibold text-foreground">
          Ready to get started?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Book your {service.title.toLowerCase()} session today.
        </p>
        <Link href="/contact" className="mt-6 inline-flex">
          <Button size="lg">Book Now</Button>
        </Link>
      </section>
    </main>
  );
}

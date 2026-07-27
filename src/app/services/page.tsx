import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services — BalancePoint Acupuncture",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Expert acupuncture treatments tailored to your unique needs. Each
            session is designed to restore balance and promote your body&apos;s
            natural healing.
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="glass-card flex flex-col p-0 overflow-hidden"
            >
              <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
              {/* Icon */}
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="size-6"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-foreground">
                {service.title}
              </h2>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-4 flex-1 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {service.duration} · {service.price}
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex"
                >
                  <Button variant="outline" size="sm">
                    Learn More →
                  </Button>
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

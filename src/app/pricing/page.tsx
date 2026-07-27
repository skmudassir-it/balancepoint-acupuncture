import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { SERVICES, FAQS } from "@/lib/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing — BalancePoint Acupuncture",
};

export default function PricingPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Clear, upfront pricing for every service. No hidden fees — just
            expert care at fair rates.
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="glass-card flex flex-col p-6"
            >
              {/* Icon */}
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FontAwesomeIcon icon={service.icon} className="size-6" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-foreground">
                {service.title}
              </h2>

              {/* Duration */}
              <p className="mt-1 text-sm text-muted-foreground">
                {service.duration} session
              </p>

              {/* Price */}
              <p className="mt-2 text-4xl font-bold text-foreground">
                {service.price}
                <span className="text-base font-normal text-muted-foreground">
                  /session
                </span>
              </p>

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-2 border-t border-border pt-4">
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
              <Link href="/contact" className="mt-6 inline-flex">
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="glass-card group overflow-hidden"
              >
                <summary className="cursor-pointer px-6 py-4 text-base font-medium text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

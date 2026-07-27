"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { SITE, SERVICES, TESTIMONIALS, TEAM } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Animation variant                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

/* ------------------------------------------------------------------ */
/*  Helper: initials from a team member name                           */
/* ------------------------------------------------------------------ */

function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "?";
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function HomeClient() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-background">
        {/* Floating decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 left-[10%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/3 right-[5%] h-48 w-48 rounded-full bg-accent/15 blur-2xl" />
          <div className="absolute bottom-10 left-[20%] h-36 w-36 rounded-full bg-secondary/20 blur-xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-32 text-center sm:pt-40 sm:pb-32">
          <motion.h1
            className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {SITE.name}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Book a Session</Button>
            </Link>
            <Link href="/services" className="inline-flex">
              <Button variant="outline" size="lg">
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES PREVIEW                                            */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <div className="gradient-divider mx-auto mt-4 w-24" />
          <p className="mt-4 text-muted-foreground">
            Holistic treatments tailored to your unique needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              className="flex flex-col rounded-xl bg-muted overflow-hidden p-0"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FontAwesomeIcon icon={service.icon} className="text-lg" />
              </div>

              <h3 className="font-heading text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Learn More <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS CAROUSEL                                       */}
      {/* ============================================================ */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Patients Say
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-24" />
          </div>

          <Carousel
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.name}>
                  <div className="glass-card mx-auto flex max-w-lg flex-col items-center p-8 text-center">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="mb-4 text-2xl text-primary/30"
                    />
                    <p className="text-base leading-relaxed italic text-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-4 flex gap-1 text-primary">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-sm" />
                      ))}
                    </div>
                    <p className="mt-3 font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12" />
            <CarouselNext className="right-0 sm:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ABOUT SNIPPET                                               */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Team
          </h2>
          <div className="gradient-divider mx-auto mt-4 w-24" />
          <p className="mt-4 text-muted-foreground">
            Experienced practitioners dedicated to your well-being
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {TEAM.slice(0, 2).map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted text-2xl font-semibold text-muted-foreground">
                {getInitials(member.name)}
              </div>
              <p className="mt-4 font-semibold">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/about" className="inline-flex">
            <Button variant="outline">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA BANNER                                                  */}
      {/* ============================================================ */}
      <section className="bg-primary/5 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to restore balance?
          </h2>
          <div className="gradient-divider mx-auto mt-4 w-24" />
          <p className="mt-4 text-muted-foreground">
            Take the first step toward a healthier, more vibrant you.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Book Your First Session</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { SITE, SERVICES, NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-emerald-50/50 dark:bg-emerald-950/20">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/logo.svg"
                alt={`${SITE.name} logo`}
                className="h-9 w-auto"
              />
              <span className="text-lg font-semibold text-foreground">
                {SITE.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <nav>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm text-muted-foreground transition-colors",
                        "hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <nav>
              <ul className="space-y-2.5">
                {SERVICES.slice(0, 4).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={cn(
                        "text-sm text-muted-foreground transition-colors",
                        "hover:text-foreground"
                      )}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-foreground"
              >
                <FontAwesomeIcon icon={faPhone} className="size-3.5 shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-foreground"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="size-3.5 shrink-0"
                />
                {SITE.email}
              </a>
              <span className="flex items-start gap-2.5">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mt-0.5 size-3.5 shrink-0"
                />
                {SITE.address}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo + Site Name */}
        <Link href="/" className="flex items-center gap-2.5 font-semibold">
          <img
            src="/logo.svg"
            alt={`${SITE.name} logo`}
            className="h-8 w-auto"
          />
          <span className="hidden text-lg text-foreground sm:inline-block">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                "hover:bg-muted hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="inline-flex">
            <Button>Book a Session</Button>
          </Link>
        </div>

        {/* Mobile Sheet Trigger */}
        <Sheet onOpenChange={setMobileOpen} open={mobileOpen}>
          <SheetTrigger className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden">
            <FontAwesomeIcon icon={faBars} className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <img
                  src="/logo.svg"
                  alt={`${SITE.name} logo`}
                  className="h-7 w-auto"
                />
                {SITE.name}
              </SheetTitle>
            </SheetHeader>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors",
                        "hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  }
                />
              ))}
            </nav>

            {/* Mobile CTA + Contact */}
            <div className="mt-auto flex flex-col gap-4 border-t border-border p-4">
              <Link
                href="/contact"
                className="inline-flex w-full"
                onClick={() => setMobileOpen(false)}
              >
                <Button className="w-full">Book a Session</Button>
              </Link>

              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <FontAwesomeIcon icon={faPhone} className="size-3.5" />
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="size-3.5" />
                  {SITE.email}
                </a>
                <span className="flex items-start gap-2.5">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mt-0.5 size-3.5"
                  />
                  {SITE.address}
                </span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SERVICES, SITE } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const service = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ready to start your healing journey? Reach out and we&apos;ll get
            back to you within 24 hours.
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h2 className="mb-6 text-2xl font-semibold text-foreground">
                Request a Quote
              </h2>

              {submitted ? (
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
                  <p className="text-lg font-medium text-foreground">
                    Thank you for reaching out!
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    We&apos;ve received your request and will get back to you
                    within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      {...register("name")}
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Phone *
                    </label>
                    <Input
                      {...register("phone")}
                      type="tel"
                      placeholder="(555) 123-4567"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Service *
                    </label>
                    <Select
                      value={service}
                      onValueChange={(v: string | null) =>
                        setValue("service", v || "", { shouldValidate: true })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s.slug} value={s.title}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      {...register("message")}
                      placeholder="Tell us about your concerns..."
                      rows={5}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mt-0.5 size-5 shrink-0 text-primary"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mt-0.5 size-5 shrink-0 text-primary"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mt-0.5 size-5 shrink-0 text-primary"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Address
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {SITE.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mt-0.5 size-5 shrink-0 text-primary"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      {SITE.hours}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Visit Us
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We&apos;re located on Harmony Lane in Portland, with ample
                parking and a tranquil space designed for your comfort.
              </p>
              <Link href="/pricing" className="mt-4 inline-flex">
                <Button variant="outline" size="sm">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

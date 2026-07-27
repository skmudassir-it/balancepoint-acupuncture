import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faFlask,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { SITE, TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — BalancePoint Acupuncture",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const values = [
  {
    title: "Holistic Care",
    description:
      "We treat the whole person — body, mind, and spirit — not just isolated symptoms. Every treatment plan addresses the root cause, not just the surface pain.",
    icon: faHeart,
  },
  {
    title: "Patient-Centered",
    description:
      "Your health goals drive our approach. We listen deeply, collaborate closely, and tailor every session to your unique needs and comfort level.",
    icon: faUser,
  },
  {
    title: "Evidence-Based",
    description:
      "Ancient wisdom meets modern science. We integrate Traditional Chinese Medicine with contemporary research to deliver treatments that are both time-tested and clinically validated.",
    icon: faFlask,
  },
  {
    title: "Compassion",
    description:
      "Healing happens in a safe, supportive space. We bring empathy, respect, and genuine care to every interaction — because you deserve to feel truly heard.",
    icon: faHandHoldingHeart,
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            {SITE.tagline}
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="glass-card mx-auto max-w-4xl p-10">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Our Story
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              BalancePoint Acupuncture was born from a simple belief: that true
              healing comes from within, and the right guidance can unlock it.
              Founded by Dr. Mei Lin Chen, our clinic brings together the
              profound wisdom of Traditional Chinese Medicine — refined over
              thousands of years — with the precision and rigor of modern
              integrative healthcare.
            </p>
            <p>
              At BalancePoint, we see every patient as a whole person, not a
              collection of symptoms. Whether you&apos;re managing chronic pain,
              navigating fertility, or simply seeking more energy and calm in
              your daily life, our team crafts personalized treatment plans
              that honor your body&apos;s innate ability to heal. Ancient wisdom
              meets modern care — that&apos;s the BalancePoint difference.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
          Meet Our Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="glass-card flex flex-col p-6 text-center">
              {/* Team Photo */}
              <div className="mx-auto mb-4 size-20 rounded-full overflow-hidden bg-muted">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card flex flex-col items-center p-6 text-center"
              >
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FontAwesomeIcon icon={value.icon} className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

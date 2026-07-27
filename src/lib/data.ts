import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faLeaf,
  faHandsHolding,
  faSpa,
  faHeartPulse,
  faBrain,
  faDumbbell,
  faUserDoctor,
  faWind,
  faGem,
  faStar,
  faCheckCircle,
  faClock,
  faShield,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faBolt,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  duration: string;
  price: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  category: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface TeamItem {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const SITE = {
  name: "BalancePoint Acupuncture",
  tagline: "Restore balance. Relieve pain. Revitalize life.",
  description: "Expert acupuncture and Traditional Chinese Medicine in a serene, healing environment. We blend ancient wisdom with modern techniques to target pain, stress, and chronic conditions at their root.",
  phone: "(555) 234-5678",
  email: "hello@balancepointacu.com",
  address: "127 Harmony Lane, Suite 3, Portland, OR 97201",
  hours: "Mon–Fri 8am–7pm | Sat 9am–3pm",
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Pain Management",
    slug: "pain-management",
    description: "Target chronic and acute pain at its source with precision acupuncture techniques that reduce inflammation and trigger your body's natural painkillers.",
    icon: faBolt,
    image: "/images/services/pain-management.jpg",
    features: ["Back & neck pain relief", "Migraine & headache treatment", "Joint & arthritis care", "Sports injury recovery"],
    duration: "60 min",
    price: "$95",
  },
  {
    title: "Stress & Anxiety Relief",
    slug: "stress-anxiety-relief",
    description: "Calm your nervous system with acupuncture protocols that lower cortisol, ease tension, and restore emotional equilibrium.",
    icon: faFeather,
    image: "/images/services/stress-anxiety-relief.jpg",
    features: ["Cortisol regulation", "Sleep quality improvement", "Nervous system rebalancing", "Mindfulness integration"],
    duration: "50 min",
    price: "$85",
  },
  {
    title: "Women's Health",
    slug: "womens-health",
    description: "Support hormonal balance through every life stage — from menstrual health to fertility and menopause — with gentle, holistic care.",
    icon: faSpa,
    image: "/images/services/womens-health.jpg",
    features: ["Menstrual regulation", "Fertility support", "Pregnancy care", "Menopause management"],
    duration: "60 min",
    price: "$95",
  },
  {
    title: "Digestive Wellness",
    slug: "digestive-wellness",
    description: "Address IBS, bloating, acid reflux, and food sensitivities by harmonizing your digestive system through targeted meridian work.",
    icon: faLeaf,
    image: "/images/services/digestive-wellness.jpg",
    features: ["IBS & bloating relief", "Acid reflux treatment", "Gut microbiome support", "Dietary guidance"],
    duration: "50 min",
    price: "$85",
  },
  {
    title: "Wellness & Prevention",
    slug: "wellness-prevention",
    description: "Stay ahead of illness with regular tune-up sessions that strengthen immunity, boost energy, and maintain overall vitality.",
    icon: faShield,
    image: "/images/services/wellness-prevention.jpg",
    features: ["Immune system boost", "Seasonal allergy care", "Energy restoration", "Longevity-focused protocols"],
    duration: "45 min",
    price: "$75",
  },
  {
    title: "Cosmetic Acupuncture",
    slug: "cosmetic-acupuncture",
    description: "Rejuvenate your skin naturally with facial acupuncture that stimulates collagen, reduces fine lines, and restores a healthy glow.",
    icon: faGem,
    image: "/images/services/cosmetic-acupuncture.jpg",
    features: ["Facial rejuvenation", "Collagen stimulation", "Fine line reduction", "Natural glow restoration"],
    duration: "75 min",
    price: "$120",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Back Pain Breakthrough",
    description: "A patient with 10 years of chronic lower back pain achieved full mobility after 8 targeted sessions combining acupuncture with cupping therapy.",
    icon: faUserDoctor,
    image: "/images/projects/project-1.jpg",
    category: "Pain Management",
  },
  {
    title: "Migraine Freedom",
    description: "Weekly treatments reduced migraine frequency from 4 per week to 1 per month — and eliminated reliance on daily medication.",
    icon: faBrain,
    image: "/images/projects/project-2.jpg",
    category: "Pain Management",
  },
  {
    title: "Fertility Journey",
    description: "After 2 years of trying to conceive, a 12-week acupuncture protocol supported natural conception alongside IVF preparation.",
    icon: faHeartPulse,
    image: "/images/projects/project-3.jpg",
    category: "Women's Health",
  },
  {
    title: "Corporate Wellness Program",
    description: "On-site stress relief sessions for a 50-person tech team reduced sick days by 28% and improved employee satisfaction scores.",
    icon: faDumbbell,
    image: "/images/projects/project-4.jpg",
    category: "Wellness & Prevention",
  },
  {
    title: "Digestive Harmony",
    description: "Resolved a decade-long IBS diagnosis through a combination of acupuncture, herbal medicine, and dietary adjustments over 6 months.",
    icon: faLeaf,
    image: "/images/projects/project-5.jpg",
    category: "Digestive Wellness",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Sarah M.",
    role: "Pain Management Patient",
    quote: "After years of lower back pain and countless treatments, acupuncture at BalancePoint finally gave me relief. I went from avoiding movement to hiking again.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Migraine Patient",
    quote: "I was skeptical, but after 6 sessions my chronic migraines dropped by 80%. The practitioners are genuinely caring and incredibly knowledgeable.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Fertility Patient",
    quote: "The women's health program supported me through my entire fertility journey. I felt heard, cared for, and empowered every step of the way.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Wellness Client",
    quote: "I started monthly tune-ups for stress and now I can't imagine life without them. Better sleep, more energy, and a calmer mind.",
    rating: 5,
  },
  {
    name: "Lisa W.",
    role: "Digestive Wellness Patient",
    quote: "My IBS symptoms were controlling my life. The combination of acupuncture and dietary guidance transformed my gut health completely.",
    rating: 5,
  },
];

export const TEAM: TeamItem[] = [
  {
    name: "Dr. Mei Lin Chen",
    role: "Founder & Lead Acupuncturist",
    image: "/images/team/team-1.jpg",
    bio: "Board-certified acupuncturist with 15+ years of experience. Trained in both Traditional Chinese Medicine and Western integrative approaches at Beijing University of Chinese Medicine.",
  },
  {
    name: "Marcus Rivera",
    role: "Licensed Acupuncturist",
    image: "/images/team/team-2.jpg",
    bio: "Specializes in sports medicine and pain management acupuncture. Former physical therapist who brings a deep understanding of musculoskeletal conditions.",
  },
  {
    name: "Aisha Patel",
    role: "Women's Health Specialist",
    image: "/images/team/team-3.jpg",
    bio: "Dedicated to women's hormonal health across all life stages. Certified in fertility acupuncture with advanced training from the American Board of Oriental Reproductive Medicine.",
  },
];

export const FAQS = [
  {
    q: "Does acupuncture hurt?",
    a: "Most patients feel little to no discomfort. Acupuncture needles are hair-thin — about 1/10th the width of a hypodermic needle. You may feel a slight tingling or warmth, which is a sign of the treatment working.",
  },
  {
    q: "How many sessions will I need?",
    a: "This varies by condition. Acute issues may resolve in 3–6 sessions, while chronic conditions often benefit from 8–12 sessions. We create a personalized treatment plan during your first visit.",
  },
  {
    q: "Is acupuncture safe?",
    a: "Absolutely. We use single-use, sterile, FDA-approved needles. All our practitioners are board-certified and licensed. Side effects are rare and typically limited to minor bruising.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes! Many insurance plans now cover acupuncture. We're in-network with Aetna, Blue Cross Blue Shield, Cigna, and United Healthcare. We also accept HSA/FSA cards.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "Your first appointment includes a comprehensive health assessment (60–90 minutes), pulse and tongue diagnosis, and your first treatment. Wear loose, comfortable clothing.",
  },
  {
    q: "Can acupuncture help with conditions beyond pain?",
    a: "Definitely. Acupuncture is effective for digestive issues, allergies, insomnia, anxiety, hormonal imbalances, fertility, and much more. The WHO recognizes acupuncture for over 100 conditions.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Success Stories", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

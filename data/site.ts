// =====================================================================
// /data/site.ts
// Single source of truth for ALL editable business content.
// To rebrand a client, edit this file only.
// =====================================================================

import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Megaphone,
  PenTool,
  Gem,
  Box,
  Share2,
  Printer,
  Layers,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
};

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  image: string;
  alt: string;
  span: "wide" | "tall" | "square";
};

export type PortfolioCategory =
  | "Branding"
  | "Flyers"
  | "3D"
  | "Motion"
  | "Logos";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type WhyReason = {
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

// ---------------------------------------------------------------------
// Utility: calculate studio age from founding year
// ---------------------------------------------------------------------
export function studioAge(founded: number): string {
  const currentYear = new Date().getFullYear();
  const years = currentYear - founded;
  return `Est. ${founded} — ${years} years of visual innovation`;
}

// ---------------------------------------------------------------------
// Business identity
// ---------------------------------------------------------------------
export const site = {
  name: "Graphix Mnandi",
  tagline: "Visual experiences that move brands forward.",
  shortDescription:
    "A boutique design studio crafting brand systems, motion, and 3D for ambitious teams across the world.",
  domain: "graphixmnandi.com",
  url: "https://graphixmnandi.com",
  email: "studio@graphixmnandi.com",
  phone: "+27 71 234 5678",
  whatsapp: "27712345678",
  address: {
    line1: "27 Fox Street",
    line2: "Marshalltown, Johannesburg 2107",
    country: "South Africa",
  },
  hours: "Mon — Fri · 09:00 — 18:00 SAST",
  founded: 2019,
};

// ---------------------------------------------------------------------
// Brand colors (mirrored in tailwind.config.ts for utility classes)
// ---------------------------------------------------------------------
export const colors = {
  ink: "#0B0B0B",
  inkSoft: "#161616",
  cream: "#F5F2EC",
  accent: "#F29E00",
  accentGlow: "#FFB833",
  amber: "#E08A00",
} as const;

// ---------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------
export const hero = {
  eyebrow: "Boutique creative studio · Est. 2019",
  // Word-by-word reveal; each string becomes its own animated line.
  headline: ["We create visual", "experiences that", "move brands", "forward."],
  subheadline:
    "Graphix Mnandi is a small, opinionated design studio. We build brand systems, motion, and 3D for the people shaping what comes next.",
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "View our work", href: "#work" },
  // A high-quality Unsplash image — easy to swap for any client.
  image: {
    src: "/placeholder.jpg",
    alt: "Graphix Mnandi studio showcase",
  },
  stats: [
    { value: "120+", label: "Projects shipped" },
    { value: "38", label: "Brands built" },
    { value: "12", label: "Awards earned" },
  ],
};

// ---------------------------------------------------------------------
// Trusted by
// ---------------------------------------------------------------------
export const trustedBy = {
  eyebrow: "Trusted by ambitious teams",
  // Plain wordmarks (text-based) — no third-party logo dependencies.
  companies: [
    "NORTHWIND",
    "OBSIDIAN",
    "LUMEN&CO",
    "ATLAS TECH",
    "PARALLAX",
    "MERIDIAN",
    "FIELDNOTES",
    "ARGON",
  ],
};

// ---------------------------------------------------------------------
// About
// ---------------------------------------------------------------------
export const about = {
  eyebrow: "About the studio",
  heading: "A small studio with a sharp point of view.",
  body: [
    "Graphix Mnandi began in a one-bedroom apartment in Johannesburg with a single brief: design a flyer for a friend's clothing launch. Seven years later we are a six-person studio working with founders, festivals, and Fortune 500 brands across three continents.",
    "We are deliberately small. Every project is led by a senior designer and a creative director — no hand-offs, no juniors learning on your account, no layers between the idea and the work.",
  ],
  values: [
    {
      title: "Craft over noise",
      body: "We will always choose the harder, quieter answer if it makes the work better.",
    },
    {
      title: "Disagree, kindly",
      body: "The best briefs are conversations. We push back when we have something better to add.",
    },
    {
      title: "Ship the thing",
      body: "A finished file on a server beats a perfect idea in a deck. We move.",
    },
  ],
};

// ---------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------
export const services: Service[] = [
  {
    icon: Megaphone,
    title: "Event Flyers",
    description:
      "Print and digital flyers that stop the scroll and fill the room. Built around a single idea, not a mood board.",
    deliverables: ["Print-ready CMYK", "Social crops", "Motion version"],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Brand stories, social loops, and product reveals — animated with restraint and purpose, never decoration.",
    deliverables: ["2D + 3D motion", "Sound design", "Platform variants"],
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Marks built to survive a billboard, an app icon, and a one-color embroidery. Type first, ornament second.",
    deliverables: ["Primary + secondary", "Usage guide", "Source files"],
  },
  {
    icon: Gem,
    title: "Brand Identity",
    description:
      "End-to-end systems: voice, type, color, motion, photography direction. Everything a team needs to sound like one company.",
    deliverables: ["Strategy", "Visual system", "Brand book"],
  },
  {
    icon: Box,
    title: "3D Rendering",
    description:
      "Photoreal product renders, abstract editorial pieces, and 3D for the web — rendered in-house, not outsourced.",
    deliverables: ["Stills", "Loops", "GLB for the web"],
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description:
      "Templates, carousels, and launch kits designed for the platforms your audience actually lives on.",
    deliverables: ["Editable templates", "Launch kit", "Posting cadence"],
  },
  {
    icon: Printer,
    title: "Print Design",
    description:
      "Books, posters, packaging, and merchandise — paper stocks, foil hits, and binding methods chosen with care.",
    deliverables: ["Print-ready files", "Press liaison", "Foil + die-cuts"],
  },
  {
    icon: Layers,
    title: "Marketing Materials",
    description:
      "Pitch decks, one-pagers, and sales collateral that close deals because they read like the work earned them.",
    deliverables: ["Decks", "One-pagers", "Case studies"],
  },
];

// ---------------------------------------------------------------------
// Portfolio
// ---------------------------------------------------------------------
export const portfolioCategories: PortfolioCategory[] = [
  "Branding",
  "Flyers",
  "3D",
  "Motion",
  "Logos",
];

export const portfolio: PortfolioItem[] = [
  {
    id: "meridian-rebrand",
    title: "Meridian — A new constellation",
    client: "Meridian Capital",
    category: "Branding",
    year: "2025",
    image: "/placeholder.jpg",
    alt: "Meridian brand identity project",
    span: "wide",
  },
  {
    id: "lumen-event-flyer",
    title: "Lumen Festival — A night in glass",
    client: "Lumen Festival",
    category: "Flyers",
    year: "2025",
    image: "/placeholder.jpg",
    alt: "Lumen Festival event flyer project",
    span: "tall",
  },
  {
    id: "atlas-3d-product",
    title: "Atlas Headphones — A render in violet",
    client: "Atlas Tech",
    category: "3D",
    year: "2024",
    image: "/placeholder.jpg",
    alt: "Atlas headphones 3D rendering project",
    span: "square",
  },
  {
    id: "obsidian-logo",
    title: "Obsidian — A wordmark for a quiet company",
    client: "Obsidian Studio",
    category: "Logos",
    year: "2024",
    image: "/placeholder.jpg",
    alt: "Obsidian wordmark logo project",
    span: "square",
  },
  {
    id: "parallax-motion",
    title: "Parallax — A 30 second product film",
    client: "Parallax",
    category: "Motion",
    year: "2024",
    image: "/placeholder.jpg",
    alt: "Parallax motion graphics project",
    span: "wide",
  },
  {
    id: "fieldnotes-flyer",
    title: "Fieldnotes — A quarterly print mailer",
    client: "Fieldnotes Magazine",
    category: "Flyers",
    year: "2024",
    image: "/placeholder.jpg",
    alt: "Fieldnotes print mailer project",
    span: "tall",
  },
  {
    id: "argon-brand",
    title: "Argon — Identity for a climate fund",
    client: "Argon Capital",
    category: "Branding",
    year: "2023",
    image: "/placeholder.jpg",
    alt: "Argon brand identity project",
    span: "square",
  },
  {
    id: "northwind-motion",
    title: "Northwind — A logo reveal in 8 seconds",
    client: "Northwind",
    category: "Motion",
    year: "2023",
    image: "/placeholder.jpg",
    alt: "Northwind logo reveal project",
    span: "square",
  },
];

// ---------------------------------------------------------------------
// Why choose us
// ---------------------------------------------------------------------
export const whyChooseUs: WhyReason[] = [
  {
    title: "Fast turnaround",
    description:
      "Two-week sprints for identity work. Motion in three. We commit to dates and we hit them.",
  },
  {
    title: "Senior-only team",
    description:
      "The person in the pitch is the person doing the work. No juniors learning on your account.",
  },
  {
    title: "Reliable communication",
    description:
      "One Slack channel per project. Daily notes. Weekly Looms. You always know what's next.",
  },
  {
    title: "Unlimited creativity",
    description:
      "We will show you three directions, not one. And we will defend the one we think is right.",
  },
  {
    title: "Transparent pricing",
    description:
      "Fixed quotes, written scopes, no surprise invoices. The number we send is the number you pay.",
  },
  {
    title: "Built to last",
    description:
      "We design for ten years, not ten days. Files, type, and systems chosen for the long game.",
  },
];

// ---------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    quote:
      "Graphix Mnandi didn't give us a brand — they gave us a way to talk about ourselves. Eighteen months in, we are still using everything they shipped.",
    name: "Naledi Khumalo",
    role: "Founder & CEO",
    company: "Meridian Capital",
    initials: "NK",
  },
  {
    quote:
      "We briefed four studios. Graphix Mnandi were the only ones who pushed back. The work was the better for it.",
    name: "Tomás Herrera",
    role: "Head of Marketing",
    company: "Atlas Tech",
    initials: "TH",
  },
  {
    quote:
      "The motion reel they made for us has been on every pitch deck for two years. It still does the heavy lifting.",
    name: "Imani Okafor",
    role: "Creative Director",
    company: "Parallax",
    initials: "IO",
  },
  {
    quote:
      "Senior people, sharp opinions, files that arrive on time. It is the most boring sentence you will read all year, and it is exactly what you want.",
    name: "Sven Lindqvist",
    role: "VP Brand",
    company: "Obsidian Studio",
    initials: "SL",
  },
];

// ---------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------
export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Two weeks of conversations, audits, and a small mountain of links. We come back with a written brief you can argue with.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Three directions, presented live, recorded for the people who couldn't attend. One is always a little uncomfortable. That is on purpose.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Two tight rounds of revision against a written scope. We work in the open, in Figma, with comments on.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Source files, a usage guide, and a 30-minute handover call with whoever will run the brand after us.",
  },
];

// ---------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------
export const faq: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "A logo takes two to three weeks. A full brand identity is six to eight weeks. Motion work lands in three to four. We will give you a fixed timeline in the proposal and we hold to it.",
  },
  {
    question: "What does a project cost?",
    answer:
      "Logos start at R25,000. Brand identities from R120,000. Motion and 3D are scoped per piece. We share a written quote with line items before you sign anything.",
  },
  {
    question: "Do you work with clients outside South Africa?",
    answer:
      "About 60% of our work is with teams in the US, UK, and EU. We work in SAST but are happy to flex for time zones that matter.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Two rounds of refinement after the initial direction is presented. We will quote extra rounds in advance if the work needs them — no surprise invoices.",
  },
  {
    question: "Who owns the work at the end?",
    answer:
      "You do. Source files, usage rights, and any IP created during the engagement transfer to you on final payment. We keep the right to show the work in our case studies.",
  },
  {
    question: "Can you handle print production?",
    answer:
      "Yes. We liaise directly with our printer in Johannesburg and have accounts with paper merchants in London and New York for international work.",
  },
];

// ---------------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------------
export const finalCta = {
  heading: "Let's build something",
  highlight: "incredible",
  suffix: "together.",
  body: "We take on six new projects a year. If you have something in mind, write us a paragraph — we read every one.",
  primary: { label: "Start your project", href: "#contact" },
  secondary: { label: "WhatsApp us", href: "https://wa.me/27712345678" },
};

// ---------------------------------------------------------------------
// Social
// ---------------------------------------------------------------------
export const socials: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/", handle: "@graphixmnandi" },
  { label: "Behance", href: "https://behance.net/", handle: "/graphixmnandi" },
  { label: "Dribbble", href: "https://dribbble.com/", handle: "/graphixmnandi" },
  { label: "LinkedIn", href: "https://linkedin.com/", handle: "/company/graphix-mnandi" },
];

// ---------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------
export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// ────────────────────────────────────────────────────────────────────────
// EDIT ME: every piece of copy on the site is pulled from this file.
// Swap in real details, and the whole site updates.
// ────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Emmanuel Anyaka",
  initials: "EA",
  role: "Founder & Creative Director",
  brand: "Emmanuel",
  location: "Owerri, Nigeria",
  tagline: "Am a Fashion creator.",
  bio: "I Emmanuel, a clothing label built on clean cuts and loud ideas — but this page is about the work behind the brand: styling, art direction, and the collaborations I take on outside my own label. I've spent the last few years learning fit, fabric, and how to make a look read in three seconds on a phone screen.",
  availability: "Open to brand collaborations",
  // Real portrait — swap for your own photo. Drop a file in /public and change this path.
  portrait: "/Gowrld.jpeg",
  portraitAlt: "Portrait for the Megacious founder profile",
};

export const stats = [
  { label: "Client rating", value: "4.9", suffix: "/5" },
  { label: "Brands styled", value: "23", suffix: "+" },
  { label: "Years in the field", value: "6", suffix: "" },
  { label: "Avg. response time", value: "2", suffix: "hrs" },
];

export const rating = {
  score: 4.9,
  count: 38,
  breakdown: [
    { label: "Communication", value: 5.0 },
    { label: "Delivered on brief", value: 4.9 },
    { label: "Turnaround", value: 4.7 },
  ],
};

export const contact = {
  email: "hello@megacious.style",
  phone: "+234 8083818398",
  whatsappNumber: "2348083818398", // digits only, country code first, no +
  whatsappMessage:
    "Hi Emmanuel — I found your portfolio and I'd like to talk about a collaboration.",
  tiktok: "https://www.tiktok.com/@_marnuel",
  tiktokHandle: "@megacious",
};

export const services = [
  {
    label: "01",
    title: "Styling direction",
    description:
      "Look development, fit sessions, and on-set styling for lookbooks and campaigns.",
  },
  {
    label: "02",
    title: "Brand collaboration",
    description:
      "Capsule drops, ambassador work, and co-branded pieces with other labels.",
  },
  {
    label: "03",
    title: "Content & campaign shoots",
    description:
      "Creative direction for product photography, reels, and seasonal campaigns.",
  },
  {
    label: "04",
    title: "Consulting",
    description:
      "One-on-one sessions on running a clothing label — sourcing, pricing, and launch strategy.",
  },
];

export const pricing = [
  {
    name: "Consultation",
    price: "150",
    period: "/ session",
    description:
      "A focused hour on styling, sourcing, or getting a small label off the ground.",
    features: [
      "60-minute video or in-person call",
      "Written summary & action list",
      "3 days of follow-up messages",
    ],
    featured: false,
    cta: "Book a session",
  },
  {
    name: "Brand Collaboration",
    price: "Custom",
    period: "quote",
    description:
      "For clothing brands who want my styling on their next drop or campaign.",
    features: [
      "Look development & styling",
      "On-set direction (half or full day)",
      "Usage rights for one campaign",
      "Revisions until it's right",
    ],
    featured: true,
    cta: "Start a collab",
  },
  {
    name: "Campaign Direction",
    price: "800",
    period: "/ day",
    description:
      "Full creative direction for a shoot — styling, set, and shot list.",
    features: [
      "Pre-production & mood board",
      "Full-day, on-location direction",
      "Raw + edited select delivery",
      "Priority scheduling",
    ],
    featured: false,
    cta: "Check availability",
  },
];

export const brandsWorkedWith = [
  "Solace Studio",
  "Northline",
  "Raw Cartel",
  "Fablist",
  "Groundwork Co.",
  "Ashen",
  "Marbled",
  "Loose Thread",
];

export const testimonials = [
  {
    id: "t1",
    title: "Solace Studio",
    description:
      "Dubem styled our entire spring lookbook in four days and it still outperforms every shoot we did before him. He shows up with references, not just opinions.",
    accent: "#ff4d1c",
  },
  {
    id: "t2",
    title: "Northline",
    description:
      "We brought him in for one campaign and kept him for three. He understands a brand's language faster than anyone we've worked with.",
    accent: "#3c50ff",
  },
  {
    id: "t3",
    title: "Raw Cartel",
    description:
      "Sharp eye, calm on set, and he actually answers his messages. That combination is rarer than it should be.",
    accent: "#00dcff",
  },
  {
    id: "t4",
    title: "Groundwork Co.",
    description:
      "Our founder had a vague mood board and a launch date. Dubem turned it into a shoot that sold out the drop in a week.",
    accent: "#b4ff00",
  },
];

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Rates", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

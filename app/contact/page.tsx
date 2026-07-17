import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppIcon, TikTokIcon } from "@/components/icons/brand-icons";
import { Mail, Phone } from "lucide-react";
import { contact, profile } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: "Get in touch about a brand collaboration, styling session, or campaign.",
};

const channels = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Fastest way to reach me",
    href: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    icon: TikTokIcon,
    label: "TikTok",
    value: contact.tiktokHandle,
    href: contact.tiktok,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="container-x pb-16 pt-24 sm:pt-44">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="max-w-2xl font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
          Tell me about the brand, the budget, and the date.
        </h1>
        <p className="mt-6 max-w-md text-base text-ink/65 dark:text-bone/65">
          I read every message myself. WhatsApp is fastest if it's time-sensitive
          — otherwise the form below works just as well.
        </p>
      </section>

      <section className="container-x grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="group flex flex-col justify-between gap-6 rounded-[4px] border border-ink/10 p-6 transition-colors hover:border-signal dark:border-bone/10"
          >
            <c.icon className="h-5 w-5 text-signal" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 dark:text-bone/50">
                {c.label}
              </p>
              <p className="mt-1 truncate font-display text-lg tracking-tight">
                {c.value}
              </p>
            </div>
          </a>
        ))}
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <div className="rounded-[6px] border border-ink/10 p-8 sm:p-12 dark:border-bone/10">
          <p className="eyebrow mb-4">Or write it out</p>
          <ContactForm />
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { AnimatedFooter } from "@/components/animated-footer";
import { WhatsAppIcon, TikTokIcon } from "@/components/icons/brand-icons";
import { contact, profile } from "@/lib/site-config";
import { pinstripeSwatch, houndstoothSwatch } from "@/lib/swatch-images";

export function FooterSection() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <footer className="bg-ink text-bone">
      <div className="container-x border-t border-bone/10 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow mb-4 text-bone/50">Get in touch</p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Have a brand? Let's put something together.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={contact.whatsappWaitlist}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Join Goward Waitlist
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors hover:border-bone hover:bg-bone/5"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp me
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors hover:border-bone hover:bg-bone/5"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <ul className="space-y-4 font-mono text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-bone/80 hover:text-signal">
                  <Mail className="h-4 w-4" /> {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-bone/80 hover:text-signal">
                  <Phone className="h-4 w-4" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-bone/80 hover:text-signal">
                  <TikTokIcon className="h-4 w-4" /> {contact.tiktokHandle}
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-bone/60 underline underline-offset-4 hover:text-signal"
            >
              Or use the full contact form →
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[52vh] min-h-[380px] w-full sm:h-[60vh]">
        <AnimatedFooter
          headingLines={[profile.brand]}
          leftImage={pinstripeSwatch}
          rightImage={houndstoothSwatch}
          background="#0f0f0f"
          textColor="#f5f2ea"
        />
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-bone/10 py-6 font-mono text-[11px] uppercase tracking-[0.1em] text-bone/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}

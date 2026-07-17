"use client";

import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { contact } from "@/lib/site-config";

export function WhatsAppButton() {
  const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 [animation-duration:2.4s]" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 font-mono text-xs text-bone opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:bg-bone dark:text-ink">
        Message me
      </span>
    </a>
  );
}

"use client";

import * as React from "react";
import { contact } from "@/lib/site-config";

const fieldClasses =
  "w-full rounded-[4px] border border-ink/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-signal dark:border-bone/15 dark:placeholder:text-bone/35";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const brand = String(form.get("brand") ?? "");
    const budget = String(form.get("budget") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `Collaboration inquiry — ${brand || name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      brand && `Brand: ${brand}`,
      budget && `Budget: ${budget}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50 dark:text-bone/50">
          Your name
        </label>
        <input name="name" required className={fieldClasses} placeholder="Jane Doe" />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50 dark:text-bone/50">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className={fieldClasses}
          placeholder="jane@brand.com"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50 dark:text-bone/50">
          Brand / label
        </label>
        <input name="brand" className={fieldClasses} placeholder="Your brand name" />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50 dark:text-bone/50">
          Budget range
        </label>
        <input name="budget" className={fieldClasses} placeholder="$500 – $1000" />
      </div>
      <div className="sm:col-span-2">
        <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50 dark:text-bone/50">
          What are you working on?
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className={fieldClasses}
          placeholder="Tell me about the drop, campaign, or shoot..."
        />
      </div>
      <div className="flex items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-signal px-6 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white transition-transform hover:scale-105"
        >
          Send message
        </button>
        {sent && (
          <span className="font-mono text-xs text-moss">
            Opening your email app…
          </span>
        )}
      </div>
    </form>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile, navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-ink/10 bg-bone/80 backdrop-blur-md dark:border-white/10 dark:bg-ink/80"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={`${profile.name} — home`}>
          <span className="flex h-9 w-9 rotate-[-6deg] items-center justify-center rounded-[6px] border border-ink/70 font-mono text-[11px] font-semibold tracking-tight text-ink dark:border-bone/70 dark:text-bone">
            {profile.initials}
          </span>
          <span className="hidden font-display text-lg tracking-tight sm:block">
            {profile.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-signal dark:text-bone/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-ink px-5 py-2 font-mono text-[12px] uppercase tracking-[0.14em] text-bone transition-colors hover:bg-signal sm:block dark:bg-bone dark:text-ink dark:hover:bg-signal dark:hover:text-white"
          >
            Let's talk
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 md:hidden dark:border-bone/15"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone px-6 py-6 md:hidden dark:border-bone/10 dark:bg-ink">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.14em] text-ink/80 dark:text-bone/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

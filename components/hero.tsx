import Link from "next/link";
import { Star, ArrowDown } from "lucide-react";
import { TwistingRibbon } from "@/components/twisting-ribbon";
import { profile, rating } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28">
      {/* Signature element: a fabric-ribbon animation stitched across the hero,
          standing in for the founder's own tape measure / cut of cloth. */}
      <div className="absolute inset-0">
        <TwistingRibbon
          className="h-full w-full rounded-none opacity-90"
          segments={360}
          twistCycles={7}
          waveAmplitude={0.9}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bone/0 via-bone/10 to-bone dark:from-ink/0 dark:via-ink/20 dark:to-ink" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
      </div>

      <div className="container-x relative z-10 pb-16 sm:pb-24">
        <p className="eyebrow mb-5">
          {profile.location} — {profile.role}
        </p>

        <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[7.2rem]">
          {profile.name}
        </h1>

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-lg text-ink/75 dark:text-bone/75">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#pricing"
              className="rounded-full bg-signal px-6 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white transition-transform hover:scale-105"
            >
              See rates
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-ink/25 px-6 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink dark:border-bone/25 dark:text-bone dark:hover:border-bone"
            >
              Start a collab
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/10 pt-6 dark:border-bone/10">
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-signal text-signal"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span className="font-mono text-sm">
              {rating.score} <span className="text-ink/50 dark:text-bone/50">({rating.count} reviews)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
            </span>
            <span className="font-mono text-sm text-ink/70 dark:text-bone/70">
              {profile.availability}
            </span>
          </div>
        </div>
      </div>

      <ArrowDown className="absolute bottom-6 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 animate-bounce text-ink/40 sm:block dark:text-bone/40" />
    </section>
  );
}

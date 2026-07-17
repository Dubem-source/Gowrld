import Image from "next/image";
import { profile, rating } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="container-x py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Portrait, framed like a garment tag */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] border border-ink/10 bg-ink-raised dark:border-bone/10">
            <Image
              src={profile.portrait}
              alt={profile.portraitAlt}
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              priority={false}
            />
          </div>
          {/* Swing tag */}
          <div className="absolute -bottom-6 -right-6 flex h-24 w-24 -rotate-6 flex-col items-center justify-center gap-0.5 rounded-full bg-signal text-white shadow-xl sm:h-28 sm:w-28">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-80">
              Rated
            </span>
            <span className="font-display text-2xl">{rating.score}</span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Fit is the first thing people notice, and the last thing they forget.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-bone/70">
            {profile.bio}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-moss/40 bg-moss/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-moss">
              {profile.availability}
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {rating.breakdown.map((item) => (
              <div
                key={item.label}
                className="rounded-[4px] border border-ink/10 p-4 dark:border-bone/10"
              >
                <p className="font-mono text-2xl">{item.value.toFixed(1)}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50 dark:text-bone/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

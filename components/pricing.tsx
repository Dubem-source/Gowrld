import Link from "next/link";
import { Check } from "lucide-react";
import { pricing } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="container-x py-24 sm:py-32">
      <div className="mb-14 text-center">
        <p className="eyebrow mb-4 justify-center">Rates</p>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Straightforward pricing, no vague quotes
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink/60 dark:text-bone/60">
          Every collaboration is different — these are starting points. Reach
          out and we'll scope it to your brand and timeline.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pricing.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative flex flex-col rounded-[6px] border p-8",
              tier.featured
                ? "border-signal bg-ink text-bone shadow-[0_20px_60px_-20px_rgba(255,77,28,0.45)] dark:bg-bone dark:text-ink"
                : "border-ink/10 dark:border-bone/10"
            )}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-signal px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                Most booked
              </span>
            )}

            <h3 className="font-display text-2xl tracking-tight">{tier.name}</h3>
            <p
              className={cn(
                "mt-2 text-sm",
                tier.featured ? "text-bone/70 dark:text-ink/70" : "text-ink/60 dark:text-bone/60"
              )}
            >
              {tier.description}
            </p>

            <div className="mt-6 flex items-baseline gap-1 font-mono">
              {tier.price !== "Custom" && <span className="text-2xl">$</span>}
              <span className="text-4xl">{tier.price}</span>
              <span
                className={cn(
                  "ml-1 text-sm",
                  tier.featured ? "text-bone/60 dark:text-ink/60" : "text-ink/50 dark:text-bone/50"
                )}
              >
                {tier.period}
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                  <span className={tier.featured ? "text-bone/85 dark:text-ink/85" : "text-ink/75 dark:text-bone/75"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={cn(
                "mt-8 rounded-full px-5 py-3 text-center font-mono text-[12px] uppercase tracking-[0.14em] transition-transform hover:scale-105",
                tier.featured
                  ? "bg-signal text-white"
                  : "border border-ink/25 text-ink dark:border-bone/25 dark:text-bone"
              )}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

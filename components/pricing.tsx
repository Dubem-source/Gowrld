import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pricing, contact } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="container-x py-24 sm:py-32">
      <div className="mb-14 text-center">
        <p className="eyebrow mb-4 justify-center">Rates</p>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Services &amp; Starting Rates
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink/60 dark:text-bone/60">
          Every project is tailored to your brand's unique needs. Use these starting points as a reference for scoping.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Table Header - Desktop Only */}
        <div className="hidden grid-cols-[1.8fr_1.2fr_auto] gap-8 px-6 pb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40 dark:text-bone/40 sm:grid border-b border-ink/10 dark:border-bone/10">
          <div>Service</div>
          <div>Estimated Starting Price (USD)</div>
          <div className="w-[120px] text-right">Action</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-ink/10 dark:divide-bone/10 border-b border-ink/10 dark:border-bone/10">
          {pricing.map((item) => {
            const isWaitlist = "isWaitlist" in item && item.isWaitlist;
            const whatsappInquiryUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
              `Hi Emmanuel — I'd like to inquire about "${item.name}" from your portfolio.`
            )}`;

            return (
              <div
                key={item.name}
                className={cn(
                  "grid grid-cols-1 gap-4 py-6 px-4 transition-all duration-300 sm:grid-cols-[1.8fr_1.2fr_auto] sm:gap-8 sm:items-center sm:px-6",
                  isWaitlist
                    ? "bg-signal/5 border border-signal/20 rounded-[6px] my-3 shadow-[0_4px_20px_rgba(255,77,28,0.05)] dark:bg-signal/10"
                    : "hover:bg-ink/[0.02] dark:hover:bg-bone/[0.02]"
                )}
              >
                {/* Service Name & Description */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg sm:text-xl tracking-tight text-ink dark:text-bone">
                      {item.name}
                    </h3>
                    {isWaitlist && (
                      <span className="rounded-full bg-signal px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white">
                        Community
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-ink/50 dark:text-bone/50 max-w-md">
                    {item.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline font-mono text-sm sm:text-base">
                  <span className={cn(
                    "text-lg font-semibold",
                    isWaitlist ? "text-signal font-bold text-xl" : "text-ink dark:text-bone"
                  )}>
                    {item.price}
                  </span>
                  {item.period && (
                    <span className="ml-1 text-xs text-ink/40 dark:text-bone/40">
                      {item.period}
                    </span>
                  )}
                </div>

                {/* Action CTA */}
                <div className="sm:w-[120px] sm:text-right">
                  {isWaitlist && item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center sm:w-auto items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-transform hover:scale-105"
                    >
                      <span>Join</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center sm:w-auto items-center gap-1.5 rounded-full border border-ink/25 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-signal hover:text-signal dark:border-bone/25 dark:text-bone dark:hover:border-signal dark:hover:text-signal"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

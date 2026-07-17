import { stats } from "@/lib/site-config";

export function StatsBar() {
  return (
    <section className="border-y border-ink/10 bg-bone-raised/40 dark:border-bone/10 dark:bg-ink-raised/40">
      <div className="container-x grid grid-cols-2 divide-x divide-ink/10 py-10 sm:grid-cols-4 dark:divide-bone/10">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 text-center first:pl-0 sm:px-6">
            <p className="font-display text-4xl tracking-tight sm:text-5xl">
              {stat.value}
              <span className="text-signal">{stat.suffix}</span>
            </p>
            <p className="eyebrow mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

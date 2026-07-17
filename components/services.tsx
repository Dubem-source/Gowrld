import { services } from "@/lib/site-config";

export function Services() {
  return (
    <section id="work" className="container-x py-24 sm:py-32">
      <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-4">What I do</p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Four ways to work together
          </h2>
        </div>
        <p className="max-w-sm text-sm text-ink/60 dark:text-bone/60">
          Every project starts as a conversation, not a package — these are the
          shapes it usually takes.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-[4px] border border-ink/10 bg-ink/10 sm:grid-cols-2 dark:border-bone/10 dark:bg-bone/10">
        {services.map((service) => (
          <div
            key={service.label}
            className="group relative bg-bone p-8 transition-colors hover:bg-ink hover:text-bone sm:p-10 dark:bg-ink dark:hover:bg-bone dark:hover:text-ink"
          >
            <span className="font-mono text-xs text-signal">{service.label}</span>
            <h3 className="mt-4 font-display text-2xl tracking-tight">
              {service.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65 group-hover:text-bone/75 dark:text-bone/65 dark:group-hover:text-ink/75">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

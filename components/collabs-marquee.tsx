import { brandsWorkedWith } from "@/lib/site-config";

export function CollabsMarquee() {
  const track = [...brandsWorkedWith, ...brandsWorkedWith];

  return (
    <section className="overflow-hidden border-y border-ink/10 py-8 dark:border-bone/10">
      <p className="eyebrow container-x mb-6">Brands I've worked with</p>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {track.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="font-display text-3xl tracking-tight text-ink/25 sm:text-4xl dark:text-bone/25"
          >
            {brand}
            <span className="mx-6 align-middle text-signal">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

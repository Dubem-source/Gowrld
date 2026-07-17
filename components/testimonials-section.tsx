"use client";

import { TestimonialsCard } from "@/components/testimonials-card";
import { testimonials } from "@/lib/site-config";
import { monogramDataUri } from "@/lib/monogram";

export function TestimonialsSection() {
  const items = testimonials.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    image: monogramDataUri(t.title, t.accent),
  }));

  return (
    <section className="container-x py-24 sm:py-32">
      <div className="mb-6 sm:mb-2">
        <p className="eyebrow mb-4">Word from the brands</p>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          What it's like on set
        </h2>
      </div>
      <TestimonialsCard items={items} width={620} autoPlay autoPlayInterval={5000} />
    </section>
  );
}

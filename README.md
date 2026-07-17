# Founder Portfolio

A one-page, dark/light mode portfolio for a clothing-brand founder — separate
from the brand's own site. Built with Next.js 14 (App Router), TypeScript, and
Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first build needs internet access once, to
pull the Google Fonts (Fraunces, Inter, JetBrains Mono).

## Where to edit things

Almost everything on the page is pulled from **one file**:

```
lib/site-config.ts
```

Open it and change:
- `profile` — name, role, tagline, bio, portrait image
- `stats` — the four numbers under the hero
- `rating` — overall score + the three sub-scores in the About section
- `contact` — email, phone, WhatsApp number + prefilled message, TikTok
- `services` — the four "what I do" cards
- `pricing` — the three rate cards
- `brandsWorkedWith` — names in the scrolling marquee
- `testimonials` — the quote cards (avatars are auto-generated initials, no photos needed)

## Swap in the real photo

The one real photo on the site is the portrait in the About section
(`lib/site-config.ts` → `profile.portrait`). It's currently a stock photo from
Unsplash as a placeholder. To use a real one:

1. Drop your photo in `/public`, e.g. `/public/portrait.jpg`
2. Change `profile.portrait` to `"/portrait.jpg"`

## Structure

```
app/
  layout.tsx          root layout, fonts, theme provider
  page.tsx             the one-page portfolio
  contact/page.tsx      dedicated contact route (form + direct links)
  globals.css
components/
  navbar.tsx            nav + dark/light toggle
  hero.tsx               hero with the twisting-ribbon background
  stats-bar.tsx
  about.tsx
  services.tsx
  collabs-marquee.tsx
  testimonials-section.tsx   wraps testimonials-card.tsx with data
  pricing.tsx
  footer-section.tsx     wraps animated-footer.tsx with contact links
  whatsapp-button.tsx    floating WhatsApp CTA (bottom-right, all pages)
  contact-form.tsx       opens a prefilled email on submit
  twisting-ribbon.tsx    the 3D ribbon canvas animation (your component)
  testimonials-card.tsx  the stacked testimonial cards (your component)
  animated-footer.tsx    the ASCII reveal footer (your component)
  icons/brand-icons.tsx  WhatsApp + TikTok icons (not in lucide-react)
lib/
  site-config.ts         <- almost all editable content lives here
  utils.ts                cn() helper
  monogram.ts             generates the testimonial avatar tags
  swatch-images.ts         generates the footer's ASCII source images
```

## Dark mode

Dark mode is the primary theme (matches the vengeance-ui aesthetic: near-black
`#0f0f0f`, signal orange `#ff4d1c`, mono type for labels/prices). Toggle lives
in the navbar; it defaults to dark on first load.

## Notes

- No backend: the contact form opens the visitor's email client with the
  message pre-filled. Swap `handleSubmit` in `components/contact-form.tsx`
  for a real API call (Formspree, Resend, your own route handler, etc.) if
  you want it delivered without opening Mail.
- The WhatsApp button and the "WhatsApp me" links use `contact.whatsappNumber`
  — set this to your real number in international format, digits only
  (e.g. `2348001234567`).
- The footer's ASCII-art panels are generated fabric-swatch patterns
  (`lib/swatch-images.ts`), not photos — so there's nothing to break if you
  don't add extra images. Swap them for real photos any time by changing
  `leftImage` / `rightImage` in `components/footer-section.tsx`.

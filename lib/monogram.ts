function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/** Builds a small square "swatch card" SVG data URI: brand initials on a
 * tinted panel, styled like a fashion sample tag rather than a stock photo. */
export function monogramDataUri(name: string, accent: string) {
  const initials = initialsOf(name);
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0f0f0f" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#g)"/>
  <rect x="24" y="24" width="552" height="552" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="2"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
        font-family="Georgia, serif" font-size="220" fill="#ffffff" fill-opacity="0.92">${initials}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

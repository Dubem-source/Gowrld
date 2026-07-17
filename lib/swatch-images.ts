// The AnimatedFooter component samples the brightness of two images to build
// its ASCII-art panels. Rather than depend on external photos that might not
// load, we hand it two generated fabric-swatch patterns as SVG data URIs —
// on brand for a clothing label, and guaranteed to render with zero requests.

function svgToDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Pinstripe swatch — tall aspect ratio so the ASCII grid reads as a column.
export const pinstripeSwatch = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="440">
  <rect width="300" height="440" fill="#050505"/>
  ${Array.from({ length: 20 })
    .map((_, i) => `<rect x="${i * 16}" y="0" width="4" height="440" fill="#ffffff"/>`)
    .join("")}
  <circle cx="150" cy="220" r="120" fill="#ffffff" opacity="0.9"/>
</svg>
`);

// Houndstooth-ish checker swatch — the mirrored panel.
export const houndstoothSwatch = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="440">
  <rect width="300" height="440" fill="#050505"/>
  ${Array.from({ length: 12 })
    .map((_, row) =>
      Array.from({ length: 9 })
        .map((_, col) => {
          const on = (row + col) % 2 === 0;
          if (!on) return "";
          return `<rect x="${col * 34}" y="${row * 38}" width="30" height="34" fill="#ffffff"/>`;
        })
        .join("")
    )
    .join("")}
</svg>
`);

/* ═══════════════════════════════════════════════════════════════════════════
   <KairovoAppIcon app="ra|ss|ad|vm" size="xs|sm|md|lg|96|144" />
   ───────────────────────────────────────────────────────────────────────────
   The corner-mark icon system.  Each app icon is a deep-ink rounded square
   with a triangular brand-colour swatch in the top-right and the app's
   letter in italic serif occupying the rest of the face.
   ═══════════════════════════════════════════════════════════════════════════ */

const APP_ICON_SPEC = {
  ra: { letter: "R", deep: "#061229", triStart: "#0F2D6E", triEnd: "#4F86F7", letterStart: "#EBF3FD", letterEnd: "#A0C4FF" },
  ss: { letter: "S", deep: "#062E22", triStart: "#0D6E4A", triEnd: "#2DCE96", letterStart: "#EEF8F4", letterEnd: "#A0FFE0" },
  ad: { letter: "A", deep: "#1E0E06", triStart: "#7A2800", triEnd: "#FF7A2F", letterStart: "#FDF0E8", letterEnd: "#FFD0A0" },
  vm: { letter: "V", deep: "#120828", triStart: "#3A0878", triEnd: "#A855F7", letterStart: "#EEEDFE", letterEnd: "#D4A0FF" },
};

function KairovoAppIcon({ app = "ra", size = 96, rounded = 0.22 }) {
  const spec = APP_ICON_SPEC[app];
  const n = typeof size === "number" ? size : (
    { xs: 24, sm: 40, md: 64, lg: 96, xl: 144 }[size] || 96
  );
  const r = Math.round(n * rounded);
  // Triangle extends ~62% across; letter ~70% of width
  const triSize = Math.round(n * 0.62);
  const letterSize = Math.round(n * 0.78);
  const gradId = `grad-${app}`;
  const triGradId = `tri-${app}`;
  const letterGradId = `letter-${app}`;

  return (
    <svg width={n} height={n} viewBox={`0 0 ${n} ${n}`} xmlns="http://www.w3.org/2000/svg" style={{ display: "block", borderRadius: r, overflow: "hidden" }}>
      <defs>
        <linearGradient id={triGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={spec.triStart} />
          <stop offset="1" stopColor={spec.triEnd} />
        </linearGradient>
        <linearGradient id={letterGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={spec.letterStart} />
          <stop offset="1" stopColor={spec.letterEnd} />
        </linearGradient>
        <clipPath id={`clip-${app}-${n}`}>
          <rect width={n} height={n} rx={r} />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${app}-${n})`}>
        <rect width={n} height={n} fill={spec.deep} />
        <polygon points={`0,0 ${triSize},0 0,${triSize}`} fill={`url(#${triGradId})`} opacity="0.95" />
        <text
          x={n * 0.5}
          y={n * 0.72}
          textAnchor="middle"
          fontFamily="Instrument Serif, Georgia, serif"
          fontStyle="italic"
          fontSize={letterSize}
          fontWeight="400"
          fill={`url(#${letterGradId})`}
        >
          {spec.letter}
        </text>
      </g>
    </svg>
  );
}

window.KairovoAppIcon = KairovoAppIcon;
window.APP_ICON_SPEC = APP_ICON_SPEC;

/**
 * Hero illustration: a phone showing a text thread with two photos, and the
 * finished social post beside it. Inline SVG, no people, no industry.
 */
export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-labelledby="hero-visual-title"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="hero-visual-title">
        A phone text thread with two photos sent to a Fynz number, and the finished social post built from them.
      </title>

      {/* Phone */}
      <rect x="28" y="20" width="220" height="380" rx="28" fill="#0D2154" />
      <rect x="40" y="32" width="196" height="356" rx="20" fill="#F5F0EB" />
      <rect x="112" y="40" width="52" height="6" rx="3" fill="#0D2154" opacity="0.25" />

      {/* Thread header */}
      <rect x="40" y="56" width="196" height="40" fill="#1A3375" />
      <text x="138" y="81" textAnchor="middle" fontSize="13" fontWeight="700" fill="#F5F0EB" fontFamily="system-ui, sans-serif">
        Fynz number
      </text>

      {/* Outgoing photo 1 */}
      <rect x="92" y="108" width="132" height="92" rx="12" fill="#C8895A" />
      <rect x="104" y="120" width="108" height="68" rx="6" fill="#E4A87A" />
      <circle cx="132" cy="146" r="12" fill="#F5F0EB" opacity="0.9" />
      <rect x="152" y="150" width="52" height="30" rx="4" fill="#0D2154" opacity="0.85" />

      {/* Outgoing photo 2 */}
      <rect x="92" y="212" width="132" height="92" rx="12" fill="#C8895A" />
      <rect x="104" y="224" width="108" height="68" rx="6" fill="#E4A87A" />
      <rect x="112" y="234" width="92" height="12" rx="3" fill="#0D2154" opacity="0.85" />
      <rect x="112" y="254" width="60" height="28" rx="4" fill="#F5F0EB" opacity="0.9" />
      <circle cx="192" cy="268" r="12" fill="#0D2154" opacity="0.85" />

      {/* Incoming reply */}
      <rect x="52" y="316" width="112" height="34" rx="12" fill="#1A3375" />
      <text x="108" y="338" textAnchor="middle" fontSize="12" fontWeight="700" fill="#F5F0EB" fontFamily="system-ui, sans-serif">
        Got both. On it.
      </text>

      {/* Arrow */}
      <path d="M262 210 H318" stroke="#C8895A" strokeWidth="6" strokeLinecap="round" />
      <path d="M304 194 L322 210 L304 226" stroke="#C8895A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Finished post */}
      <rect x="336" y="60" width="200" height="300" rx="18" fill="#FFFFFF" stroke="#0D2154" strokeOpacity="0.12" strokeWidth="2" />
      <circle cx="362" cy="86" r="12" fill="#0D2154" />
      <rect x="382" y="78" width="80" height="8" rx="4" fill="#0D2154" opacity="0.7" />
      <rect x="382" y="91" width="48" height="6" rx="3" fill="#0D2154" opacity="0.3" />

      {/* Post image built from photo 1 */}
      <rect x="348" y="110" width="176" height="150" rx="10" fill="#C8895A" />
      <rect x="360" y="122" width="152" height="126" rx="6" fill="#E4A87A" />
      <circle cx="398" cy="168" r="18" fill="#F5F0EB" opacity="0.9" />
      <rect x="428" y="176" width="72" height="44" rx="5" fill="#0D2154" opacity="0.85" />
      <rect x="360" y="220" width="152" height="28" fill="#0D2154" opacity="0.9" />
      <rect x="370" y="230" width="92" height="8" rx="4" fill="#F5F0EB" />

      {/* Caption lines */}
      <rect x="348" y="276" width="160" height="8" rx="4" fill="#0D2154" opacity="0.75" />
      <rect x="348" y="292" width="124" height="8" rx="4" fill="#0D2154" opacity="0.45" />
      <rect x="348" y="308" width="140" height="8" rx="4" fill="#0D2154" opacity="0.45" />

      {/* Reactions row */}
      <circle cx="356" cy="340" r="6" fill="#C8895A" />
      <circle cx="376" cy="340" r="6" fill="#C8895A" />
      <circle cx="396" cy="340" r="6" fill="#C8895A" />
      <rect x="412" y="336" width="56" height="8" rx="4" fill="#0D2154" opacity="0.3" />
    </svg>
  );
}

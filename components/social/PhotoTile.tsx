/**
 * Abstract "photo" compositions in the brand palette. They stand in for the
 * photos a team texts in, without depicting any one industry or any people.
 */
export function PhotoTile({ variant, className = "" }: { variant: number; className?: string }) {
  const v = ((variant % 6) + 6) % 6;
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="160" height="120" fill="#E4A87A" />
      {v === 0 && (
        <>
          <rect x="0" y="70" width="160" height="50" fill="#C8895A" />
          <rect x="22" y="34" width="70" height="48" rx="4" fill="#0D2154" />
          <circle cx="122" cy="44" r="18" fill="#F5F0EB" />
        </>
      )}
      {v === 1 && (
        <>
          <circle cx="80" cy="62" r="42" fill="#F5F0EB" />
          <circle cx="80" cy="62" r="26" fill="#C8895A" />
          <rect x="0" y="100" width="160" height="20" fill="#0D2154" />
        </>
      )}
      {v === 2 && (
        <>
          <rect x="0" y="0" width="160" height="40" fill="#0D2154" />
          <rect x="18" y="52" width="124" height="14" rx="3" fill="#F5F0EB" />
          <rect x="18" y="78" width="80" height="26" rx="3" fill="#C8895A" />
          <rect x="108" y="78" width="34" height="26" rx="3" fill="#0D2154" />
        </>
      )}
      {v === 3 && (
        <>
          <rect x="0" y="0" width="70" height="120" fill="#C8895A" />
          <rect x="90" y="20" width="52" height="80" rx="6" fill="#0D2154" />
          <circle cx="35" cy="60" r="16" fill="#F5F0EB" />
        </>
      )}
      {v === 4 && (
        <>
          <rect x="0" y="80" width="160" height="40" fill="#0D2154" />
          <rect x="20" y="24" width="120" height="60" rx="30" fill="#F5F0EB" />
          <rect x="44" y="44" width="72" height="20" rx="10" fill="#C8895A" />
        </>
      )}
      {v === 5 && (
        <>
          <rect x="16" y="16" width="56" height="88" rx="4" fill="#0D2154" />
          <rect x="84" y="16" width="60" height="40" rx="4" fill="#F5F0EB" />
          <rect x="84" y="64" width="60" height="40" rx="4" fill="#C8895A" />
        </>
      )}
    </svg>
  );
}

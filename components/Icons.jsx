export const ICONS = {
  crane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21h16M7 21V6l11-3M18 3v5M18 8v4M16 12h4v3h-4z"/></svg>
  ),
  basket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21h7M7 21V11l9-6M8 21v-4h5v4M16 5v3"/><circle cx="17.5" cy="10" r="2.5"/></svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-5h6v5"/></svg>
  ),
  tow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 17h20M4 17v-4l3-5h7l3 5h3v4"/><circle cx="8" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
  ),
  cargo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v6M9 6l3 3 3-3M4 12h16v8H4zM4 16h16"/></svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M4 21V10l5 3v-3l5 3v-3l6 3v8M17 21v-4h2v4"/></svg>
  ),
};

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 42h36" stroke="#132B21" strokeWidth="3" strokeLinecap="round"/>
      <path d="M14 42V12l22-6" stroke="#132B21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 6v8" stroke="#C9A24B" strokeWidth="3" strokeLinecap="round"/>
      <path d="M36 14v10" stroke="#C9A24B" strokeWidth="2" strokeDasharray="3 3"/>
      <path d="M32 24h8v6h-8z" fill="#C9A24B"/>
      <path d="M14 20l10-3M14 28l14-4" stroke="#132B21" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function CraneArt() {
  return (
    <svg className="crane-art" viewBox="0 0 620 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#FFDD13" strokeWidth="2.5" strokeLinecap="round">
        <path d="M140 520V120"/><path d="M180 520V120"/>
        <path d="M140 160h40M140 220h40M140 280h40M140 340h40M140 400h40M140 460h40"/>
        <path d="M140 120L180 160M180 120L140 160M140 220L180 260M180 220L140 260M140 320L180 360M180 320L140 360M140 420L180 460M180 420L140 460"/>
        <path d="M100 120h480"/><path d="M100 120l60-40 420 40"/>
        <path d="M160 80l-60 40M220 120l-30-30M300 120l-45-32M380 120l-60-36M460 120l-75-38M540 120l-90-40"/>
        <path d="M60 140l40-20M60 140h40"/>
        <line className="cable" x1="480" y1="120" x2="480" y2="330"/>
        <path d="M480 330c-14 0-14 22 0 22s14-22 0-22z"/>
        <rect x="440" y="360" width="80" height="56" rx="4"/>
        <path d="M480 352v8M456 360l24-16 24 16"/>
      </g>
    </svg>
  );
}

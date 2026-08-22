export default function CarIllustration() {
  return (
    <svg
      className="car-illustration"
      viewBox="0 0 1600 680"
      role="img"
      aria-label="Dark studio illustration of a performance sedan inspired by the Mitsubishi Lancer"
    >
      <defs>
        <linearGradient id="bodyTop" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#303438" />
          <stop offset="0.22" stopColor="#111417" />
          <stop offset="0.7" stopColor="#060708" />
          <stop offset="1" stopColor="#181b1d" />
        </linearGradient>
        <linearGradient id="windowGlass" x1="0" y1="0" x2="1" y2="0.7">
          <stop offset="0" stopColor="#151b20" />
          <stop offset="0.5" stopColor="#050708" />
          <stop offset="1" stopColor="#23292d" />
        </linearGradient>
        <linearGradient id="redEdge" x1="0" x2="1">
          <stop offset="0" stopColor="#6b0707" stopOpacity="0" />
          <stop offset="0.5" stopColor="#e31818" />
          <stop offset="1" stopColor="#8c0808" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="rim" cx="42%" cy="36%">
          <stop offset="0" stopColor="#a9afb2" />
          <stop offset="0.16" stopColor="#353a3d" />
          <stop offset="0.5" stopColor="#0a0c0d" />
          <stop offset="1" stopColor="#030303" />
        </radialGradient>
        <filter id="carShadow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="32" />
        </filter>
        <filter id="redGlow" x="-50%" y="-100%" width="200%" height="300%">
          <feGaussianBlur stdDeviation="13" />
        </filter>
      </defs>

      <ellipse cx="840" cy="592" rx="620" ry="48" fill="#000" opacity="0.8" filter="url(#carShadow)" />
      <path
        d="M202 473c48-55 104-93 190-116l194-53c96-115 196-177 362-184 166-8 280 51 413 170l98 32c50 16 85 50 101 103l-22 87-121 17-39-58c-24-35-66-57-110-57-53 0-99 30-121 76l-14 31-552 2-16-38c-20-48-67-80-119-80-60 0-112 42-126 100l-5 22-133-13-25-24 45-17Z"
        fill="url(#bodyTop)"
      />
      <path d="m582 305 61-72c78-76 165-105 284-111 139-7 251 43 365 145l22 23-732 15Z" fill="#050607" stroke="#3d4245" strokeWidth="3" />
      <path d="m666 276 68-77c45-34 101-53 165-59l-4 135-229 1Z" fill="url(#windowGlass)" />
      <path d="m924 139 8 136 310-4c-89-78-187-123-318-132Z" fill="url(#windowGlass)" />
      <path d="m918 134 3 164" stroke="#555b5e" strokeWidth="8" />
      <path d="m584 307 759-17" stroke="#9da2a3" strokeOpacity="0.25" strokeWidth="4" />
      <path d="M220 471c171-64 407-77 635-71 256 8 471-10 640-61" fill="none" stroke="#9ea3a5" strokeOpacity="0.2" strokeWidth="4" />
      <path d="M611 340c180 10 404 4 676-26" fill="none" stroke="#d4d8da" strokeOpacity="0.12" strokeWidth="3" />
      <path d="m1334 333 113-3 84 44-150 25-47-66Z" fill="#300202" />
      <path d="m1357 341 118 7 44 25-128 13-34-45Z" fill="#ff2929" opacity="0.76" filter="url(#redGlow)" />
      <path d="m1357 341 118 7 44 25-128 13-34-45Z" fill="#ff6262" opacity="0.9" />
      <path d="m205 464 112-34 24 44-139 23 3-33Z" fill="#c6d6db" opacity="0.86" />
      <path d="M227 470 312 445" stroke="#eafaff" strokeWidth="9" filter="url(#redGlow)" />
      <path d="M324 526c10-85 62-137 129-137 72 0 123 58 128 135" fill="#070809" stroke="#2d3133" strokeWidth="5" />
      <path d="M1134 521c9-79 59-128 127-128 70 0 122 53 131 125" fill="#070809" stroke="#2d3133" strokeWidth="5" />

      {[453, 1262].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="526" r="111" fill="#020303" stroke="#1b1d1f" strokeWidth="19" />
          <circle cx={cx} cy="526" r="76" fill="url(#rim)" stroke="#4d5356" strokeWidth="4" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <path
              key={angle}
              d={`M${cx} 522  ${cx + 68} 503 ${cx + 20} 535Z`}
              fill="#171a1c"
              transform={`rotate(${angle} ${cx} 526)`}
            />
          ))}
          <circle cx={cx} cy="526" r="22" fill="#0a0b0c" stroke="#73797c" strokeWidth="5" />
          <circle cx={cx} cy="526" r="7" fill="#d71b1b" />
        </g>
      ))}

      <path d="M354 591h1038" stroke="url(#redEdge)" strokeWidth="3" opacity="0.8" />
      <path d="M185 512c340 47 978 50 1361-6" fill="none" stroke="#717679" strokeOpacity="0.2" strokeWidth="5" />
      <text x="936" y="365" fill="#b7bbbd" opacity="0.34" fontFamily="Arial, sans-serif" fontSize="18" letterSpacing="8">LANCER</text>
    </svg>
  )
}

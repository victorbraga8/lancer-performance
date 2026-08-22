const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))
const smooth = (value) => {
  const x = clamp(value)
  return x * x * (3 - 2 * x)
}
const segment = (progress, start, end) => smooth((progress - start) / (end - start))

const BoltRing = () => (
  <g>
    {[0, 72, 144, 216, 288].map((angle) => (
      <circle
        key={angle}
        cx={Math.cos((angle * Math.PI) / 180) * 19}
        cy={Math.sin((angle * Math.PI) / 180) * 19}
        r="4.5"
        fill="#80878b"
      />
    ))}
  </g>
)

export default function WheelAssembly({ progress }) {
  const tireX = -190 * segment(progress, 0.05, 0.3)
  const rimX = -72 * segment(progress, 0.18, 0.45)
  const discX = 82 * segment(progress, 0.35, 0.66)
  const caliperX = 178 * segment(progress, 0.52, 0.82)
  const hubX = 265 * segment(progress, 0.68, 0.98)
  const guideOpacity = clamp((progress - 0.16) * 2.2)
  const rotation = progress * 38

  return (
    <svg className="wheel-assembly" viewBox="0 0 960 650" role="img" aria-label="Exploded technical view of wheel, rim, brake disc, caliper and hub">
      <defs>
        <radialGradient id="tireFace">
          <stop offset="0.63" stopColor="#0b0d0e" />
          <stop offset="0.79" stopColor="#232629" />
          <stop offset="0.94" stopColor="#070809" />
          <stop offset="1" stopColor="#26292a" />
        </radialGradient>
        <radialGradient id="metalFace" cx="35%" cy="25%">
          <stop offset="0" stopColor="#d9dcde" />
          <stop offset="0.3" stopColor="#686e72" />
          <stop offset="0.72" stopColor="#181b1d" />
          <stop offset="1" stopColor="#6a7073" />
        </radialGradient>
        <radialGradient id="discFace" cx="38%" cy="32%">
          <stop offset="0" stopColor="#e8ebec" />
          <stop offset="0.52" stopColor="#777d80" />
          <stop offset="0.72" stopColor="#303437" />
          <stop offset="1" stopColor="#989da0" />
        </radialGradient>
        <linearGradient id="caliperFace" x1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff3737" />
          <stop offset="0.42" stopColor="#a5050b" />
          <stop offset="1" stopColor="#3d0204" />
        </linearGradient>
        <filter id="partShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#000" floodOpacity="0.72" />
        </filter>
        <filter id="partGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <ellipse cx="480" cy="560" rx={135 + progress * 200} ry="25" fill="#000" opacity="0.74" filter="url(#partGlow)" />

      <g className="technical-guides" opacity={guideOpacity}>
        <path d="M105 325H858" />
        {[-190, -72, 82, 178, 265].map((offset) => (
          <path key={offset} d={`M${480 + offset} 300v50`} />
        ))}
      </g>

      <g transform={`translate(${480 + hubX} 325)`} filter="url(#partShadow)">
        <circle r="62" fill="#0b0d0e" stroke="#596064" strokeWidth="8" />
        <circle r="36" fill="url(#metalFace)" stroke="#979da0" strokeWidth="3" />
        <circle r="12" fill="#151719" />
        <BoltRing />
      </g>

      <g transform={`translate(${480 + discX} 325) rotate(${rotation * 0.65})`} filter="url(#partShadow)">
        <circle r="139" fill="url(#discFace)" stroke="#b4b8ba" strokeWidth="3" />
        <circle r="105" fill="none" stroke="#25292b" strokeWidth="7" opacity="0.65" />
        {Array.from({ length: 18 }, (_, index) => index * 20).map((angle) => (
          <circle
            key={angle}
            cx={Math.cos((angle * Math.PI) / 180) * 119}
            cy={Math.sin((angle * Math.PI) / 180) * 119}
            r="4"
            fill="#303437"
          />
        ))}
        <circle r="48" fill="#202426" stroke="#7c8386" strokeWidth="5" />
        <BoltRing />
      </g>

      <g transform={`translate(${480 + caliperX} 325)`} filter="url(#partShadow)">
        <path d="M68-117c35 24 54 70 50 120-4 55-29 98-65 118l-40-42c19-15 30-43 33-79 2-32-5-60-22-79l44-38Z" fill="url(#caliperFace)" stroke="#ff4b4b" strokeOpacity="0.45" strokeWidth="3" />
        <path d="M67-68c17 22 20 92-5 126" fill="none" stroke="#ff7777" strokeOpacity="0.5" strokeWidth="5" />
        <text x="60" y="10" fill="#f8cccc" fontFamily="Arial, sans-serif" fontSize="12" letterSpacing="4" textAnchor="middle" transform="rotate(90 60 10)">PERFORMANCE</text>
      </g>

      <g transform={`translate(${480 + rimX} 325) rotate(${-rotation})`} filter="url(#partShadow)">
        <circle r="173" fill="#101214" stroke="#5b6265" strokeWidth="9" />
        <circle r="151" fill="url(#metalFace)" stroke="#171a1b" strokeWidth="8" />
        {Array.from({ length: 9 }, (_, index) => index * 40).map((angle) => (
          <path key={angle} d="M-11-136 13-136 25-46 7-20-14-40Z" fill="#111416" stroke="#7c8386" strokeOpacity="0.66" strokeWidth="3" transform={`rotate(${angle})`} />
        ))}
        <circle r="53" fill="#080a0b" stroke="#72787b" strokeWidth="5" />
        <BoltRing />
        <circle r="14" fill="#cf1419" />
      </g>

      <g transform={`translate(${480 + tireX} 325) rotate(${rotation * 0.25})`} filter="url(#partShadow)">
        <circle r="214" fill="url(#tireFace)" stroke="#303436" strokeWidth="7" />
        <circle r="158" fill="#050607" stroke="#303436" strokeWidth="5" />
        {Array.from({ length: 30 }, (_, index) => index * 12).map((angle) => (
          <path key={angle} d="M-7-211 8-211 16-191-13-191Z" fill="#4b4f50" opacity="0.72" transform={`rotate(${angle})`} />
        ))}
        <path id="tireArc" d="M-145-145A205 205 0 0 1 145-145" fill="none" />
        <text fill="#8b8f91" fontFamily="Arial, sans-serif" fontSize="14" letterSpacing="7">
          <textPath href="#tireArc" startOffset="50%" textAnchor="middle">CONTROL / RESPONSE</textPath>
        </text>
      </g>
    </svg>
  )
}

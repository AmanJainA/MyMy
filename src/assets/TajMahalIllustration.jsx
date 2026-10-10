// A simplified, original line-illustration of a Mughal-marble monument silhouette
// (not a photo/reproduction of any specific artwork) used purely as decoration.
export default function TajMahalIllustration({ className }) {
  return (
    <svg viewBox="0 0 400 220" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="200" cy="205" rx="180" ry="8" fill="#c9a227" opacity="0.12" />
      {/* side minarets */}
      {[40, 360].map((x, i) => (
        <g key={i}>
          <rect x={x - 6} y="90" width="12" height="105" fill="#fdf4e6" stroke="#e8cf86" strokeWidth="1.4" />
          <polygon points={`${x - 9},90 ${x + 9},90 ${x},70`} fill="#eecf86" />
          <circle cx={x} cy="66" r="3" fill="#c9a227" />
        </g>
      ))}
      {[130, 270].map((x, i) => (
        <g key={i}>
          <rect x={x - 5} y="70" width="10" height="125" fill="#fffaf3" stroke="#e8cf86" strokeWidth="1.2" />
          <polygon points={`${x - 8},70 ${x + 8},70 ${x},52`} fill="#eecf86" />
          <circle cx={x} cy="48" r="2.6" fill="#c9a227" />
        </g>
      ))}
      {/* central building */}
      <rect x="130" y="110" width="140" height="90" fill="#fffdf8" stroke="#e8cf86" strokeWidth="1.6" />
      <path d="M130 110 Q200 40 270 110 Z" fill="#fdf4e6" stroke="#e8cf86" strokeWidth="1.6" />
      {/* main dome */}
      <path d="M160 70 Q200 10 240 70 Z" fill="#fffdf8" stroke="#e8cf86" strokeWidth="1.6" />
      <circle cx="200" cy="8" r="4" fill="#c9a227" />
      <line x1="200" y1="12" x2="200" y2="30" stroke="#c9a227" strokeWidth="2" />
      {/* small corner domes */}
      {[150, 250].map((x, i) => (
        <path key={i} d={`M${x - 14} 100 Q${x} 78 ${x + 14} 100 Z`} fill="#fdf4e6" stroke="#e8cf86" strokeWidth="1.2" />
      ))}
      {/* archway */}
      <path d="M185 200 L185 150 Q200 128 215 150 L215 200 Z" fill="#f7d9d3" opacity="0.5" />
      {/* base platform */}
      <rect x="90" y="198" width="220" height="10" fill="#eecf86" opacity="0.6" />
    </svg>
  );
}

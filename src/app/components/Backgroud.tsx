export default function Backgroud() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-red-600/20 blur-[120px]" />
      <div className="absolute right-1/4 bottom-0 h-[28rem] w-[28rem] rounded-full bg-red-600/20 blur-[120px]" />
      <div className="w-full h-full pointer-events-none absolute inset-0">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern
              id="crossLines"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
              patternTransform="rotate(60)"
            >
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                stroke="white"
                strokeOpacity="0.05"
                strokeWidth="2"
              />
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="0"
                stroke="white"
                strokeOpacity="0.05"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crossLines)" />
        </svg>
      </div>
    </div>
  );
}

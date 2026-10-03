export default function Backgroud() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(247,1,30,0.22),transparent_70%)]" />
      <div className="absolute left-1/4 top-0 h-[14rem] w-[14rem] rounded-full bg-red-600/15 blur-[80px] md:h-[28rem] md:w-[28rem] md:bg-red-600/15 md:blur-[140px]" />
      <div className="absolute right-1/4 bottom-0 h-[14rem] w-[14rem] rounded-full bg-red-600/15 blur-[80px] md:h-[28rem] md:w-[28rem] md:bg-red-600/15 md:blur-[140px]" />
      <div className="absolute inset-0 hidden h-full w-full pointer-events-none md:block [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_30%,transparent_100%)]">
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
                strokeOpacity="0.045"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="0"
                stroke="white"
                strokeOpacity="0.045"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crossLines)" />
        </svg>
      </div>
      <div className="grain absolute inset-0 hidden md:block" />
    </div>
  );
}

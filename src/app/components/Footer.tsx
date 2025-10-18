export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-row gap-5 items-center justify-center  text-sm text-gray-400">
          <p>
            Powered by{" "}
            <span className="text-[#F7011E] font-semibold">
              Wojciech Aniszewski © 2025
            </span>{" "}
          </p>
          <p>
            Visual concept by{" "}
            <a
              href="mailto:wilczynska.visuals@gmail.com"
              className="text-[#F7011E] font-bold"
            >
              wilczynska.visuals
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

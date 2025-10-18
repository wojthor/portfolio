export default function HeroSection() {
  return (
    <section className="relative z-10 container mx-auto px-4 md:px-6 pt-20 md:py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#F7011E]/20 bg-[#F7011E]/5 px-3 py-1 text-xs md:px-4 md:py-1.5 uppercase tracking-widest text-[#F7011E] backdrop-blur-sm">
          Info
        </div>
        <h2 className="text-2xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            About
          </span>{" "}
          <span className="bg-gradient-to-r from-[#F7011E] via-[#ff3b3b] to-[#F7011E] bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="border  hover:border-[#F7011E]/40 transition-all  border-white/10 bg-white/5 rounded-2xl p-4 md:p-8 backdrop-blur-sm text-gray-300 text-base md:text-lg leading-relaxed text-left md:text-center">
          <p>
            Hello! My name is{" "}
            <span className="text-[#F7011E] font-semibold">
              Wojciech Aniszewski
            </span>
            , and I’m based in Gdańsk, Poland. I’m passionate about creating
            elegant, efficient, and modern web experiences.
          </p>
          <p className="mt-3 md:mt-4">
            I work with <span className="text-[#F7011E]">Next.js</span>,{" "}
            <span className="text-[#F7011E]">React</span>,{" "}
            <span className="text-[#F7011E]">GraphQL</span>,{" "}
            <span className="text-[#F7011E]">TypeScript</span>, and{" "}
            <span className="text-[#F7011E]">Python</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

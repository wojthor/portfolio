"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { featuredTestimonialAuthor } from "@/data/testimonial";

const testimonialParagraphs = [
  "I strongly recommend partnership with Wojtek. The whole landing page was done as I wanted to - basing on my requirements. However, I'd also say that it was better than I expected. It was finished very quickly, the website is highly intuitive to use, and overall I'm very satisfied of the final result.",
  "When I had needed any changes to be provided, all of them would have been added there immediately. Moreover, Wojtek suggests many interesting and great things that would improve a website. For me, it was a huge advantage that he was willing to get the best result.",
  "I strongly recommend him!",
];

/** Avatar with image or initials fallback if the file is missing */
function AuthorBlock() {
  const { fullName, avatarSrc } = featuredTestimonialAuthor;
  const [broken, setBroken] = useState(false);

  const initials = fullName
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3 min-w-0">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15 bg-zinc-800">
        {!broken ? (
          <Image
            src={avatarSrc}
            alt={`${fullName}`}
            width={96}
            height={96}
            className="h-full w-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          <span
            className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-tight text-white bg-gradient-to-br from-[#F7011E]/40 to-zinc-900"
            role="img"
            aria-label={fullName}
          >
            {initials}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-base md:text-lg font-semibold text-white leading-tight truncate">
          {fullName}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const projectHref = `#${featuredTestimonialAuthor.linkedProjectAnchorId}`;

  return (
    <section
      id="testimonial"
      className="relative z-10 border-t border-white/10 scroll-mt-24"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <header className="max-w-2xl mx-auto mb-10 md:mb-12 text-center">
          <span className="inline-block text-[#F7011E] px-4 py-1.5 rounded-full backdrop-blur-sm border border-[#F7011E]/20 bg-[#F7011E]/5 text-xs font-medium uppercase tracking-[0.2em] mb-3">
            Client feedback
          </span>
          <div className="flex justify-center gap-2 flex-wrap">
            <h2
              id="testimonial-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Trusted
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7011E] tracking-tight">
              words
            </h2>
          </div>
        </header>

        <figure className="relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.06] to-zinc-950/90 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.3]"
              style={{
                background:
                  "radial-gradient(640px 280px at 0% 0%, rgba(247,1,30,0.08), transparent 50%)",
              }}
            />
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#F7011E]/70 via-[#F7011E]/20 to-transparent" />

            <blockquote className="relative pl-5 pr-5 py-6 md:pl-7 md:pr-7 md:py-7 lg:pl-8 lg:pr-8">
              <div className="space-y-3.5 text-[0.95rem] md:text-[1.02rem] leading-[1.68] text-zinc-300/95 text-left">
                {testimonialParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <figcaption className="mt-5 pt-4 border-t border-white/[0.07] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <AuthorBlock />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full shrink-0 border-white/20 text-gray-200 hover:text-white hover:bg-white/5 hover:border-[#F7011E]/40 sm:w-auto"
                  asChild
                >
                  <a href={projectHref}>
                    View project
                    <ArrowUp className="ml-2 h-4 w-4 opacity-80" />
                  </a>
                </Button>
              </figcaption>
            </blockquote>
          </div>
        </figure>
      </div>
    </section>
  );
}

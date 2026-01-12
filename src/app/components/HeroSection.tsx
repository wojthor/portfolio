/* eslint-disable @next/next/no-img-element */
"use client";

import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { socialLinks } from "@/data/socials";

const socialIcons: Record<string, JSX.Element> = {
  GitHub: <Github className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
};



export default function HeroSection() {
  return (
    <section className="z-10 relative w-screen h-screen flex items-center justify-center px-4 md:px-10 lg:px-32">
      <div className="relative flex flex-col w-full h-full items-center justify-center lg:flex-row lg:justify-center gap-16">
        <div className="text-center w-full h-full lg:text-left space-y-12 flex flex-col items-center lg:items-start justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm uppercase tracking-widest text-[#F7011E] backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F7011E] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#F7011E]"></span>
            </span>
            Software Developer
          </div>

          <div>
            <h1 className="text-6xl pt-20 font-bold leading-tight md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-white via-[#ffb3b3] to-white bg-clip-text text-transparent">
                Wojciech
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ff4d4d] via-[#F7011E] to-[#a30000] bg-clip-text text-transparent">
                Aniszewski
              </span>
            </h1>

            <p className="mt-8 text-gray-300 text-xl md:text-3xl max-w-2xl">
              Specializing in building modern web applications with React and
              Next.js.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#ff4d4d]  to-[#a30000] text-white px-10 py-7 text-lg font-semibold shadow-lg shadow-[#F7011E]/25 hover:shadow-xl hover:shadow-[#F7011E]/40"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1MMaQoQ-z5TmmWTkZ76SCp-YMwNktMj5W/view?usp=sharing"
                target="_blank"
              >
                <FileText className="mr-3 h-6 w-6" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start gap-5">
            <TooltipProvider>
              {socialLinks.map((social, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-16 w-16 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-[#F7011E] hover:border-[#F7011E]/40 hover:bg-[#F7011E]/10 text-2xl"
                      asChild
                    >
                      <a href={social.href} target="_blank">
                        {socialIcons[social.label]}
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{social.label}</TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>

        <div className="flex justify-center md:w-full md:h-full w-1/2 h-1/2 items-center">
          <img
            src="/photo3.png"
            alt="Wojciech Aniszewski - Software Developer"
            className="w-80 md:w-[28rem] lg:w-[40rem] xl:w-[38rem]"
          />
        </div>
      </div>
    </section>
  );
}

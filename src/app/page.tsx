"use client";
import { FaReact } from "react-icons/fa";
import {
  Github,
  Linkedin,
  FileText,
  Code,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { SiTypescript } from "react-icons/si";
import { Card } from "./components/ui/card";
import ImageSlider from "@/app/components/Slider";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSlider, setShowSlider] = useState<number | false>(false);

  useEffect(() => {
    if (showSlider !== false) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSlider]);

  const skills = [
    {
      category: "Frontend Development",
      description:
        "Creating beautiful, responsive user interfaces with modern frameworks.",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: <Code className="h-10 w-10 text-[#F7011E]" />,
      icons: [<FaReact key="r" />, <SiTypescript key="t" />],
    },
    {
      category: "Backend Development",
      description: "Building scalable server-side solutions and APIs.",
      items: ["Node.js", "Python", "GraphQL", "REST APIs"],
      icon: <Code className="h-10 w-10 text-[#F7011E]" />,
    },
  ];

  const projects = [
    {
      title: "Glob Travel Agency",
      description:
        "A travel agency website powered by GraphQL, featuring dynamic content management and seamless integration with Next.js.",
      tech: ["Next.js", "TypeScript", "GraphQL", "GraphCMS"],
      image: "/glob1.png",
      images: ["/glob1.png", "/glob2.png", "/glob3.png"],
    },
    {
      title: "StudioRE [In Progress]",
      description:
        "A modern interior design studio website featuring captivating animations and interactive elements.",
      tech: ["React", "Node.js", "Next.js", "Tailwind CSS"],
      image: "/studiore.jpg",
      images: ["/studiore.jpg"],
    },
    {
      title: "Rental Rate",
      description:
        "A web app where tenants can rate landlords and share experiences.",
      tech: ["Next.js", "TypeScript"],
      image: "/rental-rate.png",
      images: ["/rental-rate.png", "/rental-rate2.png"],
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/wojthor",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/wojciech-aniszewski/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* ---------------- TŁO ---------------- */}
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

      {/* ---------------- HERO ---------------- */}
      <section className="z-10 relative w-screen h-screen flex items-center justify-center px-4 md:px-10 lg:px-32">
        <div className="relative flex flex-col w-full h-full items-center justify-center lg:flex-row lg:justify-center gap-16">
          {/* Tekst */}
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
                  href="https://drive.google.com/file/d/1e_8olWEbL-BhJpFhrXhmA5Abkfdu18OS/view?usp=sharing"
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
                          {social.icon}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{social.label}</TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          {/* Zdjęcie */}
          <div className="flex justify-center md:w-full md:h-full w-1/2 h-1/2 items-center">
            <img
              src="/photo3.png"
              alt="Avatar"
              className="w-80 md:w-[28rem] lg:w-[40rem] xl:w-[38rem]"
            />
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
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

      {/* ---------------- TECH STACK ---------------- */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#F7011E]/20 bg-[#F7011E]/5 px-4 py-1.5 text-xs uppercase tracking-widest text-[#F7011E] rounded-full backdrop-blur-sm">
            Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Tech
            </span>{" "}
            <span className="bg-gradient-to-r from-[#F7011E] via-[#ff3b3b] to-[#F7011E] bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to craft modern web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <Card
              key={i}
              className="border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#F7011E]/40 transition-all p-6"
            >
              <div className="text-[#F7011E] mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
              <p className="text-gray-300 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 border border-[#F7011E]/20 bg-[#F7011E]/5 rounded-full text-xs text-[#F7011E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#F7011E]/20 bg-[#F7011E]/5 px-4 py-1.5 text-xs uppercase tracking-widest text-[#F7011E] rounded-full backdrop-blur-sm">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="bg-gradient-to-r from-[#F7011E] via-[#ff3b3b] to-[#F7011E] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="group border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#F7011E]/40 transition-all"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Button
                    size="sm"
                    onClick={() => setShowSlider(i)}
                    className="bg-gradient-to-r from-[#F7011E] to-[#ff3b3b] text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold group-hover:text-[#F7011E] transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 border border-[#F7011E]/20 bg-[#F7011E]/5 rounded-full text-xs text-[#F7011E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {showSlider !== false && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl p-6">
              <button
                onClick={() => setShowSlider(false)}
                className=" hover:border-[#F7011E]/40  items-center gap-2 border border-[#F7011E]/20 bg-[#F7011E]/5 px-4 py-1.5 text-xs uppercase tracking-widest text-[#F7011E] rounded-full backdrop-blur-sm"
              >
                X
              </button>

              <ImageSlider images={projects[showSlider].images} />
            </div>
          </div>
        )}
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section className="relative z-0 container mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 border border-[#F7011E]/20 bg-[#F7011E]/5 px-4 py-1.5 text-xs uppercase tracking-widest text-[#F7011E] rounded-full backdrop-blur-sm">
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Ready to Start
          </span>{" "}
          <span className="bg-gradient-to-r from-[#F7011E] via-[#ff3b3b] to-[#F7011E] bg-clip-text text-transparent">
            Your Project?
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Let’s bring your ideas to life with cutting-edge web technologies and
          creative design.
        </p>
        <a href="mailto:wojtek1aniszewski1@gmail.com">
          <Button className="bg-gradient-to-r  from-[#ff4d4d]  to-[#a30000] text-white shadow-md hover:shadow-[#F7011E]/40">
            Contact Me
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </section>
    </div>
  );
}

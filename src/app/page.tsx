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
    if (showSlider !== false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Na wszelki wypadek czyścimy styl po odmontowaniu
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSlider]);

  const skills = [
    {
      category: "Frontend Development",
      description:
        "Creating beautiful, responsive user interfaces with modern frameworks",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: <Code className="h-10 w-10 text-primary" />,
      icons: [<FaReact />, <SiTypescript />],
    },
    {
      category: "Backend Development",
      description: "Building scalable server-side solutions and APIs",
      items: ["Node.js", "Python", "GraphQL", "REST APIs"],
      icon: <Code className="h-10 w-10 text-primary" />,
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
        "A modern interior design studio website featuring captivating animations and interactive elements that showcase creative arrangements and innovative design concepts.",
      tech: ["React", "Node.js", "Next.js", "Tailwind CSS"],
      image: "/studiore.jpg",
      images: ["/studiore.jpg"],
    },
    {
      title: "Rental Rate",
      description:
        "A web application where tenants can rate their landlords and share experiences. Users can search for landlords, read reviews, and check ratings before moving in.",
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
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Shared Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-24 md:pb-15">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400/90 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
                </span>
                Software Developer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                  Wojciech
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Aniszewski
                </span>
              </h1>
              <p className="text-lg text-slate-400 md:text-xl">
                Specializing in building modern web applications with React and
                Next.js
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/40"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1e_8olWEbL-BhJpFhrXhmA5Abkfdu18OS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-3">
              <TooltipProvider>
                {socialLinks.map((social, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.icon}
                          <span className="sr-only">{social.label}</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{social.label}</TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/photo2.png"
              alt="Avatar"
              className="w-64 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
            Info
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm text-slate-300 leading-relaxed">
            <p>
              Hello! My name is{" "}
              <span className="text-cyan-400 font-semibold">
                Wojciech Aniszewski
              </span>
              , and I’m based in Gdańsk, Poland. I’m a third-year student at the{" "}
              <span className="text-cyan-400 font-medium">
                Academy of Physical Education and Sport
              </span>
              , with a strong passion for web development and modern web
              technologies.
            </p>
            <p className="mt-4">
              I work with <span className="text-cyan-400">Next.js</span>,{" "}
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-cyan-400">GraphQL</span>,{" "}
              <span className="text-cyan-400">TypeScript</span>, and{" "}
              <span className="text-cyan-400">Python</span>. I enjoy creating
              visually appealing and performant applications while constantly
              learning and improving.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
            Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Tech
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tools and technologies I use to craft modern web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-cyan-400/40 transition-all"
            >
              <div className="text-cyan-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
              <p className="text-slate-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-400 hover:border-cyan-400/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-cyan-400/30"
            >
              <div className="relative aspect-video overflow-hidden group rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    size="sm"
                    onClick={() => setShowSlider(index)} // 👈 zapamiętujemy index projektu
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Jeden modal globalny */}
        {showSlider !== false && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl p-6">
              <button
                onClick={() => setShowSlider(false)}
                className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition"
                aria-label="Close slider"
              >
                <div className="w-5 h-5">X</div>
              </button>

              <ImageSlider images={projects[showSlider].images} />
            </div>
          </div>
        )}
      </section>

      {/* Contact */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-6">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            Ready to Start
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Your Project?
          </span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Let’s bring your ideas to life with cutting-edge web technologies and
          creative design.
        </p>
        <a href="mailto:wojtek1aniszewski1@gmail.com">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:shadow-cyan-500/40"
          >
            Contact Me
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </section>
    </main>
  );
}

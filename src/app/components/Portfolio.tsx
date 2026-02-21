"use client";

/* eslint-disable @next/next/no-img-element */
import ImageSlider from "@/app/components/Slider";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section id="projects" className="relative z-10 ">
      <div className="container  mx-auto px-4 md:px-6 py-16 md:py-24">
        <header className="max-w-2xl mx-auto mb-16 md:mb-24 text-center">
          <span className="inline-block text-[#F7011E] px-4 py-1.5  rounded-full backdrop-blur-sm border border-[#F7011E]/20 bg-[#F7011E]/5 text-xs font-medium uppercase tracking-[0.2em] mb-4">
            Portfolio
          </span>
          <div className=" justify-center flex gap-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured 
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7011E] tracking-tight">
            Projects 
          </h2>
          </div>
          
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            From frontend to backend – applications and websites I've worked on.
          </p>
        </header>

        <div className="space-y-0">
          {projects.map((project, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <article
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 md:py-16 border-b border-white/10 last:border-b-0 items-center"
              >
                {/* Slider - 16:9, obok opisu */}
                <div
                  className={`relative ${
                    imageLeft ? "lg:col-span-7 lg:order-1" : "lg:col-span-7 lg:order-2 lg:col-start-6"
                  }`}
                >
                  <ImageSlider images={project.images} />
                </div>

                {/* Opis */}
                <div
                  className={`flex flex-col justify-center ${
                    imageLeft ? "lg:col-span-5 lg:order-2 lg:pl-4" : "lg:col-span-5 lg:order-1 lg:pr-4 lg:text-right"
                  }`}
                >
                  <span className="text-[#F7011E]/80 text-sm font-mono tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p
                    className={`mt-4 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl ${
                      imageLeft ? "" : "lg:ml-auto"
                    }`}
                  >
                    {project.description}
                    {"collaboratorName" in project &&
                      project.collaboratorName &&
                      "collaboratorUrl" in project &&
                      project.collaboratorUrl && (
                        <a
                          href={project.collaboratorUrl}
                          className="text-[#F7011E] font-bold hover:underline"
                        >
                          {project.collaboratorName}
                        </a>
                      )}
                  </p>
                  {"visitUrl" in project && project.visitUrl && (
                    <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-5 w-1/3 inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold text-white bg-[#F7011E] hover:bg-[#F7011E]/90 border border-[#F7011E] hover:border-white/40 transition-all duration-200 hover:scale-[1.03] ${
                        imageLeft ? "" : "lg:ml-auto lg:inline-flex"
                      }`}
                    >
                      Visit Base Camp →
                    </a>
                  )}
                  <div
                    className={`flex flex-wrap gap-2 mt-6 ${
                      imageLeft ? "" : "lg:justify-end"
                    }`}
                  >
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-md text-xs font-medium text-[#F7011E] bg-[#F7011E]/10 border border-[#F7011E]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

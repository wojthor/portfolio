/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import ImageSlider from "@/app/components/Slider";
import { projects } from "@/data/projects";

export default function Portfolio() {
  const [showSlider, setShowSlider] = useState<number | false>(false);
  useEffect(() => {
    if (showSlider !== false) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSlider]);

  return (
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
            <ImageSlider
              onClose={() => setShowSlider(false)}
              images={projects[showSlider].images}
            />
          </div>
        </div>
      )}
    </section>
  );
}

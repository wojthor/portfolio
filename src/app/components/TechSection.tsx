import { FaReact } from "react-icons/fa";
import { Code } from "lucide-react";
import { SiTypescript } from "react-icons/si";
import { Card } from "../components/ui/card";
import { skills } from "../../data/skills";

const iconMap: Record<string, JSX.Element> = {
  Code: <Code className="h-10 w-10 text-[#F7011E]" />,
  React: <FaReact className="h-10 w-10 text-[#F7011E]" />,
  TypeScript: <SiTypescript className="h-10 w-10 text-[#F7011E]" />,
};

export default function TechSection() {
  return (
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
            <div className="text-[#F7011E] mb-4">
              {iconMap[skill.icon] ?? iconMap["Code"]}
            </div>
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
  );
}

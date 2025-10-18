import { Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function Contact() {
  return (
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
  );
}

import { HERO_SECTION_HEADINGS } from "@/constants";

export default function HeroSection() {
    return (
      <section className="relative h-[35vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero_image.jpeg"
          alt="Mountain landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
  
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center space-y-4 px-6 max-w-md mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
            {HERO_SECTION_HEADINGS.subtitle}
          </span>
  
          <h2 className="text-4xl leading-tight text-white mb-3">
            {HERO_SECTION_HEADINGS.title} <br />
            <span className="italic text-primary">{HERO_SECTION_HEADINGS.title_highlight}</span>
          </h2>
  
          <p className="text-white/80 mt-1">
            {HERO_SECTION_HEADINGS.description}
          </p>
        </div>
      </section>
    );
  }
  
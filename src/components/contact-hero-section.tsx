import { BlurInHeading } from "@/components/blur-in-heading";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import step1Image from "@/assets/how-it-works/step-1.png";
import GradientBlinds from "./GradientBlinds";

export function ContactHeroSection() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative pt-20 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Gradient Blinds */}
      <div className="absolute top-0 left-0 right-0 h-full z-0 overflow-hidden">
        <div className="absolute inset-0">
          <GradientBlinds
            paused={prefersReducedMotion}
            gradientColors={["#FF9FFC", "#5227FF"]}
            angle={0}
            noise={0.3}
            blindCount={36}
            blindMinWidth={70}
            mouseDampening={0.1}
            mirrorGradient={false}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            distortAmount={0}
            shineDirection="left"
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        {/* Bottom Fade Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="flex flex-col items-start gap-7">
            {/* Heading */}
            <BlurInHeading as="h1" className="max-w-xl text-foreground text-4xl md:text-5xl font-medium leading-tight md:leading-[58px]">
              Let's build something Amazing together
            </BlurInHeading>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={step1Image}
              alt="Contact us"
              className="w-full max-w-xs lg:max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

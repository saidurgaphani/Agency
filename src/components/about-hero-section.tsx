import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlowBadge } from "@/components/glow-badge";
import { BlurInHeading } from "@/components/blur-in-heading";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import heroLightEffect from "@/assets/hero-light-effect.png";

// Import logos
import logo1 from "@/assets/logos/logo-1.svg";
import logo2 from "@/assets/logos/logo-2.svg";
import logo3 from "@/assets/logos/logo-3.svg";
import logo4 from "@/assets/logos/logo-4.svg";
import logo5 from "@/assets/logos/logo-5.svg";

const logos = [logo1, logo2, logo3, logo4, logo5];

export const AboutHeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 right-0 h-full z-0 overflow-hidden">
        {prefersReducedMotion ? (
          /* Static gradient background for reduced motion */
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Bottom Fade Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center gap-7">
          {/* Badge with Light Effect */}
          <div className="relative">
            {/* Light effect behind badge */}
            <img 
              src={heroLightEffect} 
              alt="" 
              className="absolute left-1/2 -translate-x-1/2 -top-32 w-[500px] h-auto opacity-60 mix-blend-lighten pointer-events-none"
            />
            <GlowBadge>Design studio for AI, SaaS & tech startups</GlowBadge>
          </div>

          {/* Heading and Subtext */}
          <div className="flex flex-col items-center gap-4">
            <BlurInHeading as="h1" className="max-w-[564px] lg:max-w-[720px] text-foreground text-4xl md:text-5xl lg:text-hero font-medium leading-tight md:leading-[58px] lg:leading-[1.1]">
              Good design makes life better.
            </BlurInHeading>
            <p className="max-w-[500px] opacity-90 text-foreground text-lg md:text-xl font-normal leading-8">
              We design delightful experiences that make life simpler and more enjoyable.
            </p>
          </div>

          {/* CTA Button */}
          <Link to="/schedule">
            <Button variant="glass" size="lg" className="h-14 px-8 py-4 rounded-2xl text-lg">
              Schedule a 1:1 Meeting
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>

        {/* Trusted By Section */}
        <div className="mt-24 flex flex-col items-center gap-8">
          <p className="text-muted-foreground text-sm tracking-wide">
            Trusted by global powerhouses like
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="h-8 md:h-10 lg:h-12 w-auto brightness-0 invert opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlowBadge } from "@/components/glow-badge";
import { BlurInHeading } from "@/components/blur-in-heading";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import dashboardImage from "@/assets/dashboard.png";
import heroLightEffect from "@/assets/hero-light-effect.png";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-0 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video - covers text section + 10% of dashboard */}
      <div className="absolute top-0 left-0 right-0 h-[70%] z-0 overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Content - z-20 above header light */}
        <div className="relative z-20 flex flex-col items-center text-center gap-7">
          {/* Badge with Light Effect */}
          <div className="relative">
            {/* Light effect behind badge */}
            <img 
              src={heroLightEffect} 
              alt="" 
              className="absolute left-1/2 -translate-x-1/2 -top-32 w-[500px] h-auto opacity-60 mix-blend-lighten pointer-events-none"
            />
            <GlowBadge>Design studio for AI, SaaS & Tech</GlowBadge>
          </div>

          {/* Heading and Subtext */}
          <div className="flex flex-col items-center gap-4">
            <BlurInHeading as="h1" className="max-w-[564px] lg:max-w-[720px] text-foreground text-4xl md:text-5xl lg:text-hero font-medium leading-tight md:leading-[58px] lg:leading-[1.1]">
              Meet your new AI Design Agency
            </BlurInHeading>
            <p className="max-w-[684px] opacity-90 text-foreground text-lg md:text-xl font-normal leading-8">
              We collaborate with forward-thinking teams to create unique brands, launch intelligent products, and grow with intention.
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

        {/* Dashboard Image with Fade Effect - z-5 so header light (z-10) appears on top of fade */}
        <div className="relative z-[5] mt-16">
          <img
            src={dashboardImage}
            alt="Analytics dashboard showcasing revenue, users, and performance metrics"
            className="w-full rounded-t-2xl"
          />
          {/* Bottom Fade Effect */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

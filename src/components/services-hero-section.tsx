import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlowBadge } from "@/components/glow-badge";
import { BlurInHeading } from "@/components/blur-in-heading";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import servicesHeroImage from "@/assets/services-hero.png";

// Import logos
import logo1 from "@/assets/logos/logo-1.svg";
import logo2 from "@/assets/logos/logo-2.svg";
import logo3 from "@/assets/logos/logo-3.svg";
import logo4 from "@/assets/logos/logo-4.svg";
import logo5 from "@/assets/logos/logo-5.svg";

const logos = [logo1, logo2, logo3, logo4, logo5];

export const ServicesHeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 right-0 h-full z-0 overflow-hidden">
        {prefersReducedMotion ? (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-background to-zinc-800" />
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
          </video>
        )}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Bottom Fade Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="flex flex-col items-start gap-7">
            {/* Badge */}
            <GlowBadge>Design studio for AI, SaaS & tech startups</GlowBadge>

            {/* Heading */}
            <BlurInHeading as="h1" className="text-foreground text-4xl md:text-5xl font-medium leading-tight md:leading-[58px]">
              An AI and product ally focused on design.
            </BlurInHeading>

            {/* Subtext */}
            <p className="opacity-90 text-foreground text-lg md:text-xl font-normal leading-8">
              We create joyful experiences that simplify life and enhance enjoyment.
            </p>

            {/* CTA Button */}
            <Link to="/contact">
              <Button variant="glass" size="lg" className="h-14 px-8 py-4 rounded-2xl text-lg">
                Get started with us
                <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={servicesHeroImage}
              alt="Design services illustration with clipboard and checkmarks"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
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

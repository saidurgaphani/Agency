import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowButton } from "@/components/ui/glow-button";
import { GlowBadge } from "@/components/glow-badge";
import { BlurInHeading } from "@/components/blur-in-heading";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import dashboardImage from "@/assets/dashboard.png";
import heroimg from "@/assets/hero-img.png";
import heroLightEffect from "@/assets/hero-light-effect.png";
import GradientBlinds from "./GradientBlinds";
import ScrollReveal from "@/components/ui/scroll-reveal";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 0.5, // Fade out significantly to let text pop
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%", // Start fading just as it enters view
            end: "center center", // Fully faded by the time center is in middle
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-32 pb-0 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video - covers text section + 10% of dashboard */}
      <div className="absolute top-0 left-0 right-0 h-[70%] z-0 overflow-hidden">
        {/* Dark overlay for text readability - Adjust opacity if needed with the new background */}
        {/* We keep the overlay to ensure text contrast, or we can adjust parameters of GradientBlinds */}

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
            <BlurInHeading as="h1" className="max-w-[564px] lg:max-w-[900px] text-foreground text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-[58px] lg:leading-[1.1]">
              Crafting Exceptional<br className="hidden md:block" /> Digital Brand Experiences
              {/* Crafting Exceptional Digital Brand Experiences */}
            </BlurInHeading>
            <p className="max-w-[684px] opacity-90 text-foreground text-lg md:text-xl font-normal leading-8">
              We design timeless digital experiences.
              Engineered with precision. Built to endure.
              {/* We collaborate with forward-thinking teams to create unique brands, launch intelligent products, and grow with intention. */}
            </p>
          </div>

          {/* CTA Button */}
          <Link to="/schedule">
            <GlowButton>
              Schedule a Meeting
            </GlowButton>
          </Link>
        </div>

        {/* Dashboard Image with Fade Effect - z-5 so header light (z-10) appears on top of fade */}
        <div className="relative z-[5] mt-64 md:mt-16">
          <img
            ref={imageRef}
            src={heroimg}
            alt="Analytics dashboard showcasing revenue, users, and performance metrics"
            className="w-full rounded-t-2xl"
            onLoad={() => ScrollTrigger.refresh()}
          />


          {/* Scroll Reveal Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="max-w-4xl mx-auto text-center px-6">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={3}
                blurStrength={4}
                containerClassName="flex flex-col items-center justify-center"
                textClassName="text-center font-medium leading-tight text-white"
                rotationEnd="bottom center"
                wordAnimationEnd="bottom center"
              >
                Driven by <span className="font-script text-[1.2em]">Strategy</span>, fueled by imagination. We craft design-First solutions that help <span className="font-script text-[1.2em]">Brands</span> stand out and thrive in the digital age
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

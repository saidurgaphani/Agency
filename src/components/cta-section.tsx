import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlurInHeading } from "@/components/blur-in-heading";
import ctaIcon from "@/assets/cta-icon.png";
import ctaBg from "@/assets/cta-bg.png";

export const CTASection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image - z-[5] so header light (z-10) appears on top */}
      <img 
        src={ctaBg} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-lighten pointer-events-none z-[5]"
      />
      {/* Content - z-20 above header light */}
      <div className="max-w-xl mx-auto flex flex-col items-center gap-10 relative z-20">
        {/* Icon */}
        <div className="w-20 h-20">
          <img
            src={ctaIcon}
            alt="Contact us"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-7">
          <BlurInHeading as="h2" className="text-center text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight lg:leading-[58px]">
            Need To Discuss Before Starting?
          </BlurInHeading>

          {/* CTA Button */}
          <Link to="/schedule">
            <Button variant="glass" size="lg" className="h-14 px-8 py-4 rounded-2xl text-lg">
              Schedule a Meeting
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";

// Import logos
import logo1 from "@/assets/logos/logo-1.svg";
import logo2 from "@/assets/logos/logo-2.svg";
import logo3 from "@/assets/logos/logo-3.svg";
import logo4 from "@/assets/logos/logo-4.svg";
import logo5 from "@/assets/logos/logo-5.svg";
import logo6 from "@/assets/logos/logo-6.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

interface LogoCardProps {
  logo: string;
  index: number;
}

const LogoCard = ({ logo, index }: LogoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group px-10 py-12 rounded-xl border border-border inline-flex flex-col justify-center items-center cursor-pointer"
      style={{ background: 'var(--gradient-logo-card)' }}
    >
      <img
        src={logo}
        alt="Partner logo"
        className="w-44 h-20 object-contain brightness-0 invert opacity-80 transition-opacity duration-300 group-hover:opacity-50"
      />
    </motion.div>
  );
};

const TrustedBySection = () => {
  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-12 lg:gap-8">
          {/* Left - Header */}
          <motion.div
            className="flex flex-col items-start gap-6 lg:max-w-xs flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SubtleBadge icon={<Command className="w-4 h-4" />}>Trusted By</SubtleBadge>
            <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight lg:leading-[1.4]">
              We work with high-impact Companies
            </BlurInHeading>
          </motion.div>

          {/* Right - Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 flex-1 w-full">
            {logos.map((logo, index) => (
              <LogoCard key={index} logo={logo} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

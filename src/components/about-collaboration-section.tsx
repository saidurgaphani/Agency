import { motion } from "framer-motion";
import { Palette, Target, Clock } from "lucide-react";
import { BlurInHeading } from "@/components/blur-in-heading";

const features = [
  {
    icon: Palette,
    title: "End-to-end creative services",
    description: "We help to improve the sales funnels, improve the copy, use more high-converting layout",
  },
  {
    icon: Target,
    title: "Stay Ahead of the Market",
    description: "Every page on the web is 1:1 similar to each other. But it's your chance to get something unique.",
  },
  {
    icon: Clock,
    title: "48-Hour Updates",
    description: "We move at lightning speed. We provide drafts, usually within 48 hours.",
  },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-6"
    >
      {/* Icon */}
      <div className="w-12 h-12 p-3 bg-foreground/10 rounded-[10px] border border-foreground/20 backdrop-blur-[5px] inline-flex justify-center items-center">
        <Icon className="w-6 h-6" style={{ stroke: 'url(#collab-icon-gradient)' }} />
      </div>
      
      {/* Text */}
      <div className="flex flex-col gap-3">
        <h3 className="text-foreground text-xl font-semibold leading-6">
          {title}
        </h3>
        <p className="text-muted-foreground text-base font-normal leading-6">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const AboutCollaborationSection = () => {
  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      {/* SVG gradient definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="collab-icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-16 lg:mb-24">
          Collaboration that creates value for everyone
        </BlurInHeading>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

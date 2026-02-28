import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Target, Award } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";
import productDesignImage from "@/assets/product-design.png";

const features = [
  {
    icon: TrendingUp,
    title: "Increase Conversions",
    description: "We help to improve the sales funnels, improve the copy, use more high-converting layout.",
  },
  {
    icon: Target,
    title: "Stay Ahead of the Market",
    description: "Every page on the web is 1:1 similar to each other. But it's your chance to get something unique.",
  },
  {
    icon: Award,
    title: "Top-notch Quality",
    description: "Get a website that looks amazing and works perfectly. We focus on delivering the best.",
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
        <Icon className="w-6 h-6" style={{ stroke: 'url(#product-icon-gradient)' }} />
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

export const ServicesProductDesignSection = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      {/* SVG gradient definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="product-icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full max-w-7xl mx-auto">
        {/* Header - above lights (z-20) */}
        <motion.div
          className="relative z-20 flex flex-col items-center text-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SubtleBadge icon={<Sparkles className="w-4 h-4" />}>Design studio for AI</SubtleBadge>
          <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl">
            We streamline the product design.
          </BlurInHeading>
          <p className="text-muted-foreground text-base max-w-xl">
            Every UI we create closely aligns with your product's goals. We never develop without testing — validation is essential.
          </p>
        </motion.div>

        {/* Product Design Image with Fade Effect - below lights (z-5) */}
        <motion.div
          className="relative z-[5] mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* <img
            src={productDesignImage}
            alt="Product design interface showcasing design tools and workflow"
            className="w-full h-auto rounded-2xl grayscale"
          /> */}
          {/* Bottom Fade Effect */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        </motion.div>

        {/* Features Grid - above lights (z-20) */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
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

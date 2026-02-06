import { motion } from "framer-motion";
import { TrendingUp, Palette, DollarSign, Target, Award, Clock, Zap } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";

// Import card backgrounds
import card1Bg from "@/assets/benefits/card-1.png";
import card2Bg from "@/assets/benefits/card-2.png";
import card3Bg from "@/assets/benefits/card-3.png";
import card4Bg from "@/assets/benefits/card-4.png";
import card5Bg from "@/assets/benefits/card-5.png";
import card6Bg from "@/assets/benefits/card-6.png";
import starsBg from "@/assets/benefits/stars.png";

const benefits = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Increase Conversions",
    description: "We help to improve the sales funnels, improve the copy, use more high-converting layout which leads to a significant CRO increase",
    background: card1Bg,
  },
  {
    id: 2,
    icon: Palette,
    title: "End-to-end creative services",
    description: "We help to improve the sales funnels, improve the copy, use more high-converting layout",
    background: card2Bg,
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Fixed Price, No Hidden Cost",
    description: "Know exactly what you're paying for. We offer clear pricing with no surprise fees",
    background: card3Bg,
  },
  {
    id: 4,
    icon: Target,
    title: "Stay Ahead of the Market",
    description: "Every page on the web is 1:1 similar to each other. But it's your chance to get something more unique and unusual",
    background: card4Bg,
  },
  {
    id: 5,
    icon: Award,
    title: "Top-notch Quality",
    description: "Get a website that looks amazing and works perfectly. We focus on delivering the best, every single time.",
    background: card5Bg,
  },
  {
    id: 6,
    icon: Clock,
    title: "48-Hour Updates",
    description: "We move at lightning speed. We provide drafts, usually within 48 hours.",
    background: card6Bg,
  },
];

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  background: string;
  index: number;
}

const BenefitCard = ({ icon: Icon, title, description, background, index }: BenefitCardProps) => {
  // Odd cards (0, 2, 4) are taller, even cards (1, 3, 5) are shorter
  const isTall = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl border border-border overflow-hidden backdrop-blur-sm h-auto ${isTall ? 'lg:h-80' : 'lg:h-64'}`}
      style={{ background: 'var(--gradient-benefit-card)' }}
    >
      {/* Stars overlay - top left */}
      <img
        src={starsBg}
        alt=""
        className="absolute top-0 left-0 opacity-40"
      />
      {/* Background Image */}
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-lighten"
      />
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 p-3 bg-foreground/10 rounded-[10px] border border-foreground/20 backdrop-blur-[5px] inline-flex justify-center items-center mb-6 lg:mb-auto">
          <Icon className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                <stop offset="100%" stopColor="white" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Text */}
        <div className="flex flex-col gap-3 mt-auto">
          <h3 className="text-foreground text-xl font-semibold leading-6">
            {title}
          </h3>
          <p className="text-muted-foreground text-base font-normal leading-6">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SubtleBadge icon={<Zap className="w-4 h-4" />}>Speed, Simplicity</SubtleBadge>
          <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Benefits of working with us
          </BlurInHeading>
          <p className="text-muted-foreground text-base max-w-xl">
            Swift replies, careful edits, and adaptable support after launch designed for contemporary teams.
          </p>
        </motion.div>

        {/* Benefits Grid - Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <BenefitCard
              icon={benefits[0].icon}
              title={benefits[0].title}
              description={benefits[0].description}
              background={benefits[0].background}
              index={0}
            />
            <BenefitCard
              icon={benefits[3].icon}
              title={benefits[3].title}
              description={benefits[3].description}
              background={benefits[3].background}
              index={3}
            />
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <BenefitCard
              icon={benefits[1].icon}
              title={benefits[1].title}
              description={benefits[1].description}
              background={benefits[1].background}
              index={1}
            />
            <BenefitCard
              icon={benefits[4].icon}
              title={benefits[4].title}
              description={benefits[4].description}
              background={benefits[4].background}
              index={4}
            />
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:col-span-1 lg:flex lg:flex-col">
            <BenefitCard
              icon={benefits[2].icon}
              title={benefits[2].title}
              description={benefits[2].description}
              background={benefits[2].background}
              index={2}
            />
            <BenefitCard
              icon={benefits[5].icon}
              title={benefits[5].title}
              description={benefits[5].description}
              background={benefits[5].background}
              index={5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

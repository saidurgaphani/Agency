import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LayoutGrid } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";

const milestones = [
  {
    year: "2019",
    title: "Strat launch",
    description: "In December 2020, Alex Carter, Jamie Lin, and Mia Chen joined forces to establish Strat with a clear mission: to make cutting-edge design accessible and affordable for all tech innovators. The studio specializes in AI, SaaS, and tech solutions, addressing complex challenges with creative design.",
    isFirst: true,
  },
  {
    year: "2015",
    title: "Strat's debut",
    description: "Building on the success of Strat's debut, the studio expanded in 2021, focusing on enhancing user experiences in tech, offering services like UX/UI design, branding, and product development.",
    isFirst: false,
  },
  {
    year: "3",
    title: "Global expansion",
    description: "Strat broadened its reach to international markets, launching services in Europe and Asia. The studio also opened a new design hub in Berlin, making its innovative solutions available to a wider audience.",
    isFirst: false,
  },
  {
    year: "4",
    title: "Strat goes public",
    description: "Strat went public through a SPAC on NASDAQ: STRT. The studio acquired the design firm PixelCraft and the tech platform InnovateX, significantly enhancing its global presence.",
    isFirst: false,
  },
];

interface MilestoneCardProps {
  milestone: typeof milestones[0];
  index: number;
  isLast: boolean;
}

const MilestoneCard = ({ milestone, index, isLast }: MilestoneCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const isFirstStep = index === 0;
  const numberBgProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-start gap-6 lg:gap-8"
    >
      {/* Left - Year Badge & Line */}
      <div className="flex flex-col items-center">
        {/* Year Badge */}
        <motion.div 
          className="w-12 h-12 p-2 rounded-lg inline-flex flex-col justify-center items-center relative overflow-hidden"
          style={{ 
            background: isFirstStep 
              ? "linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)" 
              : "rgba(255,255,255,0.3)"
          }}
        >
          {/* Fill overlay for non-first steps */}
          {!isFirstStep && (
            <motion.div 
              className="absolute inset-0 rounded-lg"
              style={{ 
                background: "linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)",
                opacity: numberBgProgress
              }}
            />
          )}
          <motion.span 
            className="text-base font-normal leading-7 relative z-10"
            style={{ 
              color: isFirstStep ? "#000000" : useTransform(numberBgProgress, [0, 1], ["#FFFFFF", "#000000"])
            }}
          >
            {milestone.year}
          </motion.span>
        </motion.div>
        
        {/* Vertical Line with scroll fill */}
        {!isLast && (
          <div className="relative w-[1px] h-48 lg:h-64 mt-4">
            {/* Background line */}
            <div className="absolute inset-0 bg-foreground/30" />
            {/* Fill line */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-emerald-100"
              style={{ height: lineHeight }}
            />
            {/* Fade effect at bottom of fill */}
            <motion.div 
              className="absolute left-0 w-full h-8 bg-gradient-to-b from-emerald-100 to-transparent"
              style={{ top: lineHeight }}
            />
          </div>
        )}
      </div>

      {/* Right - Title & Description */}
      <div className="flex flex-col gap-3 max-w-lg pt-2">
        <h3 className="text-foreground text-2xl lg:text-3xl font-normal leading-8">
          {milestone.title}
        </h3>
        <p className="text-muted-foreground text-base font-normal leading-6">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
};

export const AboutTimelineSection = () => {
  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header */}
          <motion.div
            className="inline-flex flex-col items-start gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SubtleBadge icon={<LayoutGrid className="w-4 h-4" />}>Timeline</SubtleBadge>
            <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Company milestones
            </BlurInHeading>
            <p className="text-muted-foreground text-base font-normal leading-6">
              Since our founding in 2017
            </p>
          </motion.div>

          {/* Right - Timeline */}
          <div className="flex flex-col">
            {milestones.map((milestone, index) => (
              <MilestoneCard 
                key={milestone.title} 
                milestone={milestone} 
                index={index}
                isLast={index === milestones.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

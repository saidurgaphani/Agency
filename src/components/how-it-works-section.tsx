import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Command } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";

// Import images
import step1Img from "@/assets/how-it-works/step-1.png";
import step2Img from "@/assets/how-it-works/step-2.png";
import step3Img from "@/assets/how-it-works/step-3.png";
import cardLight from "@/assets/how-it-works/card-light.png";

const steps = [
  {
    number: 1,
    title: "Schedule a Free Call",
    description: "Start by sharing your design goals with us. We'll gather all the necessary details to tailor our services to your needs. Simply fill out our contact form or give us a call.",
    image: step1Img,
  },
  {
    number: 2,
    title: "AI Design & Development",
    description: "Our team designs, builds systems tailored to your business processes. We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
    image: step2Img,
  },
  {
    number: 3,
    title: "Continuous Optimization",
    description: "We refine performance, analyze insights, and enhance automation for long-term growth.",
    image: step3Img,
  },
];

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  isLast: boolean;
}

const StepCard = ({ step, index, isLast }: StepCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Number badge fills when line reaches it (previous step completes)
  const isFirstStep = index === 0;
  const numberBgProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16"
    >
      {/* Left - Number & Line */}
      <div className="flex items-start gap-6 lg:gap-8">
        <div className="flex flex-col items-center">
          {/* Number Badge */}
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
              className="text-xl font-normal leading-9 relative z-10"
              style={{ 
                color: isFirstStep ? "#000000" : useTransform(numberBgProgress, [0, 1], ["#FFFFFF", "#000000"])
              }}
            >
              {step.number}
            </motion.span>
          </motion.div>
          
          {/* Vertical Line with scroll fill */}
          {!isLast && (
            <div className="relative w-[1px] h-80 lg:h-96 mt-4">
              {/* Background line */}
              <div className="absolute inset-0 bg-foreground/30" />
              {/* Fill line */}
              <motion.div 
                className="absolute top-0 left-0 w-full bg-foreground"
                style={{ height: lineHeight }}
              />
              {/* Fade effect at bottom of fill */}
              <motion.div 
                className="absolute left-0 w-full h-8 bg-gradient-to-b from-foreground to-transparent"
                style={{ top: lineHeight }}
              />
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-3 max-w-md pt-2">
          <h3 className="text-foreground text-2xl lg:text-3xl font-normal leading-8">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-base font-normal leading-6">
            {step.description}
          </p>
        </div>
      </div>

      {/* Right - Image Card */}
      <div className="relative w-full lg:w-96 h-80 lg:h-96 rounded-2xl border border-border backdrop-blur-sm overflow-hidden flex-shrink-0 ml-auto bg-[#3C3C3C1A]">
        {/* Light effect background - positioned at top */}
        <img 
          src={cardLight} 
          alt="" 
          className="absolute -top-5 left-0 right-0 w-full h-auto object-cover opacity-60 mix-blend-lighten"
        />
        {/* Step image */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <img 
            src={step.image} 
            alt={step.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-7 mb-24 lg:mb-36"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SubtleBadge icon={<Command className="w-4 h-4" />}>How it Works</SubtleBadge>
          <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
            We streamline product design and development workflow
          </BlurInHeading>
          <p className="text-muted-foreground text-base max-w-xl">
            Each UI we design closely aligns with your product's intent and business objectives. We never create without testing — validation is essential.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-16 lg:gap-0">
          {steps.map((step, index) => (
            <StepCard 
              key={step.number} 
              step={step} 
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

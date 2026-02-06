import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";

// Import team images for avatars
import team1 from "@/assets/team/team-1.png";
import team2 from "@/assets/team/team-2.png";
import team3 from "@/assets/team/team-3.png";
import team4 from "@/assets/team/team-4.png";
import team5 from "@/assets/team/team-5.png";
import team6 from "@/assets/team/team-6.png";

// Import logos
import logo1 from "@/assets/logos/logo-1.svg";
import logo2 from "@/assets/logos/logo-2.svg";
import logo3 from "@/assets/logos/logo-3.svg";
import logo4 from "@/assets/logos/logo-4.svg";
import logo5 from "@/assets/logos/logo-5.svg";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  companyLogo: string;
  companyName: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The branding process was seamless and the results are beyond our expectations. Our new brand has significantly increased traffic.",
    name: "Darrell Steward",
    role: "Dog Trainer",
    avatar: team1,
    companyLogo: logo1,
    companyName: "Acme Corp",
  },
  {
    id: 2,
    quote: "We were struggling to connect with our audience. Now, our brand speaks directly to them, and our engagement has skyrocketed.",
    name: "Darrell Steward",
    role: "Dog Trainer",
    avatar: team2,
    companyLogo: logo1,
    companyName: "Acme Corp",
  },
  {
    id: 3,
    quote: "Our rebranding has completely revitalized our business. We're now recognized as a leader in our industry.",
    name: "Courtney Henry",
    role: "President of Sales",
    avatar: team3,
    companyLogo: logo2,
    companyName: "Command+R",
  },
  {
    id: 4,
    quote: "From concept to execution, the branding journey was outstanding. Our new brand identity has set us apart from competitors.",
    name: "Mike Thomas",
    role: "CEO, FocalPoint",
    avatar: team4,
    companyLogo: logo3,
    companyName: "FocalPoint",
  },
  {
    id: 5,
    quote: "Working with this team was a game-changer. Our brand now truly reflects who we are.",
    name: "Arlene McCoy",
    role: "Marketing Coordinator",
    avatar: team5,
    companyLogo: logo2,
    companyName: "Command+R",
  },
  {
    id: 6,
    quote: "The attention to detail and strategic thinking transformed our entire brand presence in the market.",
    name: "Sarah Chen",
    role: "Head of Design",
    avatar: team6,
    companyLogo: logo4,
    companyName: "TechFlow",
  },
];

// Split testimonials into 3 columns
const column1 = [testimonials[0], testimonials[3], testimonials[0], testimonials[3]];
const column2 = [testimonials[1], testimonials[4], testimonials[1], testimonials[4]];
const column3 = [testimonials[2], testimonials[5], testimonials[2], testimonials[5]];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="p-5 bg-surface/50 rounded-xl border border-border backdrop-blur-sm flex flex-col gap-4 mb-4">
      {/* Quote */}
      <p className="text-foreground/90 text-sm leading-relaxed">
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-foreground text-sm font-medium">
            {testimonial.name}
          </span>
          <span className="text-muted-foreground text-xs">
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Company Logo */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/50">
        <img
          src={testimonial.companyLogo}
          alt={testimonial.companyName}
          className="h-4 w-auto brightness-0 invert opacity-60"
        />
        <span className="text-muted-foreground text-xs">{testimonial.companyName}</span>
      </div>
    </div>
  );
};

interface MarqueeColumnProps {
  testimonials: Testimonial[];
  direction: "up" | "down";
  duration: number;
}

const MarqueeColumn = ({ testimonials, direction, duration }: MarqueeColumnProps) => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Fade overlays - z-[5] so header light (z-10) appears above */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-[5] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none" />

      <motion.div
        className="flex flex-col"
        animate={{
          y: direction === "up" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export const ServicesTestimonialMarqueeSection = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header - above lights (z-20) */}
        <motion.div
          className="relative z-20 flex flex-col items-center text-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SubtleBadge icon={<MessageSquare className="w-4 h-4" />}>
            Testimonials
          </SubtleBadge>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-lg">
            Relied on by innovative teams
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Enabling rapidly expanding firms with design-focused, AI-enhanced solutions crafted for growth.
          </p>
        </motion.div>

        {/* Marquee Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="hidden lg:block">
            <MarqueeColumn testimonials={column1} direction="up" duration={25} />
          </div>
          <div>
            <MarqueeColumn testimonials={column2} direction="down" duration={30} />
          </div>
          <div className="hidden md:block">
            <MarqueeColumn testimonials={column3} direction="up" duration={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

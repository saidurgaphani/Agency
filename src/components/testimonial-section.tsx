import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";
import team1 from "@/assets/team/team-1.png";
import team2 from "@/assets/team/team-2.png";
import team3 from "@/assets/team/team-3.png";

const testimonials = [
  {
    id: 1,
    quote: "Strat revolutionized our data analysis with their AI tools. We're now making quicker, smarter decisions than ever!",
    detail: "Their facial recognition tech enhanced our security systems beyond our expectations. The accuracy and dependability are unmatched.",
    name: "Jordan Taylor",
    role: "Project Coordinator",
    avatar: team1,
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with Strat Studio was a game-changer for our startup. They delivered beyond expectations in record time!",
    detail: "The attention to detail and commitment to quality was evident in every interaction. Highly recommend their services.",
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: team2,
    rating: 5,
  },
  {
    id: 3,
    quote: "The team's expertise in AI-driven solutions helped us scale our operations by 300% in just six months.",
    detail: "From concept to execution, their process was seamless. They truly understand modern business needs.",
    name: "Marcus Williams",
    role: "CTO, DataVerse",
    avatar: team3,
    rating: 5,
  },
];

const stats = [
  { value: "99.8%", label: "Product Launch at Scale" },
  { value: "7,200+", label: "Deployments across industries" },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per testimonial

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 w-full pt-12 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-32 right-40 w-32 h-32 bg-muted-foreground/40 rounded-full blur-[150px]" />
      
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SubtleBadge icon={<MessageSquare className="w-4 h-4" />}>
            Testimonials
          </SubtleBadge>
          <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-lg">
            What our clients say
          </BlurInHeading>
          <p className="text-muted-foreground text-base max-w-xl">
            Empowering rapidly expanding firms with design-focused, AI-enhanced solutions crafted for growth.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Testimonial Card */}
          <motion.div 
            className="flex-1 min-h-[400px] relative bg-gradient-testimonial rounded-2xl border border-border backdrop-blur-2xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 md:p-8 lg:p-10 h-full flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-5 flex-1"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="flex flex-col gap-3">
                    <p className="text-foreground text-lg md:text-xl lg:text-2xl font-medium leading-7 md:leading-8">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base leading-6 md:leading-7">
                      "{testimonials[currentIndex].detail}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-[3px] border-foreground object-cover shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="text-foreground text-sm md:text-base font-semibold">
                        {testimonials[currentIndex].name}
                      </span>
                      <span className="text-muted-foreground text-xs md:text-sm">
                        {testimonials[currentIndex].role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination dots */}
              <div className="flex items-center gap-1 mt-4 lg:mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="relative w-8 h-8 md:w-auto md:h-auto md:p-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <span
                      className={`rounded-full transition-all ${
                        index === currentIndex
                          ? "w-4 h-[5px] bg-foreground"
                          : "w-[5px] h-[5px] bg-muted-foreground/50 hover:bg-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 lg:w-80 xl:w-96">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex-1 min-h-[160px] lg:min-h-[180px] bg-gradient-testimonial rounded-2xl border border-border backdrop-blur-2xl overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="p-6 md:p-8 h-full flex flex-col justify-center">
                  <span className="text-foreground text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-foreground/80 text-sm md:text-base lg:text-lg font-medium mt-2">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

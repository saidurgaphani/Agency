import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";
import { Testimonial } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Amazon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    testimonial: "This experience has completely transformed how we build our UI components. The attention to detail and smooth animations make our application stand out. Highly recommended!"
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "Google",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    testimonial: "The components are well documented and easy to customize. The code quality is top-notch and the support is excellent. I'm very happy with my purchase."
  },
  {
    name: "Emily Chen",
    role: "UX Designer",
    company: "Microsoft",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    testimonial: "The accessibility features and design system consistency are impressive. It's saved us countless hours in development time."
  }
];

const TestimonialSection = () => {
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
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Testimonial className="h-full" {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

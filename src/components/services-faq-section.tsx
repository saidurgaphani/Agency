import { motion } from "framer-motion";
import { BlurInHeading } from "@/components/blur-in-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of clients do you work with?",
    answer: "We specialize in working with AI startups, SaaS companies, and tech-forward businesses. Our clients range from early-stage startups looking to establish their brand identity to established companies seeking to modernize their digital presence. We're particularly experienced with products in the AI, fintech, and developer tools space.",
  },
  {
    question: "Can we start with a single page or smaller scope?",
    answer: "Absolutely! We offer flexible engagement options to suit your needs. Whether you need a single landing page, a complete website redesign, or ongoing design support, we can tailor our services accordingly. Starting small is a great way to test our collaboration before committing to larger projects.",
  },
  {
    question: "How fast can you deliver?",
    answer: "Our typical turnaround for a landing page is 1-2 weeks, while full website projects usually take 4-6 weeks depending on complexity. For urgent requests, we offer expedited timelines. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
  },
  {
    question: "Do you handle development too?",
    answer: "Yes, we offer end-to-end design and development services. Our team can take your project from concept to fully functional product. We work with modern technologies like React, Next.js, and Tailwind CSS to ensure your site is fast, responsive, and easy to maintain.",
  },
  {
    question: "Are your designs dev-ready?",
    answer: "100%. All our designs are created with development in mind. We deliver organized Figma files with proper component structures, design tokens, and responsive specifications. Our handoff process includes detailed documentation to ensure seamless implementation by any development team.",
  },
];

export const ServicesFaqSection = () => {
  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-12">
          We've got answers
        </BlurInHeading>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full border border-border rounded-2xl overflow-hidden">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border last:border-b-0 px-6"
              >
                <AccordionTrigger className="py-5 text-foreground text-base md:text-lg font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

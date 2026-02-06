import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ChevronRight } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";

// Import project images
import designRocket from "@/assets/projects/design-rocket.png";
import saasTemplate from "@/assets/projects/saas-template.png";
import motionPortfolio from "@/assets/projects/motion-portfolio.png";
import rocketDashboard from "@/assets/projects/rocket-dashboard.png";
import radiant from "@/assets/projects/radiant.png";
import agencyTemplate from "@/assets/projects/agency-template.png";
import ecommerce from "@/assets/projects/ecommerce.png";

type Category = "all" | "ai" | "startups" | "technology" | "saas";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category[];
  tag: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Design Rocket",
    description: "Full course landing page for AI-powered web design education platform with modern dark aesthetics.",
    category: ["ai", "saas"],
    tag: "AI SaaS",
    image: designRocket,
  },
  {
    id: 2,
    title: "SaaS Template",
    description: "Clean workflow automation platform with seamless integrations for enterprise teams.",
    category: ["startups", "saas"],
    tag: "SaaS",
    image: saasTemplate,
  },
  {
    id: 3,
    title: "Motion Portfolio",
    description: "Stunning portfolio template with cosmic-inspired visuals for designers and developers.",
    category: ["technology"],
    tag: "Portfolio",
    image: motionPortfolio,
  },
  {
    id: 4,
    title: "Rocket Dashboard",
    description: "Comprehensive learning platform dashboard with progress tracking and template gallery.",
    category: ["ai", "startups"],
    tag: "Dashboard",
    image: rocketDashboard,
  },
  {
    id: 5,
    title: "Radiant",
    description: "Next-level innovation platform with minimalist design and powerful automation features.",
    category: ["technology", "saas"],
    tag: "Technology",
    image: radiant,
  },
  {
    id: 6,
    title: "Agency Template",
    description: "Premium agency landing page with elegant dark theme and conversion-focused layout.",
    category: ["startups"],
    tag: "Agency",
    image: agencyTemplate,
  },
  {
    id: 7,
    title: "Ecommerce",
    description: "Modern health and wellness e-commerce platform with clean product showcases.",
    category: ["technology"],
    tag: "E-commerce",
    image: ecommerce,
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "ai", label: "AI" },
  { id: "startups", label: "STARTUPS" },
  { id: "technology", label: "TECHNOLOGY" },
  { id: "saas", label: "SAAS" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

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
          <SubtleBadge icon={<Layers className="w-4 h-4" />}>Portfolio</SubtleBadge>
          <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Works that build trust
          </BlurInHeading>
          <p className="text-muted-foreground text-base max-w-2xl">
            We collaborate with startups, SaaS firms, and digital brands to craft design-focused
            solutions that not only look fantastic but also perform exceptionally well.
          </p>
        </motion.div>

        {/* Full-width border */}
        <div className="w-full border-t border-border mb-8 lg:mb-10" />

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Category Sidebar */}
          <motion.div
            className="lg:w-72 shrink-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-row lg:flex-col gap-3 lg:gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center justify-between px-4 py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wide transition-all whitespace-nowrap rounded-2xl ${
                    activeCategory === category.id
                      ? "bg-background text-foreground shadow-[0px_0px_0px_1px_hsl(var(--btn-glass-border))] shadow-[0px_4px_6px_0px_hsl(var(--btn-glass-shadow))] [box-shadow:inset_0px_9px_14px_-5px_hsl(var(--btn-glass-inset)),0px_0px_0px_1px_hsl(var(--btn-glass-border)),0px_4px_6px_0px_hsl(var(--btn-glass-shadow))]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{category.label}</span>
                  {activeCategory === category.id && (
                    <ChevronRight className="w-5 h-5 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="flex-1">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col gap-4"
                  >
                    {/* Tag */}
                    <SubtleBadge className="w-fit">{project.tag}</SubtleBadge>

                    {/* Title & Description */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-6 max-w-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Image - Black and White */}
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-surface">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top grayscale"
                      />
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

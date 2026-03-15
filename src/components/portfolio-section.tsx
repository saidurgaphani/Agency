import { motion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";

// Import project images
import designRocket from "@/assets/projects/design-rocket.png";
import csi from "@/assets/projects/csi.png"
import insightra from "@/assets/projects/insightra.png"
import trackora from "@/assets/projects/trackora.png"
// import saasTemplate from "@/assets/projects/saas-template.png";
// import motionPortfolio from "@/assets/projects/motion-portfolio.png";
// import rocketDashboard from "@/assets/projects/rocket-dashboard.png";
// import radiant from "@/assets/projects/radiant.png";
// import agencyTemplate from "@/assets/projects/agency-template.png";
// import ecommerce from "@/assets/projects/ecommerce.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Club Website",
    description: "A modern, dynamic website for the Computer Science Club, designed to engage members and showcase club activities.",
    image: csi,
  },
  {
    id: 2,
    title: "Insightra",
    description: "A Generative AI Business Intelligence System designed to bridge the gap between raw data and executive decision-making.",
    image: insightra,
  },
  {
    id: 3,
    title: "Trackora",
    description: "A comprehensive platform for Aptitude, Coding, Interview Preparation, and Skill Courses, designed to empower learners with the tools they need to succeed in their careers.",
    image: trackora,
  },
  // {
  //   id: 4,
  //   title: "Rocket Dashboard",
  //   description: "Comprehensive learning platform dashboard with progress tracking and template gallery.",
  //   image: rocketDashboard,
  // },
  // {
  //   id: 5,
  //   title: "Radiant",
  //   description: "Next-level innovation platform with minimalist design and powerful automation features.",
  //   image: radiant,
  // },
  // {
  //   id: 6,
  //   title: "Agency Template",
  //   description: "Premium agency landing page with elegant dark theme and conversion-focused layout.",
  //   image: agencyTemplate,
  // },
  // {
  //   id: 7,
  //   title: "Ecommerce",
  //   description: "Modern health and wellness e-commerce platform with clean product showcases.",
  //   image: ecommerce,
  // },
];

const PortfolioSection = () => {
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
        <div className="w-full border-t border-border mb-8 lg:mb-16" />

        {/* Projects Grid */}
        <div className="w-full">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col gap-4"
                >
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
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

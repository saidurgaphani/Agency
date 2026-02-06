import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users, BarChart3, Monitor, Palette } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";
import cardBg from "@/assets/benefits/card-5.png";

// Import project images for showcases
import agencyTemplate from "@/assets/projects/agency-template.png";
import designRocket from "@/assets/projects/design-rocket.png";
import ecommerce from "@/assets/projects/ecommerce.png";
import rocketDashboard from "@/assets/projects/rocket-dashboard.png";

// Import logos
import logo1 from "@/assets/logos/logo-1.svg";
import logo2 from "@/assets/logos/logo-2.svg";
import logo3 from "@/assets/logos/logo-3.svg";
import logo4 from "@/assets/logos/logo-4.svg";
import logo5 from "@/assets/logos/logo-5.svg";

interface TabContent {
  id: string;
  label: string;
  icon: React.ElementType;
  title: string;
  description: string;
  images: string[];
}

const tabs: TabContent[] = [
  {
    id: "ui-ux",
    label: "UI/UX Design",
    icon: Users,
    title: "UI/UX Design,\nWeb Design.",
    description: "User-friendly designs transform basic tools into unforgettable experiences.",
    images: [agencyTemplate, designRocket],
  },
  {
    id: "app-dev",
    label: "App Development",
    icon: BarChart3,
    title: "Mobile Apps,\nCross-Platform.",
    description: "Building seamless mobile experiences that users love and businesses rely on.",
    images: [rocketDashboard],
  },
  {
    id: "web-dev",
    label: "Web Development",
    icon: Monitor,
    title: "Web Development,\nFull-Stack.",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
    images: [ecommerce],
  },
  {
    id: "branding",
    label: "Branding & Identity",
    icon: Palette,
    title: "Branding,\nVisual Identity.",
    description: "Crafting memorable brand identities that resonate with your target audience.",
    images: [],
  },
];

const logos = [logo1, logo2, logo3, logo4, logo5];

// UI/UX Design - Card layout
const UiUxShowcase = ({ images }: { images: string[] }) => (
  <div className="flex gap-3 md:gap-4 w-full items-center justify-center">
    {images.map((image, index) => (
      <div
        key={index}
        className={`bg-surface/30 rounded-xl md:rounded-2xl border border-border p-3 md:p-4 flex flex-col ${
          index === 0 ? "w-[55%]" : "w-[40%] md:w-[35%]"
        }`}
      >
        <div className="relative mb-3 md:mb-5">
          <div className="overflow-hidden rounded-md md:rounded-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
            <img
              src={image}
              alt={`UI/UX showcase ${index + 1}`}
              className={`w-full object-cover grayscale ${
                index === 0 ? "h-24 md:h-40" : "h-16 md:h-28"
              }`}
            />
          </div>
        </div>
        <div className="flex items-end justify-between gap-2 md:gap-3">
          <div className="flex flex-col gap-1.5 md:gap-2 flex-1">
            <div className={`bg-foreground/20 rounded-full w-full ${index === 0 ? "h-2 md:h-3" : "h-1.5 md:h-2"}`} />
            <div className={`bg-foreground/20 rounded-full w-3/4 ${index === 0 ? "h-2 md:h-3" : "h-1.5 md:h-2"}`} />
          </div>
          <button className={`bg-foreground text-background font-medium rounded-md md:rounded-lg shrink-0 ${
            index === 0 ? "px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs" : "px-2 md:px-3 py-1 md:py-1.5 text-[8px] md:text-[10px]"
          }`}>
            Start here
          </button>
        </div>
      </div>
    ))}
  </div>
);

// App Development - Mobile phone mockup
const AppDevShowcase = ({ image }: { image: string }) => (
  <div className="flex justify-center items-center">
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-[140px] md:w-[200px] bg-surface/50 rounded-[24px] md:rounded-[32px] border-4 md:border-[6px] border-foreground/20 p-2 md:p-3">
        {/* Notch */}
        <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 md:h-5 bg-background rounded-full" />
        {/* Screen */}
        <div className="overflow-hidden rounded-[16px] md:rounded-[20px] bg-background">
          <img
            src={image}
            alt="App showcase"
            className="w-full h-[200px] md:h-[300px] object-cover grayscale"
          />
        </div>
        {/* Home Indicator */}
        <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-12 md:w-16 h-1 bg-foreground/30 rounded-full" />
      </div>
    </div>
  </div>
);

// Web Development - Browser mockup
const WebDevShowcase = ({ image }: { image: string }) => (
  <div className="flex justify-center items-center w-full">
    <div className="w-full max-w-[400px] md:max-w-[500px]">
      {/* Browser Frame */}
      <div className="bg-surface/50 rounded-xl md:rounded-2xl border border-border overflow-hidden">
        {/* Browser Header */}
        <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-surface/80 border-b border-border">
          {/* Traffic Lights */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/60" />
          </div>
          {/* URL Bar */}
          <div className="flex-1 mx-2 md:mx-4">
            <div className="bg-background/50 rounded-md px-3 py-1 md:py-1.5">
              <span className="text-[10px] md:text-xs text-muted-foreground">stratstudio.com</span>
            </div>
          </div>
        </div>
        {/* Browser Content */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt="Web development showcase"
            className="w-full h-[150px] md:h-[220px] object-cover object-top grayscale"
          />
        </div>
      </div>
    </div>
  </div>
);

// Branding - Logo showcase
const BrandingShowcase = () => (
  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-4">
    {logos.map((logo, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="group"
      >
        <img
          src={logo}
          alt={`Brand logo ${index + 1}`}
          className="h-8 md:h-12 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        />
      </motion.div>
    ))}
  </div>
);

export const ServicesTabsSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const renderShowcase = () => {
    switch (activeTab) {
      case "ui-ux":
        return <UiUxShowcase images={activeContent.images} />;
      case "app-dev":
        return <AppDevShowcase image={activeContent.images[0]} />;
      case "web-dev":
        return <WebDevShowcase image={activeContent.images[0]} />;
      case "branding":
        return <BrandingShowcase />;
      default:
        return <UiUxShowcase images={activeContent.images} />;
    }
  };

  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SubtleBadge icon={<Sparkles className="w-4 h-4" />}>Services</SubtleBadge>
          <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
            The services and solutions we provide.
          </BlurInHeading>
          <p className="text-muted-foreground text-base max-w-2xl">
            We collaborate with innovative teams and driven founders to transform ideas into products
            — featuring intuitive UX, striking visuals, and unforgettable digital experiences.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-3 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border hover:border-foreground/50"
                }`}
              >
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Card 1 - Text Content */}
            <div
              className="lg:col-span-2 relative rounded-2xl border border-border overflow-hidden flex flex-col justify-between p-6 md:p-8 min-h-[200px] md:min-h-0"
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>
                <h3 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-medium leading-tight whitespace-pre-line">
                  {activeContent.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs mt-4 md:mt-0">
                {activeContent.description}
              </p>
            </div>

            {/* Card 2 - Service Showcase */}
            <div
              className="lg:col-span-3 relative rounded-2xl border border-border overflow-hidden py-10 md:py-16 px-4 md:px-6"
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {renderShowcase()}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

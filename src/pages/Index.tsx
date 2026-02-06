import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import TestimonialSection from "@/components/testimonial-section";
import PortfolioSection from "@/components/portfolio-section";
import BenefitsSection from "@/components/benefits-section";
import TrustedBySection from "@/components/trusted-by-section";
import HowItWorksSection from "@/components/how-it-works-section";
import ProjectCalculatorSection from "@/components/project-calculator-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import headerLight from "@/assets/header-light.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header Light Effect - below navbar */}
      <div className="fixed top-0 left-0 w-full z-10 pointer-events-none overflow-hidden" style={{ transform: 'translateY(-5%)' }}>
        <img 
          src={headerLight} 
          alt="" 
          className="w-full object-cover opacity-70 mix-blend-lighten"
          style={{ transform: 'scale(1.05)' }}
        />
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialSection />
        <PortfolioSection />
        <BenefitsSection />
        <TrustedBySection />
        <HowItWorksSection />
        <ProjectCalculatorSection />
        <CTASection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHeroSection } from "@/components/about-hero-section";
import { AboutCollaborationSection } from "@/components/about-collaboration-section";
import { AboutTimelineSection } from "@/components/about-timeline-section";
import { AboutTeamSection } from "@/components/about-team-section";
import TrustedBySection from "@/components/trusted-by-section";
import { CTASection } from "@/components/cta-section";
import headerLight from "@/assets/header-light.png";

const AboutUs = () => {
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
        <AboutHeroSection />
        <AboutCollaborationSection />
        <AboutTimelineSection />
        <TrustedBySection />
        <AboutTeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

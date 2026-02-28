import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesHeroSection } from "@/components/services-hero-section";
import TestimonialSection from "@/components/testimonial-section";
import { ServicesProductDesignSection } from "@/components/services-product-design-section";
import { ServicesTabsSection } from "@/components/services-tabs-section";
import { ServicesTestimonialMarqueeSection } from "@/components/services-testimonial-marquee-section";
import { ServicesFaqSection } from "@/components/services-faq-section";
import { CTASection } from "@/components/cta-section";
import headerLight from "@/assets/header-light.png";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header Light Effect - below navbar */}
      {/* <div className="fixed top-0 left-0 w-full z-10 pointer-events-none overflow-hidden" style={{ transform: 'translateY(-5%)' }}>
        <img 
          src={headerLight} 
          alt="" 
          className="w-full object-cover opacity-70 mix-blend-lighten"
          style={{ transform: 'scale(1.05)' }}
        />
      </div> */}
      
      <Navbar />
      <main>
        <ServicesHeroSection />
        <TestimonialSection />
        <ServicesProductDesignSection />
        {/* <ServicesTabsSection /> */}
        <ServicesTestimonialMarqueeSection />
        <ServicesFaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

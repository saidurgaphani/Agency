import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactHeroSection } from "@/components/contact-hero-section";
import { ContactFormSection } from "@/components/contact-form-section";
import headerLight from "@/assets/header-light.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">

      {/* Header light effect - below navbar */}
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
        <ContactHeroSection />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

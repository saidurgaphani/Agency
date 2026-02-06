import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScheduleHeroSection } from "@/components/schedule-hero-section";
import { ScheduleCalSection } from "@/components/schedule-cal-section";
import headerLight from "@/assets/header-light.png";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">

      {/* Header light effect - below navbar, lower z-index than cal embed */}
      <div className="fixed top-0 left-0 w-full z-[5] pointer-events-none overflow-hidden" style={{ transform: 'translateY(-5%)' }}>
        <img 
          src={headerLight} 
          alt="" 
          className="w-full object-cover opacity-70 mix-blend-lighten"
          style={{ transform: 'scale(1.05)' }}
        />
      </div>

      <Navbar />

      <main>
        <ScheduleHeroSection />
        <ScheduleCalSection />
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;

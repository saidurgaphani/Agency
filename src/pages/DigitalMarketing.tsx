import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DigitalMarketingHero } from "@/components/digital-marketing-hero";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";

const DigitalMarketing = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white relative">
            <Navbar />
            <main>
                <DigitalMarketingHero />
                <div className="flex flex-col gap-10 overflow-hidden py-10 bg-slate-950 relative z-10">
                    <MarqueeAnimation
                        direction="left"
                        baseVelocity={-2}
                        className="font-black text-8xl text-neutral-200/20 py-2"
                    >
                        Digital Marketing • SEO • Content •
                    </MarqueeAnimation>
                    <MarqueeAnimation
                        direction="right"
                        baseVelocity={-2}
                        className="font-black text-8xl text-neutral-200/20 py-2"
                    >
                        Strategy • Growth • Analytics •
                    </MarqueeAnimation>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DigitalMarketing;

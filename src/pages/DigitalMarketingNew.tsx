import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DigitalMarketingHeroV2 } from "@/components/digital-marketing-hero-v2";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";

const DigitalMarketingNew = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white relative">
            <Navbar />
            <main>
                <DigitalMarketingHeroV2 />
                <div className="flex flex-col gap-10 overflow-hidden py-10 bg-slate-950 relative z-10">
                    <MarqueeAnimation
                        direction="left"
                        baseVelocity={(-2)}
                        className="font-black text-4xl md:text-8xl text-neutral-200/20 py-2"
                    >
                        Digital Marketing • SEO • Content •
                    </MarqueeAnimation>
                    <MarqueeAnimation
                        direction="right"
                        baseVelocity={(-2)}
                        className="font-black text-4xl md:text-8xl text-neutral-200/20 py-2"
                    >
                        Strategy • Growth • Analytics •
                    </MarqueeAnimation>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DigitalMarketingNew;

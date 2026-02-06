import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { SubtleBadge } from "@/components/subtle-badge";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import headerLight from "@/assets/header-light.png";

const PrivacyPolicy = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Header light effect - below navbar */}
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
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* Background Video */}
          <div className="absolute top-0 left-0 right-0 h-full z-0 overflow-hidden">
            {prefersReducedMotion ? (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-background to-zinc-800" />
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
              </video>
            )}
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-background/60" />
            {/* Bottom Fade Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto relative z-20">
            <div className="flex flex-col items-center text-center gap-6">
              {/* Heading */}
              <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Privacy policy
              </h1>

              {/* Badges */}
              <div className="flex items-center gap-3">
                <SubtleBadge>v1.0.0</SubtleBadge>
                <SubtleBadge>Dec 18, 2025</SubtleBadge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative z-20 py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl mx-auto flex flex-col gap-12">
            {/* Section 1 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                1. Information We Gather
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                We may gather personal details like your name, email, phone number, or other identifiable info you provide when signing up, subscribing to newsletters, or reaching out to us. We also collect usage data, including your IP address, browser type, pages visited, and other usage specifics when you engage with the Site. Cookies and similar technologies are used to enhance your experience.
              </p>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                2. How We Utilize Your Information
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                We may use the information we gather to provide, maintain, and enhance the Site. This includes personalizing your experience, addressing your inquiries, and sending newsletters, promotions, or other marketing communications with your consent. We also utilize the information to monitor usage, improve Site functionality, and comply with legal requirements.
              </p>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                3. Sharing Your Information
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                We may share your information with trusted third-party service providers who assist us in operating the Site, conducting business, or serving you. Additionally, we may disclose your information to meet legal obligations or protect our rights. We do not sell, rent, or trade your personal information.
              </p>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                4. Data Security
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                We take reasonable measures to safeguard your personal information from unauthorized access, use, or disclosure. However, please be aware that no data transmission over the internet or electronic storage method can be guaranteed to be 100% secure.
              </p>
            </div>

            {/* Section 5 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                5. Your Rights and Options
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                You have the right to access, update, or correct your personal information. You can also opt out of receiving marketing communications. Additionally, you may request the deletion of your personal information, subject to certain exceptions.
              </p>
            </div>

            {/* Section 6 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                6. Links to Third-Party Sites
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                The Site may include links to third-party websites that we do not operate. We are not responsible for the content or privacy practices of these sites. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* Section 7 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                7. Children's Privacy
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                The Site is not intended for individuals under 13, and we do not knowingly collect personal information from children. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>

            {/* Section 8 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                8. Updates to This Privacy Policy
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                We may revise this Privacy Policy occasionally. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Section 9 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-xl font-medium">
                9. Get in Touch
              </h2>
              <p className="text-muted-foreground text-base leading-6">
                If you have any questions regarding this Privacy Policy or our data practices, please reach out to us at our email address.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

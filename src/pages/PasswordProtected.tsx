import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import headerLight from "@/assets/header-light.png";
import loginIcon from "@/assets/login-icon.png";

const PasswordProtected = () => {
  const { toast } = useToast();
  const prefersReducedMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate password check - replace with actual logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Access granted!",
      description: "You now have access to the protected content.",
    });

    setIsSubmitting(false);
  };

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

      <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
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
        </div>

        {/* Password Protected Card */}
        <div className="relative z-20 w-full max-w-lg p-10 bg-white/5 rounded-[40px] shadow-[inset_0px_2px_4px_0px_rgba(255,255,255,0.16)] backdrop-blur-sm border border-border flex flex-col items-center gap-8">
          {/* Icon */}
          <div className="w-14 h-14">
            <img src={loginIcon} alt="Password Protected" className="w-full h-full object-contain" />
          </div>

          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-foreground text-3xl md:text-4xl font-semibold">
              Password Protected
            </h1>
            <p className="text-muted-foreground text-base">
              Your new password must be different to previously used passwords.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-muted-foreground text-base">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-transparent border-border focus:border-foreground text-foreground placeholder:text-muted-foreground/50 py-5"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="glass"
              size="lg"
              disabled={isSubmitting}
              className="w-full h-14 rounded-2xl text-lg mt-2"
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
              <ArrowRight className="w-6 h-6" />
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PasswordProtected;

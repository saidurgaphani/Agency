import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import headerLight from "@/assets/header-light.png";
import loginIcon from "@/assets/login-icon.png";

const SignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate signup - replace with actual auth logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Set auth flag and redirect to dashboard
    localStorage.setItem("isAuthenticated", "true");

    toast({
      title: "Account created!",
      description: "Welcome to Strat Studio.",
    });

    navigate("/dashboard");
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

      <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {prefersReducedMotion ? (
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
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
              Your browser does not support the video tag.
            </video>
          )}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Sign Up Card */}
        <div className="relative z-20 w-full max-w-lg p-10 bg-white/5 rounded-[40px] shadow-[inset_0px_2px_4px_0px_rgba(255,255,255,0.16)] backdrop-blur-sm border border-border flex flex-col items-center gap-8">
          {/* Icon */}
          <div className="w-14 h-14">
            <img src={loginIcon} alt="Sign Up" className="w-full h-full object-contain" />
          </div>

          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-foreground text-3xl md:text-4xl font-semibold">
              Create Account
            </h1>
            <p className="text-muted-foreground text-base">
              Enter your details to get started.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-muted-foreground text-base">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-border focus:border-foreground text-foreground placeholder:text-muted-foreground/50 py-5"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-muted-foreground text-base">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-border focus:border-foreground text-foreground placeholder:text-muted-foreground/50 py-5"
              />
            </div>

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
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-transparent border-border focus:border-foreground text-foreground placeholder:text-muted-foreground/50 py-5"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirmPassword" className="text-muted-foreground text-base">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
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
              {isSubmitting ? "Creating account..." : "Sign Up"}
              <ArrowRight className="w-6 h-6" />
            </Button>
          </form>

          {/* Footer Link */}
          <p className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-foreground underline hover:opacity-80 transition-opacity">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;

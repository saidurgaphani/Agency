import { useLocation, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import headerLight from "@/assets/header-light.png";
import notFoundImage from "@/assets/404.png";

const NotFound = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  // Handle redirects for old URLs
  // const redirectMap: { [key: string]: string } = {
  //   '/home-v2': '/',
  //   '/home': '/',
  //   '/templates': '/all-framer-templates',
  //   '/lovable-templates': '/all-framer-templates',
  //   '/saas': '/saas-templates'
  // };

  // const redirectPath = redirectMap[location.pathname];
  
  // if (redirectPath) {
  //   return <Navigate to={redirectPath} replace />;
  // }

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

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

      <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* {prefersReducedMotion ? (
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
          )} */}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6">
          {/* 404 Image */}
          <img
            src={notFoundImage}
            alt="404 - Page not found"
            className="w-full max-w-xs md:max-w-sm h-auto mb-8"
          />

          {/* Heading */}
          <h1 className="text-foreground text-3xl md:text-4xl font-medium mb-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-md mb-8">
            The page you're looking for doesn't exist, or it might have been moved.
          </p>

          {/* CTA Button */}
          <Link to="/">
            <Button variant="glass" size="lg" className="h-14 px-8 py-4 rounded-2xl text-lg">
              Back to Homepage
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

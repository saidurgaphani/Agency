import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ViBound.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  // { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
  // { label: "Log in", href: "/login" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClose = () => {
    // Small delay to allow exit animation to play
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[hsl(var(--nav-bg))] border-b border-[hsl(var(--nav-border))] backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ViBound Studio Logo" className="h-12 w-auto" />
          {/* <span className="text-xl md:text-2xl font-bold">___ Studio</span> */}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("/") ? (
                <Link
                  to={link.href}
                  className="text-[hsl(var(--nav-text))] text-base font-medium leading-6 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-[hsl(var(--nav-text))] text-base font-medium leading-6 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        {/* <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="glass" size="default" className="px-6">
              Buy Template
            </Button>
          </Link>
        </div> */}

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu - Absolute Overlay with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-0 left-0 right-0 z-50 bg-background border-b border-[hsl(var(--nav-border))] mt-16"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.05 }}
                >
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-[hsl(var(--nav-text))] text-lg font-medium hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                      onClick={handleMenuClose}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[hsl(var(--nav-text))] text-lg font-medium hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                      onClick={handleMenuClose}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.li>
              ))}
              <motion.li
                className="mt-4"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: navLinks.length * 0.05 }}
              >
                {/* <Link to="/contact" onClick={handleMenuClose}>
                  <Button variant="glass" size="default" className="px-6">
                    Buy Template
                  </Button>
                </Link> */}
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

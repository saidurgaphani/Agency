import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import headerLight from "@/assets/header-light.png";
import { GlowBadge } from "./glow-badge";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  // legal: {
  //   title: "Legal",
  //   links: [
  //     { label: "Privacy Policy", href: "/privacy-policy" },
  //     { label: "Password Protected", href: "/password-protected" },
  //   ],
  // },
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="relative z-20 pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Top border with fade effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-foreground/[0.12] via-foreground to-foreground/[0.12]" />

      {/* Bottom Light Effect - Flipped vertically */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none overflow-hidden" style={{ transform: 'translateY(10%)' }}>
        <img
          src={headerLight}
          alt=""
          className="w-full object-cover opacity-50 mix-blend-lighten"
          style={{ transform: 'scaleY(-1) scale(1.05)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-20">
          {/* Left Column - Logo, Description, Social */}
          <div className="max-w-96 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <span className="text-xl md:text-2xl font-bold">ViBound Studio</span>
              </Link>
              {/* Description */}
              <p className="text-muted-foreground text-base font-normal leading-6">
                Empowering developers with AI-powered design assistance. Write better code, faster and more efficiently.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3.5 rounded-full border border-muted-foreground/30 hover:border-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="flex flex-col gap-7">
                <span className="text-foreground text-lg font-medium leading-7 block">
                  {section.title}
                </span>
                <ul className="flex flex-col gap-5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="text-muted-foreground text-base font-normal leading-6 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-muted-foreground text-base font-normal leading-6 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-base font-normal leading-6">
            © {new Date().getFullYear()} ViBound Studio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-base font-normal leading-6">
            Crafting digital experiences that inspire.
          </p>
        </div>

        <div className="h-60 md:h-[20rem] flex items-center justify-center overflow-hidden">
          <TextHoverEffect text="VIBOUND" />
        </div>
      </div>
    </footer>
  );
};

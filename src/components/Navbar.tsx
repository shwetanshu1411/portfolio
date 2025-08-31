




"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Instagram, Linkedin, FileText } from "lucide-react";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },

    { href: "#contact", label: "Contact", id: "contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActive(id);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const socialLinks = [
    { href: "https://github.com/shwetanshu1411", icon: Github, label: "GitHub" },
    { href: "https://www.instagram.com/shwe_tanshukumar?igsh=YmVlYW50MGJ0dXBt", icon: Instagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/shwetanshu-kumar-9089a1217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: Linkedin, label: "LinkedIn" },
    { href: "/resume.pdf", icon: FileText, label: "Resume" }
  ];

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50", className)}>
      <div className="container  mt-4">
        <nav className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl px-6 py-3 shadow-xl">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Name/Logo on the left */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Shwetanshu.in</h1>
            </div>

            {/* Navigation items in the center */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={cn(
                    "text-white/90 hover:text-white transition-all duration-200",
                    "hover:bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm",
                    active === item.id && "bg-white/10 text-white"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social icons on the right */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.label === "Resume" ? "_blank" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-all duration-200 hover:bg-white/10 p-2 rounded-lg backdrop-blur-sm"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              {/* Name/Logo */}
              <h1 className="text-xl font-bold text-white">Shwetanshu.in</h1>
              
              {/* Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-white/10 rounded-lg p-2 transition-all duration-200 backdrop-blur-sm"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href, item.id);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "text-white/90 hover:text-white transition-all duration-200",
                        "hover:bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm",
                        active === item.id && "bg-white/10 text-white"
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
                  
                  {/* Social icons for mobile */}
                  <div className="flex items-center justify-center space-x-6 pt-4 mt-4 border-t border-white/10">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target={social.label === "Resume" ? "_blank" : "_blank"}
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-all duration-200 hover:bg-white/10 p-2 rounded-lg backdrop-blur-sm"
                          aria-label={social.label}
                        >
                          <IconComponent size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
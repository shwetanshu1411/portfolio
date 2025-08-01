

"use client";
import React, { useState } from "react";
import { Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);

  // Smooth Scroll Function
  // const handleScroll = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop - 100, // Adjust if navbar is fixed
  //       behavior: "smooth",
  //     });
  //     setActive(id);
  //   }
  // };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
          <a href="#home">Home</a>
          <a href="#skill" className="href">Skills</a>
          <a href="#project" className="href">Projects</a>
          <a href="#service" className="href">Services</a>
          <a href="#contact">Contact</a>
      </Menu>
    </div>
  );
}

export default Navbar;

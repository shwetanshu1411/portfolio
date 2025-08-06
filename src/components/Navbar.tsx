

// "use client";
// import React, { useState } from "react";
// import { Menu } from "@/components/ui/navbar-menu";
// import { cn } from "@/lib/utils";

// interface NavbarProps {
//   className?: string;
// }

// function Navbar({ className }: NavbarProps) {
//   const [active, setActive] = useState<string | null>(null);

//   // Smooth Scroll Function
//   // const handleScroll = (id: string) => {
//   //   const element = document.getElementById(id);
//   //   if (element) {
//   //     window.scrollTo({
//   //       top: element.offsetTop - 100, // Adjust if navbar is fixed
//   //       behavior: "smooth",
//   //     });
//   //     setActive(id);
//   //   }
//   // };

//   return (
//     <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//       <Menu setActive={setActive}>
//           <a href="#home">Home</a>
//           <a href="#skill" className="href">Skills</a>
//           <a href="#project" className="href">Projects</a>
//           <a href="#service" className="href">Services</a>
//           <a href="#contact">Contact</a>
//       </Menu>
//     </div>
//   );
// }

// export default Navbar;


"use client";
import React, { useState } from "react";
import { Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X } from "lucide-react"; // using lucide-react icons

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  return (
    <div className={cn("fixed top-0 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      {/* Hamburger for mobile */}
      <div className="lg:hidden flex justify-end px-6">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white dark:text-white">
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Menu for both desktop and mobile */}
      <Menu isOpen={isOpen}>
        <a href="#home">Home</a>
        <a href="#skill">Skills</a>
        <a href="#project">Projects</a>
        <a href="#service">Services</a>
        <a href="#contact">Contact</a>
      </Menu>
    </div>
  );
}

export default Navbar;

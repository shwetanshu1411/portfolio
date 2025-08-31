
"use client";
import React from "react";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import photo from "@/app/portfolio.jpg";


// Hero Section with Typewriter and Hire Me
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hello,",
      className:
        "text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400",
    },
    {
      text: "I'm Shwetanshu,",
      className:
        "text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400",
    },
  
  ];

  return (
    <div className="container flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 ">
      {/* Left Side: Text Content */}
      <div className="flex-1 text-left space-y-4">
        <TypewriterEffectSmooth words={words} />
   <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed text-justify max-w-full break-words">
  I am a Software Engineer from India who enjoys transforming ideas into digital realities.
  Skilled in both <span className="text-blue-400 font-semibold">frontend</span> and <span className="text-purple-400 font-semibold">backend</span> development using 
  <span className="text-green-400 font-semibold"> MERN</span> and <span className="text-pink-400 font-semibold">Next.js</span>, I also have a deep appreciation 
  for the intricacies of <span className="text-green-400 font-semibold">C/C++ programming</span>.
</p>

        {/* Hire Me Button */}
        <div className="mt-6">
          <MovingBorderButton />
        </div>

        
      </div>

      {/* Right Side: Profile Image with Animated Border */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <MovingBorderImage />
      </div>
    </div>
  );
}

// ✅ Moving Border with Profile Image Inside (Only Border Animates)
export function MovingBorderImage() {
  return (
    <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex items-center justify-center">
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-full p-[5px] bg-gradient-to-r from-gray-500  to-gray-500 animate-borderMove">
        {/* Inner White Background to Mask */}
        <div className="w-full h-full rounded-full bg-black p-[2px] flex items-center justify-center">
          {/* Profile Image (Static) */}
          <div className="relative w-[240px] h-[240px] md:w-[290px] md:h-[290px] overflow-hidden rounded-full">
            <Image
              src={photo}
              alt="Shwetanshu's Profile"
              width={290}
              height={290}
              className="object-cover w-full h-full rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Moving Border Button
export function MovingBorderButton() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollToContact}
      borderRadius="3rem"
      className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 font-semibold"
    >
      Hire Me
    </Button>
  );
}

export default TypewriterEffectSmoothDemo;

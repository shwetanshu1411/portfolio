
// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { Button } from "@/components/ui/moving-border";
// import photo from "@/app/portfolio.jpg";
// import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"; // Import icons

// export function TypewriterEffectSmoothDemo() {
//   const words = [
//     {
//       text: "Hello,",
//       className:
//         "text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400",
//     },
//     {
//       text: "I'm Shwetanshu,",
//       className:
//         "text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400",
//     },
//     {
//       text: "a Full-Stack Developer.",
//       className:
//         "text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",
//     },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 lg:px-24 pt-24 pb-10 gap-10 md:gap-16">
//       {/* Left Side: Text Content */}
//       <div className="md:w-1/2 space-y-6 text-center md:text-left">
//         <TypewriterEffectSmooth words={words} />
//         <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
//           I am a Software Engineer from India who enjoys transforming ideas into digital realities.
//           Skilled in both <span className="text-blue-400 font-semibold">frontend</span> and <span className="text-purple-400 font-semibold">backend</span> development using 
//           <span className="text-green-400 font-semibold"> MERN</span> and <span className="text-pink-400 font-semibold">Next.js</span>, I also have a deep appreciation 
//           for the intricacies of <span className="text-green-400 font-semibold">C/C++ programming</span>.
//         </p>

//         {/* Hire Me Button */}
//         <div className="mt-6">
//           <MovingBorderButton />
//         </div>

//         {/* 🔗 Social Media Icons */}
//         <div className="flex space-x-4 mt-4 justify-center md:justify-start">
//           <a
//             href="https://www.linkedin.com/in/shwetanshu-kumar-9089a1217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-gray-400 text-2xl transition"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://www.instagram.com/shwe_tanshukumar?igsh=YmVlYW50MGJ0dXBt"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-gray-400 text-2xl transition"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://github.com/shwetanshu1411"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-gray-400 text-2xl transition"
//           >
//             <FaGithub />
//           </a>
//           <a 
//   href="https://drive.google.com/file/d/1k1o3KInHaYbslbHROCTBDphdfyT9LZEh/view?usp=drive_link" 
//   target="_blank" 
//   rel="noopener noreferrer"
//   className="bg-gray-600 text-white px-2 py-1 rounded-lg text-xl font-semibold hover:bg-gray-700 transition duration-300 shadow-md"
// >
//   Resume
// </a>

//         </div>
//       </div>

//       {/* Right Side: Profile Image with Animated Border */}
//       <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//         <MovingBorderImage />
//       </div>
//     </div>
//   );
// }

// // ✅ Moving Border with Profile Image Inside (Only Border Animates)
// export function MovingBorderImage() {
//   return (
//     <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex items-center justify-center">
//       {/* Animated Border */}
//       <div className="absolute inset-0 rounded-full p-[5px] bg-gradient-to-r from-gray-500 via-black-400 via-black-500 to-gray-500 animate-borderMove">
        
//         {/* Inner White Background to Mask */}
//         <div className="w-full h-full rounded-full bg-black p-[2px] flex items-center justify-center">
//           {/* Profile Image (Static) */}
//           <div className="relative w-[240px] h-[240px] md:w-[290px] md:h-[290px] overflow-hidden rounded-full">
//             <Image
//               src={photo}
//               alt="Shwetanshu's Profile"
//               width={290}
//               height={290}
//               className="object-cover w-full h-full rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ✅ Moving Border Button
// export function MovingBorderButton() {
//   return (
//     <Button
//       borderRadius="3rem"
//       className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-3 font-semibold"
//     >
//       Hire Me
//     </Button>
    
//   );
// }


// export default TypewriterEffectSmoothDemo;


"use client";
import React from "react";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import photo from "@/app/portfolio.jpg";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

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
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 lg:px-24 pt-24 pb-10 gap-10 md:gap-16">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
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

        {/* 🔗 Social Media Icons */}
        <div className="flex space-x-4 mt-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/shwetanshu-kumar-9089a1217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/shwe_tanshukumar?igsh=YmVlYW50MGJ0dXBt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/shwetanshu1411"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl transition"
          >
            <FaGithub />
          </a>
          <a 
            href="https://drive.google.com/file/d/1k1o3KInHaYbslbHROCTBDphdfyT9LZEh/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-600 text-white px-2 py-1 rounded-lg text-xl font-semibold hover:bg-gray-700 transition duration-300 shadow-md"
          >
            Resume
          </a>
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
      <div className="absolute inset-0 rounded-full p-[5px] bg-gradient-to-r from-gray-500 via-black-400 via-black-500 to-gray-500 animate-borderMove">
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

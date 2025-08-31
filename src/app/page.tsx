// // import { motion } from "framer-motion"; 
// import Navbar from "@/components/Navbar";
// import TypewriterEffectSmoothDemo from "@/components/Herosection";
// import Skill from "@/components/Skill";
// import Project from "@/components/Project";
// // ✅ Fixed import - use the correct component name
// import AnimatedTestimonialsDemo from "@/components/Services";
// import Contact from "@/components/contact";
// import Footer from "@/components/footer";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
//       <Navbar />
//       <section id="home"><TypewriterEffectSmoothDemo /></section>
//       <section id="skill"><Skill /></section>
//       <section id="project"><Project/></section>
//       <section id="service">
//         {/* ✅ Removed testimonials prop and used correct component name */}
//         <AnimatedTestimonialsDemo />
//       </section>
//       <section id="contact"><Contact /></section>
//       <Footer />
//     </main>
//   );
// }


// "use client";

// import Navbar from "@/components/Navbar";
// import TypewriterEffectSmoothDemo from "@/components/Herosection";
// import Skill from "@/components/Skill";
// import Project from "@/components/Project";
// import AnimatedTestimonialsDemo from "@/components/Services";
// import Contact from "@/components/contact";
// import Footer from "@/components/footer";

// export default function Home() {
//   return (
//     <main className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
//       <Navbar />

//       {/* Hero Section - Fullscreen */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center"
//       >
//         <TypewriterEffectSmoothDemo />
//       </section>

//       {/* Skills Section */}
//       <section id="skill" className="py-20">
//         <Skill />
//       </section>

//       {/* Projects Section */}
//       <section id="project" className="py-20">
//         <Project />
//       </section>

//       {/* Services Section */}
//       <section id="service" className="py-20">
//         <AnimatedTestimonialsDemo />
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20">
//         <Contact />
//       </section>

//       {/* Footer */}
//       <Footer />
//     </main>
//   );
// }


"use client";

import Navbar from "@/components/Navbar";
import TypewriterEffectSmoothDemo from "@/components/Herosection";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
// import AnimatedTestimonialsDemo from "@/components/Services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />

      {/* Hero Section - Fullscreen */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <TypewriterEffectSmoothDemo />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <Skill />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Project />
      </section>

      {/* Services Section */}
      {/* <section id="services" className="py-20">
        <AnimatedTestimonialsDemo />
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}

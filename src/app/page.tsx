// import { motion } from "framer-motion"; 
import Navbar from "@/components/Navbar";
import TypewriterEffectSmoothDemo from "@/components/Herosection";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
// ✅ Fixed import - use the correct component name
import AnimatedTestimonialsDemo from "@/components/Services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />
      <section id="home"><TypewriterEffectSmoothDemo /></section>
      <section id="skill"><Skill /></section>
      <section id="project"><Project/></section>
      <section id="service">
        {/* ✅ Removed testimonials prop and used correct component name */}
        <AnimatedTestimonialsDemo />
      </section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  );
}
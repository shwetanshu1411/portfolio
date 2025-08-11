// import { motion } from "framer-motion"; 
import Navbar from "@/components/Navbar";
import TypewriterEffectSmoothDemo from "@/components/Herosection";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Services from "@/components/Services";
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
        <Services testimonials={[]} />
      </section>
      <section id="contact"><Contact /></section>
      <Footer />

    </main>
  );
}

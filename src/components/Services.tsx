import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import front from "@/app/frontend1.webp";
import back from "@/app/backennd1.webp";
import dev from "@/app/Devops1.webp";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Passionate frontend developer crafting exceptional user experiences with React and Next.js. Skilled in building robust, scalable web applications. Let's create something amazing together!",
      name: "Frontend Developer",
      src: front,
    },
    {
      quote:
        "Skilled in architecting and building scalable backend systems. Passionate about solving complex problems and delivering exceptional user experiences through efficient API development.",
      name: "Backend Developer",
      src: back,
    },
    {
      quote:
        "Experienced in architecting and automating scalable backend infrastructures. Passionate about optimizing CI/CD pipelines, containerization, and cloud deployments to ensure seamless scalability, security, and efficiency.",
      name: "DevOps",
      src: dev,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Centered Header */}
      <h1 className="mt-10 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center">
        Services
      </h1>

      {/* Testimonials Component */}
      <div className="mt-12 w-full">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}

export default AnimatedTestimonialsDemo;
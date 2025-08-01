// "use client";

// export function Skill() {
//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white">
//       {/* Title at the Top Center */}
//       <h1 className="absolute top-10 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center w-full">
//         Skills
//       </h1>

//       {/* Centered Content */}
//       <div className="flex items-center justify-center">
//         <p className="text-lg md:text-xl">Your content here</p>
//       </div>
//     </div>
//   );
// }

// export default Skill;


// "use client";

// import { HoverEffect } from "@/components/ui/card-hover-effect";
// import { 
//   SiReact, SiJavascript, SiNextdotjs, SiNodedotjs, SiExpress, 
//   SiMongodb, SiMysql, SiDocker, SiKubernetes, SiGithubactions, 
//   SiCplusplus, SiSocketdotio 
// } from "react-icons/si";

// const skills = [
//   { title: "React", description: "A JavaScript library for building user interfaces", link: "/react", icon: SiReact },
//   { title: "JavaScript", description: "A high-level, often just-in-time compiled, and multi-paradigm programming language", icon: SiJavascript },
//   { title: "Next.js", description: "A React framework for production",  icon: SiNextdotjs },
//   { title: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine", link: "/nodejs", icon: SiNodedotjs },
//   { title: "Express", description: "A minimal and flexible Node.js web application framework", link: "/express", icon: SiExpress },
//   { title: "MongoDB", description: "A source-available cross-platform document-oriented database program", link: "/mongodb", icon: SiMongodb },
//   { title: "MySQL", description: "An open-source relational database management system", link: "/mysql", icon: SiMysql },
//   { title: "Docker", description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers", link: "/docker", icon: SiDocker },
//   { title: "Kubernetes", description: "An open-source container-orchestration system for automating computer application deployment, scaling, and management", link: "/kubernetes", icon: SiKubernetes },
//   { title: "GitHub Actions", description: "Automate your workflow from idea to production", link: "/github-actions", icon: SiGithubactions },
//   { title: "C++", description: "A general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language", link: "/cpp", icon: SiCplusplus },
//   { title: "Socket.io", description: "A library that enables real-time, bidirectional and event-based communication between the browser and the server", link: "/socketio", icon: SiSocketdotio },
// ];


// export function Skill() {
//   return (
//     <div 
//       id="skills"  // <-- Ensure this matches the ID used in Navbar
//       className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6"
//     >
//       {/* Title */}
//       <h1 className="mt-10 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center w-full">
//         Skills
//       </h1>

//       <p className="text-white text-lg font-mono mt-4 px-2 text-center">
//           Skilled in web development with React, JavaScript, and TypeScript, along with expertise in DevOps, cybersecurity, and natural language processing. Proficient in backend development, system design, and cloud platforms like AWS and Azure, I deliver innovative and secure solutions.
//         </p>

//       {/* Skills Grid */}
//       <div className="max-w-5xl mx-auto px-10 mt-8">
//         <HoverEffect items={skills} />
//       </div>
//     </div>
//   );
// }

// export default Skill;


"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { 
  SiReact, SiJavascript, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiMysql, SiDocker, SiKubernetes, SiGithubactions, 
  SiCplusplus, SiSocketdotio, 
  SiC
} from "react-icons/si";

const skills = [
  { id: "react", title: "React", description: "A JavaScript library for building user interfaces", icon: SiReact },
  { id: "javascript", title: "JavaScript", description: "A high-level, multi-paradigm programming language", icon: SiJavascript },
  { id: "nextjs", title: "Next.js", description: "A React framework for production", icon: SiNextdotjs },
  { id: "nodejs", title: "Node.js", description: "A JavaScript runtime built on Chrome's V8 engine", icon: SiNodedotjs },
  { id: "express", title: "Express", description: "A minimal and flexible Node.js web framework", icon: SiExpress },
  { id: "mongodb", title: "MongoDB", description: "A NoSQL document-oriented database", icon: SiMongodb },
  { id: "mysql", title: "MySQL", description: "An open-source relational database system", icon: SiMysql },
  { id: "docker", title: "Docker", description: "A containerization platform for software deployment", icon: SiDocker },
  { id: "kubernetes", title: "Kubernetes", description: "A container orchestration system", icon: SiKubernetes },
  { id: "c", title: "C", description: "A powerful general-purpose programming language", icon: SiC},
  { id: "cpp", title: "C++", description: "A powerful general-purpose programming language", icon: SiCplusplus },
  { id: "socketio", title: "Socket.io", description: "A real-time event-based communication library", icon: SiSocketdotio },
];

export function Skill() {
  return (
    <div 
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6"
    >
      {/* Title */}
      <h1 className="mt-10 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center w-full">
        Skills
      </h1>

      <p className="text-white text-lg font-mono mt-4 px-2 text-center">
          Skilled in web development with React, JavaScript, and TypeScript, along with expertise in DevOps, cybersecurity, and natural language processing. Proficient in backend development, system design, and cloud platforms like AWS and Azure, I deliver innovative and secure solutions.
      </p>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto px-10 mt-8">
        <HoverEffect 
          items={skills.map(skill => ({
            key: skill.id, // Ensures unique key
            title: skill.title,
            description: skill.description,
            icon: skill.icon,
            link: "#" // Prevents errors if HoverEffect expects a link
          }))} 
        />
      </div>
    </div>
  );
}

export default Skill;

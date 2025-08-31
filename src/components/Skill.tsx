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


// "use client";

// import { HoverEffect } from "@/components/ui/card-hover-effect";
// import { 
//   SiReact, SiJavascript, SiNextdotjs, SiNodedotjs, SiExpress, 
//   SiMongodb, SiMysql, SiDocker, SiKubernetes, 
//   SiCplusplus, SiSocketdotio, 
//   SiC
// } from "react-icons/si";

// const skills = [
//   { id: "react", title: "React", description: "A JavaScript library for building user interfaces", icon: SiReact },
//   { id: "javascript", title: "JavaScript", description: "A high-level, multi-paradigm programming language", icon: SiJavascript },
//   { id: "nextjs", title: "Next.js", description: "A React framework for production", icon: SiNextdotjs },
//   { id: "nodejs", title: "Node.js", description: "A JavaScript runtime built on Chrome's V8 engine", icon: SiNodedotjs },
//   { id: "express", title: "Express", description: "A minimal and flexible Node.js web framework", icon: SiExpress },
//   { id: "mongodb", title: "MongoDB", description: "A NoSQL document-oriented database", icon: SiMongodb },
//   { id: "mysql", title: "MySQL", description: "An open-source relational database system", icon: SiMysql },
//   { id: "docker", title: "Docker", description: "A containerization platform for software deployment", icon: SiDocker },
//   { id: "kubernetes", title: "Kubernetes", description: "A container orchestration system", icon: SiKubernetes },
//   { id: "c", title: "C", description: "A powerful general-purpose programming language", icon: SiC},
//   { id: "cpp", title: "C++", description: "A powerful general-purpose programming language", icon: SiCplusplus },
//   { id: "socketio", title: "Socket.io", description: "A real-time event-based communication library", icon: SiSocketdotio },
// ];

// export function Skill() {
//   return (
//     <div 
//       id="skills"
//       className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6"
//     >
//       {/* Title */}
//       <h1 className="mt-10 text-4xl md:text-6xl 2xl:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center w-full">
//         Skills
//       </h1>

//       <p className="text-white text-lg font-mono mt-4 px-2 text-center max-w-3xl 2xl:max-w-4xl mx-auto">
//           Skilled in web development with React, JavaScript, and TypeScript, along with expertise in DevOps, cybersecurity, and natural language processing. Proficient in backend development, system design, and cloud platforms like AWS and Azure, I deliver innovative and secure solutions.
//       </p>

//       {/* Skills Grid */}
//       <div className="container max-w-5xl 2xl:max-w-7xl mx-auto px-10 mt-8">
//         <HoverEffect 
//           items={skills.map(skill => ({
//             key: skill.id, // Ensures unique key
//             title: skill.title,
//             description: skill.description,
//             icon: skill.icon,
//             link: "#" // Prevents errors if HoverEffect expects a link
//           }))} 
//         />
//       </div>
//     </div>
//   );
// }

// export default Skill;



// "use client";

// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
// import { SiMongodb, SiJavascript, SiTailwindcss, SiKubernetes, SiNextdotjs } from "react-icons/si";

// const skills = [
//   {
//     category: "Frontend",
//     items: [
//       { name: "React.js", icon: <FaReact className="text-sky-400 text-3xl" /> },
//       { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
//       { name: "Javascript", icon: <SiJavascript className="text-blue-500 text-3xl" /> },
//       { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
//     ],
//   },
//   {
//     category: "Backend",
//     items: [
//       { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
//       { name: "Express.js", icon: <FaNodeJs className="text-lime-400 text-3xl" /> },
//       { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
//     ],
//   },
//   {
//     category: "DevOps & Tools",
//     items: [
//       { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" /> },
//       { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-3xl" /> },
//       { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
//     ],
//   },
// ];

// export default function SkillSection() {
//   return (
//     <section className="py-20 px-6 md:px-12 lg:px-24 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
//       <h2 className="mt-10 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center mb-12">
//   My Skills
// </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {skills.map((group, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-gray-400 transition-all"
//           >
//             <h3 className="text-xl font-semibold text-gray-400 mb-4">{group.category}</h3>

//             <div className="grid grid-cols-2 gap-4">
//               {group.items.map((skill, j) => (
//                 <div
//                   key={j}
//                   className="flex flex-col items-center justify-center bg-gray-900/60 rounded-xl p-4 hover:bg-gray-700 transition-all"
//                 >
//                   {skill.icon}
//                   <p className="text-white text-sm mt-2">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Node.js", 
  "JavaScript",
  "Next.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Docker",
  "Kubernetes",
  "Git",
  "Tailwind CSS",
  "Socket.io",
  "C++",
  "TypeScript",
  "AWS",
  "Azure"
];

// Duplicate skills array to create seamless loop
const duplicatedSkills = [...skills, ...skills];

export default function SkillSection() {
  return (
    <section id="skills" className="py-12  px-6 md:px-12 lg:px-24 bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <div className="container">
        <h2 className="mt-10 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center mb-12">
          My Skills
        </h2>

        <p className="text-white text-lg font-mono mt-4 px-2 text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-16">
          Skilled in web development with React, JavaScript, and TypeScript, along with expertise in DevOps, cybersecurity, and natural language processing. Proficient in backend development, system design, and cloud platforms like AWS and Azure, I deliver innovative and secure solutions.
        </p>

      {/* First Row - Moving Left to Right */}
      <div className="relative w-full overflow-hidden mb-8">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: [0, -100 * skills.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gradient-to-r from-gray-600/20 to-gray-600/20 backdrop-blur-sm border border-gray-600/30 rounded-full px-6 py-3 text-white font-medium hover:from-gray-600/40 hover:to-gray-600/40 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Moving Right to Left */}
      <div className="relative w-full overflow-hidden mb-8">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: [-100 * skills.length, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.reverse().map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gradient-to-r from-gray-600/20 to-gray-600/20 backdrop-blur-sm border border-gray-600/30 rounded-full px-6 py-3 text-white font-medium hover:from-gray-600/40 hover:to-gray-600/40 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Third Row - Moving Left to Right (Slower) */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: [0, -100 * skills.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.reverse().map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gradient-to-r from-gray-600/20 to-gray-600/20 backdrop-blur-sm border border-gray-600/30 rounded-full px-6 py-3 text-white font-medium hover:from-gray-600/40 hover:to-gray-600/40 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
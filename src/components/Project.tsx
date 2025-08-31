// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Link from "next/link";
// import project1 from "@/app/Hospital.png"

// export function ThreeDCardDemo() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
//       {/* Project Title */}
//       <h1 className="mt-10 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center">
//         Project
//       </h1>

      
//       <div className="mt-12 flex flex-wrap justify-center gap-8">
//         <CardContainer className="inter-var">
//           <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          
//             <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
//               Doctor Appointment Website
//             </CardItem>

        
//             <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
//               A hospital booking website where patients can book appointments with doctors and also use chatbot for medical help. The website is built using React, Node.js, Express.js, and MongoDB.
//             </CardItem>

//             <CardItem translateZ="100" className="w-full mt-4">
//               <Image
//                 src={project1}
//                 height={1000}
//                 width={1000}
//                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                 alt="thumbnail"
//               />
//             </CardItem>

//             {/* Buttons */}
//             <div className="flex justify-between items-center mt-10">
//               <CardItem
//                 translateZ={20}
//                 as={Link}
//                 href="https://github.com/shwetanshu1411"
//                 target="__blank"
//                 className="px-4 py-2 rounded-xl text-xs font-normal dark:text-black bg-black dark:bg-white text-white font-bold"
//               >
//                 Click Here →
//               </CardItem>
              
//             </div>
//           </CardBody>
//         </CardContainer>
//       </div>
//       <div className="mt-12 flex flex-wrap justify-center gap-8">
//         <CardContainer className="inter-var">
//           <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          
//             <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
//               Doctor Appointment Website
//             </CardItem>

           
//             <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
//               A hospital booking website where patients can book appointments with doctors and also use chatbot for medical help. The website is built using React, Node.js, Express.js, and MongoDB.
//             </CardItem>

  
//             <CardItem translateZ="100" className="w-full mt-4">
//               <Image
//                 src={project1}
//                 height={1000}
//                 width={1000}
//                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                 alt="thumbnail"
//               />
//             </CardItem>

//             {/* Buttons */}
//             <div className="flex justify-between items-center mt-10">
//               <CardItem
//                 translateZ={20}
//                 as={Link}
//                 href="https://github.com/shwetanshu1411"
//                 target="__blank"
//                 className="px-4 py-2 rounded-xl text-xs font-normal dark:text-black bg-black dark:bg-white text-white font-bold"
//               >
//                 Click Here →
//               </CardItem>
              
//             </div>
//           </CardBody>
//         </CardContainer>
//       </div>
//     </div>
//   );
// }

// export default ThreeDCardDemo;

"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import project1 from "@/app/Hospital.png"; 
import project2 from "@/app/Anonymous.png"; 
import project3 from "@/app/mental.png"; 
import project4 from "@/app/ai-coach.png"; 

export function ThreeDCardDemo() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center py-6 pb-4 bg-black text-white px-6">
      {/* Project Title */}
      <h1 className="mt-10 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center">
        Projects
      </h1>

      {/* ✅ Grid Layout */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-500 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] max-w-[30rem] h-auto rounded-xl p-6 border">
            
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
              Doctor Appointment Website
            </CardItem>

            <CardItem as="p" translateZ="60" className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300">
              A hospital booking website where patients can book appointments with doctors and also use a chatbot for medical help. Built using React, Node.js, Express.js, and MongoDB.
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project1}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Project 1 Thumbnail"
              />
            </CardItem>

            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/shwetanshu1411"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
              >
                View Project →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Project 2 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-500 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] max-w-[30rem] h-auto rounded-xl p-6 border">

            <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
              Anonymous Feedback Website
            </CardItem>

            <CardItem as="p" translateZ="60" className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300">
              A secure and intuitive platform for users to share thoughts anonymously, enhanced with AI-powered assistance. Built with React, Node.js, Express.js, and MongoDB.
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project2}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Project 2 Thumbnail"
              />
            </CardItem>

            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/shwetanshu1411"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
              >
                View Project →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Project 3 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-500 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] max-w-[30rem] h-auto rounded-xl p-6 border">

            <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
              Mental Health Chatbot
            </CardItem>

            <CardItem as="p" translateZ="60" className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300">
              An AI-powered chatbot offering personalized assistance and emotional support. Built with React, Node.js, Express.js, and MongoDB.
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project3}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Project 3 Thumbnail"
              />
            </CardItem>

            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/shwetanshu1411"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
              >
                View Project →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Project 4 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-500 relative group/card dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
            border-black/[0.1] max-w-[30rem] h-auto rounded-xl p-6 border">

            <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
              AI-Powered Career Portal
            </CardItem>

            <CardItem as="p" translateZ="60" className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300">
              An AI-driven career platform featuring industry insights, resume tools, mock interviews, and Clerk-based authentication.
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project4}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Project 4 Thumbnail"
              />
            </CardItem>

            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/shwetanshu1411/saas-application-ai-coach-"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
              >
                View Project →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}

export default ThreeDCardDemo;
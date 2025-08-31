// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// const transition = {
//   type: "spring",
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// };

// export const MenuItem = ({
//   setActive,
//   active,
//   item,
//   children,
// }: {
//   setActive: (item: string) => void;
//   active: string | null;
//   item: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div onMouseEnter={() => setActive(item)} className="relative ">
//       <motion.p
//         transition={{ duration: 0.3 }}
//         className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
//       >
//         {item}
//       </motion.p>
//       {active !== null && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={transition}
//         >
//           {active === item && (
//             <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
//               <motion.div
//                 transition={transition}
//                 layoutId="active" // layoutId ensures smooth animation
//                 className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
//               >
//                 <motion.div
//                   layout // layout ensures smooth animation
//                   className="w-max h-full p-4"
//                 >
//                   {children}
//                 </motion.div>
//               </motion.div>
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export const Menu = ({
//   setActive,
//   children,
// }: {
//   setActive: (item: string | null) => void;
//   children: React.ReactNode;
// }) => {
//   return (
//     <nav
//       onMouseLeave={() => setActive(null)} // resets the state
//       className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
//     >
//       {children}
//     </nav>
//   );
// };

// export const ProductItem = ({
//   title,
//   description,
//   href,
//   src,
// }: {
//   title: string;
//   description: string;
//   href: string;
//   src: string;
// }) => {
//   return (
//     <Link href={href} className="flex space-x-2">
//       <Image
//         src={src}
//         width={140}
//         height={70}
//         alt={title}
//         className="shrink-0 rounded-md shadow-2xl"
//       />
//       <div>
//         <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
//           {title}
//         </h4>
//         <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
//           {description}
//         </p>
//       </div>
//     </Link>
//   );
// };
// import { LinkProps } from "next/link";
// interface HoveredLinkType extends LinkProps {
//   children: React.ReactNode;
// }
// export const HoveredLink = ({ children, ...rest }: HoveredLinkType) => {
//   return (
//     <Link
//       {...rest}
//       className="text-neutral-700 dark:text-neutral-200 hover:text-black "
//     >
//       {children}
//     </Link>
//   );
// };


// Utility function to concatenate class names conditionally
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// export const Menu = ({

//   setActive,
//   children,
//   isOpen,
// }: {
//   setActive: (item: string | null) => void;
//   children: React.ReactNode;
//   isOpen?: boolean;
// }) => {
//   return (
//     <nav
//       onMouseLeave={() => setActive(null)}
//       className={cn(
//         "transition-all duration-300 ease-in-out z-50",
//         "lg:relative lg:rounded-full lg:border lg:dark:bg-black lg:dark:border-white/[0.2] lg:bg-white lg:shadow-input",
//         "lg:flex lg:flex-row lg:space-x-4 lg:px-8 lg:py-6",
//         // Mobile styles
//         "fixed top-16 left-4 right-4 flex-col bg-white dark:bg-black rounded-xl shadow-lg lg:shadow-none lg:static",
//         isOpen ? "flex" : "hidden"
//       )}
//     >
//       <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 px-6 py-4 lg:p-0 w-full items-center">
//         {children}
//       </div>
//     </nav>
//   );
// };
import { cn } from "@/lib/utils";

export const Menu = ({
  setActive,
  children,
  isOpen,
  isScrolled,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isOpen?: boolean;
  isScrolled?: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "transition-all duration-300 ease-in-out z-30",
        // Desktop styles - dynamic based on scroll
        "lg:relative lg:rounded-full lg:border lg:flex lg:flex-row lg:space-x-4 lg:px-8 lg:py-6 lg:justify-center lg:items-center",
        // Glassy effect when scrolled
        isScrolled 
          ? "lg:border-white/20 lg:dark:border-white/10 lg:backdrop-blur-md lg:bg-white/10 lg:dark:bg-black/10 lg:shadow-xl" 
          : "lg:border-transparent lg:bg-transparent lg:shadow-none",
        // Mobile styles - always glassy
        "fixed top-16 left-4 right-4 backdrop-blur-md bg-white/10 dark:bg-black/10",
        "border border-white/20 dark:border-white/10 rounded-xl shadow-xl",
        isOpen ? "flex flex-col items-center space-y-4 py-6" : "hidden"
      )}
    >
      {children}
    </nav>
  );
};
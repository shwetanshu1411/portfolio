"use client";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 p-10 px-10 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} Shwetanshu Kumar. All rights reserved.
        </p>

        {/* LinkedIn Tag */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/shwetanshu-kumar-9089a1217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-gray-500"
          >
            <FaLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Instagram Tag */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/shwe_tanshukumar?igsh=YmVlYW50MGJ0dXBt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-gray-500"
          >
            <FaInstagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </div>

        {/* GitHub Tag */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/shwetanshu1411"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-gray-500"
          >
            <FaGithub className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

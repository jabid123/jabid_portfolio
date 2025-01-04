import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#465697] text-white p-10 md:p-12 flex flex-wrap justify-between items-center"
    >
      {/* Left Section */}
      <div className="mb-6 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <p className="text-sm md:text-xl font-light mt-2">
          Feel free to reach out!
        </p>
      </div>

      {/* Right Section */}
      <ul className="text-sm md:text-lg flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={24} />
          <a
            href="mailto:jabidjakler97@gmail.com"
            className="hover:text-gray-300 transition duration-300"
          >
            jabidjakler97@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <CiLinkedin size={24} />
          <a
            href="https://linkedin.com/in/jabidjakler"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            linkedin.com/in/jabidjakler
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub size={24} />
          <a
            href="https://github.com/jabid123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            github.com/jabid123
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

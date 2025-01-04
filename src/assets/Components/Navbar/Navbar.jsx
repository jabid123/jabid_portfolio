import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white fixed w-full shadow-md z-50">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <ul className="flex gap-6">
        
        
        
        <li>
          <a href="#about" className="hover:text-gray-400 transition duration-300">About</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-gray-400 transition duration-300">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400 transition duration-300">Projects</a>
        </li>
        <li>
          <a href="#footer" className="hover:text-gray-400 transition duration-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

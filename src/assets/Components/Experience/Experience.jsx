import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

const Experience = () => {
  return (
    <div id="experience" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Skills</h1>
      <div className="flex flex-wrap justify-center items-center">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl m-2">
          <FaHtml5 color="#E34F26" size={70} />
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl m-2">
          <FaCss3 color="#1572B6" size={70} />
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl m-2">
          <FaJs color="#F7DF1E" size={70} />
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl m-2">
          <FaReact color="#61DAFB" size={70} />
        </span>
      </div>
    </div>
  );
};

export default Experience;

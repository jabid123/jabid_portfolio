import React from 'react';
import AboutImg from '../../../assets/cropped_image.png';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div id="about" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img
            className="md:h-80 rounded-full object-cover object-center shadow-lg"
            src={AboutImg}
            alt=""
          />
          <ul>
          <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Background
                </h1>
                <p className="text-sm md:text-md leading-tight">
                "A passionate frontend developer with a background in design, I strive to create visually appealing and intuitive user experiences."
</p>
              </span>
              
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Philosophy                </h1>
                <p className="text-sm md:text-md leading-tight">
                "Believing that code is a form of art, I approach every project with creativity and a focus on functionality."  
                </p>            </span>
              
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Goals
                </h1>
                <p className="text-sm md:text-md leading-tight">
                "Eager to continuously learn and grow in the tech industry, I aim to contribute to innovative projects that make a positive impact."


</p>
              </span>
              
            </div>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

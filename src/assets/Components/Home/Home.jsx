import React from "react";
import './typing-effect.css'; 
import avatarImg from '../../../assets/6026368278189949785-removebg-preview-photoaidcom-cropped.png';

const Home = () => {
  return (
    <div className="text-white flex flex-col mt-20"> 
      <div className="flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
          <h1 className="text-3xl md:text-6xl font-bold flex loading-normal tracking-tighter overflow-hidden whitespace-nowrap border-r-2 border-white typing">
            <span className="typing-effect">Hi, I Am Jabid</span>
          </h1>
          <p className='text-sm tracking-tighter md:text-2xl mt-4'>
            "A passionate frontend developer dedicated to creating engaging and responsive web applications. With a keen eye for design and a commitment to user-centric solutions, I bring ideas to life through code."
          </p>
          
          <button 
            className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
            onClick={() => window.open("https://wa.me/918788327528?text=Hi%20Jabid,%20I%20would%20like%20to%20connect%20with%20you!", "_blank")}
          >
            Contact Me
          </button>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10">
          <img className='w-48 h-48 md:w-64 md:h-64 rounded-full' src={avatarImg} alt='Avatar' />
        </div>
      </div>
    </div>
  );
}

export default Home;

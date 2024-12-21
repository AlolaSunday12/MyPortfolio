import React, { useState } from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Profile from "../assets/Profilepic.jpg";

const Hero = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle 'Show more'

  const handleToggle = () => {
    setShowMore(!showMore); // Toggle state
  };

  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      {/* Left Section */}
      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-slate-300">I'm</p>
        <h1 className="text-6xl">Alola Sunday Joseph</h1>
        <hr />
        <p className="mt-10 text-xl text-slate-300 font-sans">
          A backend developer with a degree in Information Technology and training from ALX Africa.
          I specialize in Node.js and Express.js, focusing on building scalable web services.
          Passionate about problem-solving and continuous learning in the tech space.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-1/3 items-center ssm:w-fit">
        <img 
          src={Profile} 
          alt="Alola Sunday Joseph's portrait" 
          width={250} 
          height={250} 
          className="w-full rounded-full border-8 border-white" 
        />
      </div>

      {/* About Me Section */}
      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">About me</p>
        <p className="text-slate-300">
          I'm a self-driven backend developer with a degree in Information Technology
          from the National Open University of Nigeria (NOUN) and certified training
          from ALX Software Engineering.
        </p>

        {/* Conditionally Render Additional Content */}
        {showMore && (
          <p className="text-slate-300 mt-3">
            Proficient in backend development technologies with strong problem-solving skills 
            and hands-on experience building scalable applications. Passionate about delivering 
            high-quality software solutions.
          </p>
        )}

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="bg-white text-gray-950 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"
          aria-expanded={showMore} // Accessibility
        >
          {showMore ? "Show less" : "Show more..."}
        </button>

        {/* Social Media Icons */}
        <div className="flex mt-5 space-x-4 cursor-pointer">
          <a href="https://www.facebook.com/alola.sundayjoseph?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </a>
          <a href="https://x.com/FemiGeo63489636?t=DGN3c0JvJufJQFboqyjbLg&s=09" target="_blank" rel="noopener noreferrer">
            <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </a>
          <a href="https://www.instagram.com/sunnyjose1234/profilecard/?igsh=MWlzZ2c4djVwMm12dQ==" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </a>
          <a href="http://www.linkedin.com/in/sunny-jose-162609262" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

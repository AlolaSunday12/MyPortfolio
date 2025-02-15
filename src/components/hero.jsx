import React, { useState } from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Profile from "../assets/Profilepic.jpg";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="flex flex-col lg:flex-row justify-around items-center p-5 lg:p-10 space-y-10 lg:space-y-0 text-white">
      <div className="w-full lg:w-1/3 text-center lg:text-left px-5">
        <p className="text-2xl sm:text-4xl mb-3 text-slate-300">I'm</p>
        <h1 className="text-3xl sm:text-6xl">Alola Sunday Joseph</h1>
        <hr className="my-3" />
        <p className="mt-5 text-sm sm:text-base text-slate-300 font-sans">
        I am a backend developer with a degree in Information Technology and specialized training
        from ALX Africa. With proficiency in Node.js/nestjs and Express.js, I excel in developing
        scalable and efficient web services to meet diverse technical needs.
        </p>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src={Profile}
          alt="Alola Sunday Joseph's portrait"
          className="w-[150px] sm:w-[200px] lg:w-[250px] h-[150px] sm:h-[200px] lg:h-[250px] rounded-full border-4 sm:border-8 border-white"
        />
      </div>

      <div className="w-full lg:w-1/3 text-center lg:text-left px-5">
        <p className="text-2xl sm:text-4xl mb-4">About me</p>
        <p className="text-sm sm:text-base text-slate-300">
        I am a self-driven backend developer with a degree in Information Technology and
        certified training from ALX Software Engineering.
        </p>

        {showMore && (
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Proficient in backend development technologies, I bring strong problem-solving
            skills and hands-on experience in building scalable applications. Passionate about
            delivering high-quality and impactful software solutions.
          </p>
        )}

        <button
          onClick={handleToggle}
          className="bg-white text-gray-950 px-5 sm:px-10 py-2 my-3 rounded-full hover:bg-slate-300 hover:text-black"
          aria-expanded={showMore}
        >
          {showMore ? "Show less" : "Show more..."}
        </button>

        <div className="flex flex-wrap justify-center lg:justify-start mt-5 gap-4">
          <a href="https://www.facebook.com/alola.sundayjoseph?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <BsFacebook size={50} className="border-2 sm:border-4 hover:border-stone-950 rounded-full" />
          </a>
          <a href="https://x.com/FemiGeo63489636?t=DGN3c0JvJufJQFboqyjbLg&s=09" target="_blank" rel="noopener noreferrer">
            <BsTwitter size={50} className="border-2 sm:border-4 hover:border-stone-950 rounded-full" />
          </a>
          <a href="https://www.instagram.com/sunnyjose1234/profilecard/?igsh=MWlzZ2c4djVwMm12dQ==" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={50} className="border-2 sm:border-4 hover:border-stone-950 rounded-full" />
          </a>
          <a href="http://www.linkedin.com/in/sunny-jose-162609262" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={50} className="border-2 sm:border-4 hover:border-stone-950 rounded-full" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import App1 from "../assets/app1.jpg";
import App2 from "../assets/app2.jpg";
import App3 from "../assets/app3.jpg";
import App4 from "../assets/png6.jpg";

const projects = [
  {
    title: "Book Management API",
    image: App1,
    link: "https://github.com/AlolaSunday12/book-nestjs.git",
    description:
      "A secure and efficient backend for managing books, enabling users to perform CRUD operations with maximum security.",
  },
  {
    title: "Blog App",
    image: App2,
    link: "https://github.com/AlolaSunday12/Blog-App",
    description:
      "This is a blog App designed for writers, thinkers, and storytellers to share their ideas, experiences, and expertise with the world.",
  },
  {
    title: "Commerce",
    image: App3,
    link: "https://github.com/AlolaSunday12/comm-backend.git",
    description:
      "This is an online shop designed for convenient and secure shopping experiences.",
  },
  {
    title: "GoogleAuth",
    image: App4,
    link: "https://github.com/AlolaSunday12/GoogleAuth.git",
    description:
      "Google Auth enables secure login using Google accounts via OAuth 2.0, eliminating the need for new passwords.",
  },
];

export default function Project() {
  return (
    <div id="projects" className="bg-sky-800 p-10 m-5 lg:m-10 lg:p-10 max-w-full">
      <div className="grid justify-items-center mb-5 lg:mb-10">
        <h1 className="text-2xl lg:text-3xl text-white mt-5">Projects</h1>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse p-5">
              <div className="flex flex-col items-center text-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full"
                />
                <div className="mt-4">
                  <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {project.title}
                  </h2>
                  <a href={project.link} className="text-indigo-500 hover:underline">
                    View Project
                  </a>
                  <p className="mt-2 text-slate-500">{project.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

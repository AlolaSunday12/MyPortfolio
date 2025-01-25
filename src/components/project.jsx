import React from 'react';
import App1 from '../assets/app1.jpg';
import App2 from '../assets/app2.jpg';
import App3 from '../assets/app3.jpg';
import App4 from '../assets/png6.jpg';

export default function Project() {
  return (
    <>
    
      <div id="projects" className="bg-sky-800 p-10 m-5 lg:m-10 lg:p-10 max-w-full">
        <div className="grid justify-items-center mb-5 lg:mb-10">
          <h1 className="text-2xl lg:text-3xl text-white mt-5">Projects</h1>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="flex flex-col lg:flex-row">
                <div className="p-5 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Commerce
                  </div>
                  <a
                    href="https://github.com/AlolaSunday12/comm-backend.git"
                    className="text-indigo-500 hover:underline"
                  >
                    View Project
                  </a>
                  <p className="mt-2 text-slate-500">
                    This is an online-shop design for convenient and secure shopping
                    experiences.
                  </p>
                </div>
                <div className="flex-1 p-5">
                  <img
                    src={App1}
                    alt="project1"
                    className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-5">
                  <img
                    src={App2}
                    alt="project2"
                    className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full"
                  />
                </div>
                <div className="p-5 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Blog App
                  </div>
                  <a
                    href="https://github.com/AlolaSunday12/Blog-App"
                    className="text-indigo-500 hover:underline"
                  >
                    View Project
                  </a>
                  <p className="mt-2 text-slate-500">
                    This is a blog App designed for writers, thinkers, and storytellers to
                    share their ideas, experiences, and expertise with the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="flex flex-col lg:flex-row">
                <div className="p-5 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    GoogleAuth
                  </div>
                  <a
                    href="https://github.com/AlolaSunday12/GoogleAuth.git"
                    className="text-indigo-500 hover:underline"
                  >
                    View Project
                  </a>
                  <p className="mt-2 text-slate-500">
                  Google Auth enables secure login using Google accounts via OAuth 2.0,
                  eliminating the need for new passwords.
                  </p>
                </div>
                <div className="flex-1 p-5">
                  <img
                    src={App3}
                    alt="project3"
                    className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-5">
                  <img
                    src={App4}
                    alt="project4"
                    className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full"
                  />
                </div>
                <div className="p-5 flex-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    ToDo App
                  </div>
                  <a
                    href="https://github.com/AlolaSunday12/TODO-App"
                    className="text-indigo-500 hover:underline"
                  >
                    View Project
                  </a>
                  <p className="mt-2 text-slate-500">
                    A ToDo App designed to organize tasks and boost productivity. It features
                    simple and efficient task management tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

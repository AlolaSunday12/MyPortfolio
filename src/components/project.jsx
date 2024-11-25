import React from 'react'
import Project1 from '../assets/project1.jpg'
import Project2 from '../assets/project2.jpg'
import Project3 from '../assets/project3.jpg'
import Project4 from '../assets/project4.jpg'
//import project from "../assets/project_back.png"

export default function Project() {
  return (
    <>
       <div id="projects" className="bg-sky-800 m-20 max-w-full">
           <div className="grid justify-items-center m-10">
            <h1 className="text-3xl text-white mt-10">Projects</h1>
           </div>

           <div>
               <div className="grid grid-cols-2 gap-4 p-5">
                <div className="max-w-md max-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                  
                   <div className="md:flex">
                      <div className="p-8">
                         <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                            Hospital Managaement
                         </div>
                         <a href="https://github.com/AlolaSunday12/TODO-App" className="text-indigo-500 hover:underline">View Project</a>
                          <p className="mt-2 text-slate-500">
                          In publishing and graphic design, Lorem ipsum is a placeholder 
                          text commonly used to demonstrate the visual form of a document 
                          </p>
                      </div>
                       <div className="md:shrink-0 p-5 w-40 h-40">
                        <img src={Project1} alt="project1" className="w-full h-full rounded-full" />
                       </div>
                   </div>
                </div>
                <div className="max-w-md max-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                  
                  <div className="md:flex">
                  <div className="md:shrink-0 p-5 w-40 h-40">
                       <img src={Project2} alt="project1" className="w-full h-full rounded-full" />
                      </div>
                     <div className="p-8">
                        <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                           Blog App
                        </div>
                        <a href="https://github.com/AlolaSunday12/Blog-App" className="text-indigo-500 hover:underline">View Project</a>
                         <p className="mt-2 text-slate-500">
                         In publishing and graphic design, Lorem ipsum is a placeholder 
                         text commonly used to demonstrate the visual form of a document 
                         </p>
                     </div>
                      
                  </div>
               </div>
               </div>
               <hr/>
               <div className="grid grid-cols-2 gap-4 p-5">
                <div className="max-w-md max-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                  
                   <div className="md:flex">
                      <div className="p-8">
                         <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                            Human Managaement
                         </div>
                          <a href="https://github.com/AlolaSunday12/TODO-App" className="text-indigo-500 hover:underline">View Project</a>
                          <p className="mt-2 text-slate-500">
                          In publishing and graphic design, Lorem ipsum is a placeholder 
                          text commonly used to demonstrate the visual form of a document 
                          </p>
                      </div>
                       <div className="md:shrink-0 p-5 w-40 h-40">
                        <img src={Project3} alt="project1" className="w-full h-full rounded-full" />
                       </div>
                   </div>
                </div>
                <div className="max-w-md max-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                  
                  <div className="md:flex">
                  <div className="md:shrink-0 p-5 w-40 h-40">
                       <img src={Project4} alt="project1" className="w-full h-full rounded-full" />
                      </div>
                     <div className="p-8">
                        <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                           ToDo App
                        </div>
                        <a href="https://github.com/AlolaSunday12/TODO-App" className="text-indigo-500 hover:underline">View Project</a>
                         <p className="mt-2 text-slate-500">
                         In publishing and graphic design, Lorem ipsum is a placeholder 
                         text commonly used to demonstrate the visual form of a document 
                         </p>
                     </div>
                      
                  </div>
               </div>
               </div>
           </div>
       </div>
    </>
  )
};
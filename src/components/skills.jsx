import React from 'react';
import { SiNodedotjs, SiMongodb, SiNestjs } from 'react-icons/si';
import { BsGoogle, BsFacebook, BsGithub } from 'react-icons/bs';

export default function Skills() {
  return (
    <section id="skills" className="py-10 m-20 bg-sky-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <SiNodedotjs className="text-green-500 text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm md:text-lg">Node.js</span>
          </div>

          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
          <SiNestjs className="text-red-500 text-5xl mx-auto mb-2" />
          <span className="font-semibold text-sm md:text-lg">NestJS</span>
          </div>

          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <SiMongodb className="text-green-600 text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm md:text-lg">MongoDB</span>
          </div>

          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <BsGoogle className="text-red-500 text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm md:text-lg">OAuth (Google)</span>
          </div>

          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <BsFacebook className="text-blue-600 text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm md:text-lg">OAuth (Facebook)</span>
          </div>

          <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <BsGithub className="text-black text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm md:text-lg">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { SiNodedotjs, SiMongodb, SiNestjs } from 'react-icons/si';
import { BsGoogle, BsFacebook, BsGithub } from 'react-icons/bs';

export default function Skills() {
  return (
    <section id="skills" className="py-10 m-5 lg:m-10 bg-sky-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-white mb-6">Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white rounded shadow hover:animate-pulse transition">
            <SiNodedotjs className="text-green-500 text-4xl lg:text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm lg:text-lg">Node.js</span>
          </div>

          {/* Skill Item 2 */}
          <div className="p-4 bg-white rounded shadow hover:animate-pulse transition">
            <SiNestjs className="text-red-500 text-4xl lg:text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm lg:text-lg">NestJS</span>
          </div>

          {/* Skill Item 3 */}
          <div className="p-4 bg-white rounded shadow hover:animate-pulse transition">
            <SiMongodb className="text-green-600 text-4xl lg:text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm lg:text-lg">MongoDB</span>
          </div>

          {/* Skill Item 4 */}
          <div className="p-4 bg-white rounded shadow hover:animate-pulse transition">
            <BsGoogle className="text-red-500 text-4xl lg:text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm lg:text-lg">OAuth (Google)</span>
          </div>

          {/* Skill Item 5 */}
          <div className="p-4 bg-white rounded shadow hover:animate-pulse transition">
            <BsFacebook className="text-blue-600 text-4xl lg:text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm lg:text-lg">OAuth (Facebook)</span>
          </div>

          {/* Skill Item 6 */}
          <div className="p-4 bg-white rounded shadow hover:animate-pulse transition">
            <BsGithub className="text-black text-4xl lg:text-5xl mx-auto mb-2" />
            <span className="font-semibold text-sm lg:text-lg">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

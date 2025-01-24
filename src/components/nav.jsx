import React, { useState, useEffect } from 'react';
import { TbDatabaseExport } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);  // Close menu when resizing to desktop
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <div className="flex items-center justify-between bg-slate-800 px-5 py-4 lg:px-10 lg:py-4 lg:flex-row">
        {/* Logo Section */}
        <a
  href="#"
  className="text-white font-mono text-3xl sm:text-4xl md:text-5xl tracking-wider flex items-center cursor-default"
>
  <TbDatabaseExport className="mr-2 text-xl sm:text-2xl md:text-3xl ml-5" />
  <span className="text-lg sm:text-xl md:text-2xl">Myportfolio</span>
</a>


        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="#skills"
            className="text-white hover:bg-stone-300 hover:text-black rounded-full px-4 py-2 text-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:bg-stone-300 hover:text-black rounded-full px-4 py-2 text-lg"
          >
            Projects
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-stone-300 hover:text-black rounded-full px-4 py-2 text-lg"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose
              onClick={closeMenu}
              size={30}
              className="text-white cursor-pointer"
              aria-label="Close menu"
            />
          ) : (
            <HiMenuAlt1
              onClick={openMenu}
              size={30}
              className="text-white cursor-pointer"
              aria-label="Open menu"
            />
          )}
        </div>
      </div>

      {toggle && (
        <div
          className="bg-slate-800 top-0 left-0 w-full z-50 pt-6 pb-6 flex flex-col items-centre space-y-6"
          role="menu"
        >
          

          <ul className="w-full text-start space-y-6 ml-5">
            <li>
              <a
                href="#skills"
                className="text-white hover:bg-stone-300 hover:text-black rounded-full px-6 py-3 text-lg"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:bg-stone-300 hover:text-black rounded-full px-6 py-3 text-lg"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-stone-300 hover:text-black rounded-full px-6 py-3 text-lg"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;

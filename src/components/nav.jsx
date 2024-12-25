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
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center cursor-default">
            <TbDatabaseExport className="mr-1 sm:mr-2" />
            <span>Myportfolio</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <a href="#skills" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
            <a href="#projects" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
            <a href="/Resume.pdf" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
        Resume
      </a>
          </div>
          <div className="ssm:block lg:hidden">
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
      </div>

      {toggle && (
        <div className="ssm:block lg:hidden flex justify-between ml-10" role="menu">
          <ul>
            <li className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl mb-2 cursor-pointer">
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl mb-2 cursor-pointer">
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl mb-2 cursor-pointer">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
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

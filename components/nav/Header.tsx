"use client";

import { HiMenu, HiOutlineMenu, HiX } from "react-icons/hi";
import Social from "../menu/Social";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-4 sm:px-6 mx-auto py-8 bg-neutral-50">
      <nav className="lg:max-w-xl md:max-w-md mx-auto border-neutral-800 border-2 bg-white px-3 py-4 rounded-2xl shadow-[7px_7px_0_0] shadow-yellow-600">
        <div className="flex md:flex-row items-center justify-center">
          {/* <div className="flex flex-row gap-8">
            <b>Kim Darren</b>
          </div> */}
          <div className="space-x-8 hidden md:block">
            <ul className="md:flex hidden list-none m-0 p-0">
              <li className="h-full">
                <a
                  href="/"
                  className="text-md text-black font-bold flex h-full items-center relative px-3 "
                >
                  About
                </a>
              </li>
              <li className="h-full">
                {" "}
                <a
                  href="/"
                  className="text-md text-black font-bold flex h-full items-center relative px-3  hover:text-sky-500"
                >
                  Projects
                </a>
              </li>
              <li className="h-full">
                <a
                  href="/"
                  className="text-md text-black font-bold flex h-full items-center relative px-3  hover:text-sky-500"
                >
                  Experience
                </a>
              </li>
              <li className="h-full">
                <a
                  href="/"
                  className="text-md text-black font-bold flex h-full items-center relative px-3  hover:text-sky-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <Social /> */}
          <div className="flex items-end gap-56 justify-end md:hidden my-2">
          <HiX color="bg-neutral-800" size={30} />
          <button
            onClick={toggleMenu}
            type="button"
          >
            {isOpen ? <HiX color="bg-neutral-800" size={30} /> : <HiMenu color="bg-neutral-800" size={30}/>}
          </button>
        </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-32 w-full left-0 right-0 overflow-hidden px-4 py-2 z-50 transition-all transform duration-500 ease-in-out">
            <div className="border-2 border-neutral-800 rounded-xl flex flex-col items-start py-8 px-6 overflow-hidden bg-neutral-100 z-999">
              <div className="">
                <a
                  href="#"
                  className="block mb-4 text-neutral-800 hover:text-sky-500  rounded-md text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block mb-4 text-neutral-800 hover:text-sky-500  rounded-md text-lg font-bold"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block mb-4 text-neutral-800  hover:text-sky-500  rounded-md text-lg font-bold"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block text-neutral-800 hover:text-sky-500  rounded-md text-lg font-bold"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

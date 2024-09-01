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
    <header className="w-full px-4 sm:px-6 mx-auto bg-yellow-400 border-b border-stone-400 border-opacity-1 border z-999 fixed">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex md:flex-row justify-between items-center">
          <div className="flex flex-row gap-8">
            <b>Kim Darren</b>
          </div>
          <div className="space-x-8 hidden md:block">
            <ul className="md:flex hidden list-none m-0 p-0">
              <li className="h-full">
                <a
                  href="/"
                  className="text-sm font-medium flex h-full items-center relative px-3  mdlg:p-4 opacity-70 hover:opacity-100"
                >
                  About
                </a>
              </li>
              <li className="h-full">
                {" "}
                <a
                  href="/"
                  className="text-sm font-medium flex h-full items-center relative px-3  mdlg:p-4 opacity-70 hover:opacity-100"
                >
                  Projects
                </a>
              </li>
              <li className="h-full">
                <a
                  href="/"
                  className="text-sm font-medium flex h-full items-center relative px-3  mdlg:p-4 opacity-70 hover:opacity-100"
                >
                  Experience
                </a>
              </li>
              <li className="h-full">
                <a
                  href="/"
                  className="text-sm font-medium flex h-full items-center relative px-3 mdlg:p-4 opacity-70 hover:opacity-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Social />
          <div className="space-x-8 block md:hidden mt-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none focus:text-white"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
              <div className="space-y-6 text-center">
                <a
                  href="#"
                  className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
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

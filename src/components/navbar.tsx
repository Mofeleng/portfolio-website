"use client"
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-24 flex flex-col justify-center items-center">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          <div className="text-xl font-semibold">Mofeleng Mokgope</div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none hover:cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`md:flex space-x-8 ${
              isOpen ? 'block' : 'hidden'
            } absolute md:static top-24 left-0 w-full bg-white md:bg-transparent md:w-auto md:space-y-0 space-y-4 p-4 md:p-0`}
          >
            <li>
              <a href="./#projects" className="hover:font-bold">
                Work
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mofeleng"
                className="hover:font-bold"
                target="blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="hover:font-bold bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent rounded-sm"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

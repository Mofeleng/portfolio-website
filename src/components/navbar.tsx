import React from 'react'

export default function Navbar() {
  return (
    <nav className='h-24 flex flex-col justify-center items-center'>
        <div className="container mx-auto px-8">
            <div className="flex justify-between items-center h-24">
                <div className="text-xl font-semibold">Mofeleng Mokgope</div>
                <ul className="flex space-x-8">
                    <li><a href="./#projects" className="hover:font-bold">Work</a></li>
                    <li><a href="https://github.com/Mofeleng" className="hover:font-bold" target='blank'>Github</a></li>
                    <li><a href="#resume" className="hover:font-bold bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent rounded-sm p-3">Resume</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

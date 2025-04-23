import React from 'react'

export default function Navbar() {
  return (
    <nav className='h-24 flex flex-col justify-center items-center'>
        <div className="container mx-auto px-8">
            <div className="flex justify-between items-center h-24">
                <div className="text-xl font-semibold">Mofeleng Mokgope</div>
                <ul className="flex space-x-8">
                    <li><a href="/" className="hover:font-bold">Work</a></li>
                    <li><a href="./#about" className="hover:font-bold">About</a></li>
                    <li><a href="#resume" className="hover:font-bold bg-blue-400 rounded-sm p-3 text-white">Resume</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

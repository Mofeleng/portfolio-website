import { Mail, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="bg-[#0e0e0e] py-20">
        <div className="max-w-5xl w-full mx-auto flex flex-col px-8 justify-center items-center">
            <div className='space-y-10 text-center'>
                <h2 className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent'>Thanks for visiting</h2>
                <div className="text-gray-400  space-y-2">
                <p>
                        <Link href="https://www.linkedin.com/in/mofeleng-mokgope-68b556289/" target="_blank" className='hover:underline'>
                            <User className='w-5 h-5 inline-block mr-2'/>
                            LinkedIn
                        </Link>
                    </p>
                    <p>
                        <Link href="mailto:mofelengmokgope@gmail.com" className='hover:underline'>
                            <Mail className='w-5 h-5 inline-block mr-2'/>   
                            mofelengmokgope@gmail.com
                        </Link>
                    </p>
                </div>
                <div className="text-gray-400  space-y-2">
                <p>
                        Made with <span className='text-red-500'>❤</span> by Mofeleng Mokgope
                    </p>
                    <p>
                        copyright &copy; {new Date().getFullYear()} Mofeleng Mokgope. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

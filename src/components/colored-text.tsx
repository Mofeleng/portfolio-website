import React from 'react'

export default function ColoredText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
        {children}
    </span>
  )
}

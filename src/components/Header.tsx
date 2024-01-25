import React from 'react'

export default function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 text-white bg-slate-800 h-[82px] shadow-lg">
      <div className="w-[700px] mx-auto flex items-center h-[82px]">
        <a href="/" className="text-white">
          <b>Florin Toader</b>&nbsp;| Welcome to my professional abode on the internet.
        </a>
      </div>
    </div>
  )
}

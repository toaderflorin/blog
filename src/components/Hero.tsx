import React from 'react'
import './Hero.css'

export default function HeaderNew() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center text-slate-100 rounded relative scr-2 shadow-[0_5px_30px_-15px_rgba(0,0,0,1)] hero">
      <div className="shadow-[0_0_5px_0_rgba(0,0,0,1) inner"></div>
      <div className="bar">
        <a href="https://www.linkedin.com/in/florin-toader/">
          <img src="/img/in2.png" className="w-[24px]" />
        </a>
      </div>

      <div className="flex flex-col items-center">
        <div style={{ fontSize: '34px' }}>Florin Toader</div>
        <div className="text-slate-400">Don't be dogmatic.</div>
      </div>
    </div>
  )
}

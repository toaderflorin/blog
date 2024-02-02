import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 text-white bg-slate-800 h-[82px] shadow-lg mb-5">
      <div className="w-[700px] mx-auto flex items-center h-[82px] header">
        <img src="/img/me.jpeg" style={{ width: '40px', borderRadius: '50%', marginRight: '5px' }} />
        <a href="/" className="text-white">
          <b>Florin Toader</b>
        </a>
      </div>
    </div>
  )
}

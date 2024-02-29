import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 text-white  h-[82px] shadow-lg mb-5" style= {{ background: 'radial-gradient(at top center, rgba(47, 49, 58, 0.94), rgba(26, 27, 35, 0.94))', fontSize: '16px' }}>
      <div className="w-[700px] mx-auto flex items-center h-[82px] header">
        <img src="/img/me.jpeg" style={{ width: '40px', borderRadius: '50%', marginRight: '5px' }} />
        <a href="/" className="text-white">
          Florin Toader
        </a>
      </div>
    </div>
  )
}

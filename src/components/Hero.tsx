import React from 'react'

export default function HeaderNew() {
  return (
    <div
      className="h-[600px] w-[1000px] mx-auto flex flex-col items-center justify-center text-slate-100 rounded relative scr-2 shadow-[0_5px_30px_-15px_rgba(0,0,0,1)]"
      style={{ background: 'radial-gradient(at top left, rgba(47, 49, 58, 0.97), rgba(26, 27, 35, 0.97))', marginTop: '30px', borderRadius: '7px', overflow: 'clip', backdropFilter: 'blur(4px)' }}>

      <div className="shadow-[0_0_5px_0_rgba(0,0,0,1)" style={{ backgroundImage: 'url(/img/me.jpg)', backdropFilter: 'blur(5px)',  height: '120px', width: '120px', backgroundSize: 'contain', marginBottom: '10px', borderRadius: '50%'}}></div>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '64px', background: 'rgba(200, 200, 200, 0.04)', zIndex: 100 }}></div>

      <div className="flex flex-col items-center">
        <div style={{ fontSize: '34px' }}>Florin Toader</div>
        <div>Welcome to my professional abode on the internet.</div>
      </div>
    </div>
  )
}

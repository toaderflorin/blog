import React from 'react'

export default function HeaderNew() {
  return (
    <div className="h-[100%] w-[100%] flex flex-col items-center justify-center" style={{ background: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', height: '100%' }}>
      <div>
        {/* <div style={{ background: 'url(/img/fib.png)', width: '72px', height: '72px', backgroundSize: 'contain', borderRadius: '10px'  }}></div> */}
        <div className="text-xl">Florin Toader</div>
        <div>Welcome to my professional abode on the internet.</div>
      </div>
    </div>
  )
}

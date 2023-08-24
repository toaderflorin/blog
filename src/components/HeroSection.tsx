import React from 'react'
import './HeroSection.css'

export default function Home() {
  return (
    <>
      <div id="header-container"></div>

      <div style={{ width: '850px', margin: 'auto', color: 'white', marginTop: '20px' }}>Abcd | Xyz</div>
      <div style={{ display: 'flex', justifyContent: 'center', height: '500px' }}>
        <div
          style={{ backdropFilter: 'blur(3px)', height: '550px', boxShadow: ' 0px 4px 30px -10px rgba(0, 0, 0, 1)' }}>
          <div className="test">
            <div
              style={{
                width: '650px',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '40px', color: '#ff164c' }}>Florin Toader</div>
                <div>Welcome to my abode</div>
                <div>Welcome to my abode</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import './HeroSectionInner.css'

export default function HeroSectionInner() {
  return (
    <div id="header-container-card">
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
          </div>
        </div>
      </div>
    </div>
  )
}

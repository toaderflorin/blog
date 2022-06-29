import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div id="header-container">
      <div id="header">
        <div style={{ color: '#555' }}>
          <div>
            <b style={{ fontSize: '70px' }}>
              <span>florin</span><span style={{ color: 'red' }}>toader</span>
            </b>
          </div>
          <div id="lower">
            <div />
            <div style={{ color: 'black', borderLeft: '3px solid red', padding: '0 20px' }}>
              Welcome to my professional abode on the internet.            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

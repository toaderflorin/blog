import React from 'react'
import './HeroSection.css'

export default function Home() {
  return (
    <div id="header-container">
      <div id="header">
        <div
          style={{
            width: '830px',
            padding: '35px',
            borderRadius: '5px'
          }}>
          <div style={{ color: '#555' }}>
            <b style={{ fontSize: '70px' }}>
              <span>florin</span>
              <b style={{ color: '#ff3355' }}>toader</b>
            </b>

            <div id="lower">
              <div />
              <div
                style={{
                  borderLeft: '3px solid #ff2244',
                  padding: '0 20px',
                  color: 'black'
                }}>
                Welcome to my professional abode on the internet.
              </div>

              <div style={{ color: 'white' }}>
                There is As great as the development experience for something like Svelte is, when you start out,
                nothing beats the frustration of a missing library. You might love functional languages and think that
                using Elixir for your next game changing product is awesome, until you find how hard it is to find
                experienced front-end developers for it, that can jump right into the code at a moment's notice. We've
                all seen it. Don't be dogmatic, be practical instead.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

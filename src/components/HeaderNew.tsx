import React from 'react'

export default function HeaderNew() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        background: 'linear-gradient(-45deg, #000, #666)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.93,
        borderRadius: '5px'
      }}>
      <div
        style={{
          width: '300x',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <div style={{ fontSize: '40px', color: '#ff164c' }}>Florin Toader</div>
        <div>Welcome to my professional abode on the internet.</div>
      </div>
    </div>
  )
}

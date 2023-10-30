import React from 'react'

export default function HeaderNew() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        background: 'linear-gradient(-45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.93))',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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

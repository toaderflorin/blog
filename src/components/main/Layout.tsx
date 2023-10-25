import * as React from 'react'

export default function Layout(props) {
  const { location, children } = props
  let header
  
  return (
    <div>
      <header className="global-header">{header}</header>
      <main>
        {children}
      </main>
      {/* <footer style={{ backgroundColor: '#eee'}}>
        Blaakjskas
      </footer> */}
    </div>
  )
}

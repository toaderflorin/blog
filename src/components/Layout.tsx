import * as React from 'react'

export default function Layout(props) {
  const { children } = props
  let header
  
  return (
    <div>
      <header className="global-header">{header}</header>
      <main>
        {children}
      </main>      
    </div>
  )
}

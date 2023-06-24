// import "@fontsource/poppins" 
import * as React from 'react'

export default function Layout(props) {
  const { location, children } = props
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
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

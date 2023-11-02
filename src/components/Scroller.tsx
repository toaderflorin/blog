import React, { useEffect } from 'react'

export default function Scroller() {
  function onScroll() {
    const scrollPosition = window.scrollY
    const viewportHeight = window.visualViewport ? window.visualViewport.height : 0
    const documentHeight = document.documentElement.scrollHeight
    const scrollPercentage = (scrollPosition / (documentHeight - viewportHeight)) * 100
    const scroller = document.getElementById('scroller')

    if (scroller && scroller.style) {
      scroller.style.width = scrollPercentage + '%'
    }
  }

  function onCleanup() {
    window.removeEventListener('scroll', onScroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return onCleanup
  }, [])

  return (
    <div id="scroller" className="fixed h-[3px] left-0 top-0 bg-[color:var(--color-primary)]"></div>
  )
}


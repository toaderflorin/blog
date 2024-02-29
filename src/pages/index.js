import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Main from '../components/Main'
import Scroller from '../components/Scroller'
import Hero from '../components/Hero'
// import Img from "gatsby-image"

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.nodes

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])

  function onScroll() {
    const scrollPosition = window.scrollY

    const actual = (scrollPosition < 500 ? scrollPosition : 500) / 500
    const scale = 1 + actual * 0.3
    const el = document.getElementById('back12')

    if (el && el.style) {
      el.style.transform = `scale(${scale})`
      el.style.opacity = 1 - actual
    }
  }

  function onImageLoad() {
    const headx = document.getElementById('headx')
    headx.classList.add('headx')
  }

  return (
    <div>
      <div id="back12" style={{ height: '550px', position: 'fixed', overflow: 'clip', zIndex: 0, top: 0 }}>
        <img id="headx" src="/img/p1.webp" onLoad={onImageLoad} style={{ animation: 'abc 1s linear' }}/>
        {/* <Img src="/img/p2.webp" /> */}
      </div>

      <Main posts={posts} />
      <div style={{ left: 0, right: 0, top: 0, position: 'absolute', zIndex: 1000 }}>
        <Hero />
      </div>
      <Scroller />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          icon
          description
        }
      }
    }
  }
`

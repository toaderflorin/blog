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
      <div className="hero-background" style={{ width: '100%' }}>
        <div className="hero-inner"  style={{ width: '100%' }}>
        {/* <img src="/img/p1.webp" className="headx" loading='lazy' width: "100%" /> */}
        </div>
      </div>

      <Main posts={posts} />

      <div style={{ left: 0, right: 0, top: 0, position: 'absolute', zCIndex: 1000 }}>
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


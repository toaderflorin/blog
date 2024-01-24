import React from 'react'
import { graphql } from 'gatsby'
import Main from '../components/Main'
import Scroller from '../components/Scroller'
import Hero from '../components/Hero'

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <div>
      <div className="bg-[url(/img/bb.jpg)]  bg-cover scroll-watcher z-0"></div>
      <Main posts={posts} />
      <div style={{ height: '400px', left: 0, right: 0, top: 0, position: 'absolute', zIndex: 1000 }}>
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

import React from 'react'
import { graphql } from 'gatsby'
import HeroSection from '../components/header/HeroSection'
import Main from '../components/main/Main'

export default function Index({ data, location }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <div>
      <HeroSection />
      <Main posts={posts} />
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

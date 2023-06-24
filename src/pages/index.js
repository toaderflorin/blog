import React from 'react'
import { graphql } from 'gatsby'
import HeroSection from '../components/HeroSection'
import Main from '../components/Main'

export default function Index({ data, location }) {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <div>
        No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
        "gatsby-source-filesystem" plugin in gatsby-config.js).
      </div>
    )
  }

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

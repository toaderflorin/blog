import React, { useRef } from 'react'
import { graphql, navigate } from 'gatsby'
import Home from '../components/HeroSection'
import ArticleCard from '../components/ArticleCard'

export default function BlogIndex({ data, location }) {
  const posts = data.allMarkdownRemark.nodes
  const headerRef = useRef(null)

  if (posts.length === 0) {
    return (
      <div>
        No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
        "gatsby-source-filesystem" plugin in gatsby-config.js).
      </div>
    )
  }

  function navigateToPost(url) {
    navigate(url)
  }

  return (
    <div>
      <div ref={headerRef}>
        <Home />
      </div>
      <div
        style={{
          backgroundColor: 'white',
          boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.3)'
        }}>
        <div
          style={{
            margin: '130px auto 0 auto',
            width: '650px',
            marginTop: '50vh',
            backgroundColor: 'white'
          }}>
          <br />
          <p style={{ fontSize: '11pt' }}></p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '-10px' }}>
            {posts.map((post) => {
              return <ArticleCard post={post} />
            })}
          </div>
        </div>
      </div>
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

import React from 'react'
import { graphql } from 'gatsby'
import Main from '../components/main/Main'
import HeaderNew from '../components/HeaderNew'

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'url(/img/an_bk.jpg)',
          backgroundAttachment: 'fixed'
        }}>
        <div
          style={{
            height: '650px',
            width: '1200px',
            marginTop: '40px',
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 0 35px 0 rgba(0,0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
            zIndex: 100,
            borderRadius: '5px'
          }}>
          <HeaderNew />
        </div>
        <div style={{ marginTop: '-50px' }}>
          <Main posts={posts} />
        </div>
      </div>
    <div style={{ position: 'fixed', height: '3px', left: 0, right: 0, top: 0, zIndex: 10000, background: 'red' }}>
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

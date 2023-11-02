import React from 'react'
import { graphql } from 'gatsby'
import Main from '../components/Main'
import Hero from '../components/Hero'
import Scroller from '../components/Scroller'

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <div>
      <div className="flex flex-col bg-[url(/img/an_bk.jpg)] bg-fixed bg-cover">
        <div className="w-[1000px] h-[600px] mt-[40px] mx-auto rounded-sm z-50 shadow-2xl blur-md">
          <div className="h-[100%]">
            <Hero />
          </div>
        </div>
        <div style={{ marginTop: '-50px' }}>
          <Main posts={posts} />
        </div>
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

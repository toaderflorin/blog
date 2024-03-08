import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Scroller from '../components/Scroller'
import Head from '../components/Head'
import './BlogPost.css'

export default function BlogPostTemplate(props) {
  const { data, location } = props
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Header />
      <Head post={post} location={location} />
      <div className="h-[50px] bg-red-400"></div>
      <article className="w-[700px] mx-auto pt-[10px] mb-[20px] mt-[150px] post-container" itemScope>
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p >
            <i>{post.frontmatter.date}</i>
          </p>
        </header>
        <section style={{ fontSize: '16.3px'}} dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
      </article>
      <Scroller />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
        cells
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

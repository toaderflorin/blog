import React, { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Header from '../components/Header'

export default function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes



  const [showPosts, setShowPosts] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // alert('!')
      setShowPosts(true)
    })
  }, [])

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <div>
      {/* {!showPosts && (
        <Header />
      )} */}

      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <article
              key={post.fields.slug}
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article">
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section style={{ padding: 0 }}>
                <img src={post.frontmatter.icon} style={{ float: 'left', marginRight: '7px', width: '64px', height: '64px', marginTop: '6px' }} />
                <span
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          )
        })}
      </Layout>
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

import React, { useState, useEffect, useRef } from 'react'
import { graphql, navigate } from 'gatsby'
import Home from '../components/Home'

export default function BlogIndex({ data, location }) {
  const posts = data.allMarkdownRemark.nodes
  const headerRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.className = 'trans'
        } 
        // else if (window.scrollY === 0) {
        //   headerRef.current.className = 'rex'
        // }
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div>
        {/* <Seo title="All posts" /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
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
      <div>
        <div style={{ margin: '130px auto 0 auto', width: '700px' }}>
          <h1 style={{ marginLeft: '25px' }}>Blog</h1>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <article
                key={post.fields.slug}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
                onClick={() => navigateToPost(post.fields.slug)}>
                <header>
                  <h2>
                    <span itemProp="headline">{title}</span>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section style={{ padding: 0 }}>
                  <img src={`${post.fields.slug}/${post.frontmatter.icon}`} className="article-icon" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  FLORIN
                  <p style={{ fontWeight: 'bold', fontSize: '14px', color: 'black' }}>Read more..</p>
                </section>
              </article>
            )
          })}
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

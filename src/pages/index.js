import React, { useRef } from "react"
import { graphql, navigate } from "gatsby"
import Home from "../components/HeroSection"

export default function BlogIndex({ data, location }) {
  const posts = data.allMarkdownRemark.nodes
  const headerRef = useRef(null)

  if (posts.length === 0) {
    return (
      <div>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
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
          backgroundColor: "white",
          boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            margin: "130px auto 0 auto",
            width: "830px",
            marginTop: "66vh",
            backgroundColor: "white",
          }}
        >
          <br />
          <article>
            <p>
              There is As great as the development experience for something like
              Svelte is, when you start out, nothing beats the frustration of a
              missing library. You might love functional languages and think
              that using Elixir for your next game changing product is awesome,
              until you find how hard it is to find experienced front-end
              developers for it, that can jump right into the code at a moment's
              notice. We've all seen it. Don't be dogmatic, be practical
              instead.
            </p>

            {/* <h1>READING LIST</h1> */}
          </article>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <article
                  key={post.fields.slug}
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                  onClick={() => navigateToPost(post.fields.slug)}
                >
                  <header>
                    <h2>
                      <span itemProp="headline">{title}</span>
                    </h2>
                    <div
                      style={{
                        fontSize: "13.5px",
                        color: "#555",
                        marginTop: "5px",
                      }}
                    >
                      {post.frontmatter.date}
                    </div>
                  </header>
                  <section style={{ padding: 0, marginTop: "10px" }}>
                    <img
                      src={`${post.fields.slug}/${post.frontmatter.icon}`}
                      className="article-icon"
                    />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      Read more..
                    </p>
                  </section>
                </article>
              )
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

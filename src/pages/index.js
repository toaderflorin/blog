import React, { useRef } from "react"
import { graphql, navigate } from "gatsby"
import Home from "../components/Home"

export default function BlogIndex({ data, location }) {
  const posts = data.allMarkdownRemark.nodes
  const headerRef = useRef(null)

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
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1)",
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
                  <div style={{ fontSize: "13.5px", color: '#555', marginTop: '5px' }}>
                    {post.frontmatter.date}
                  </div>
                </header>
                <section style={{ padding: 0, marginTop: '10px' }}>
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

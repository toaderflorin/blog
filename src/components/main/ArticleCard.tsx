import React from 'react'
import './ArticleCard.css'
import { navigate } from 'gatsby'

type Props = {
  post: any
}

export default function ArticleCard(props: Props) {
  const { post } = props
  const title = post.frontmatter.title || post.fields.slug

  function navigateToPost(url) {
    navigate(url)
  }

  return (
    <article key={post.fields.slug} className="post-list-item" onClick={() => navigateToPost(post.fields.slug)}>
      <header>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</span>
        <div
          style={{
            fontSize: '13px',
            color: '#777',
            marginTop: '5px'
          }}>
          {post.frontmatter.date}
        </div>
      </header>

      <section style={{ padding: 0, marginTop: '10px' }}>
        <img src={`${post.fields.slug}/${post.frontmatter.icon}`} className="article-icon" />
        <span
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt
          }}
          itemProp="description"
        />
        <p className="post-read-more">Read more...</p>
      </section>
    </article>
  )
}

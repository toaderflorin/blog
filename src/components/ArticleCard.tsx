import React from 'react'
import './ArticleCard.css'

type Props = {
  post: any
  navigateToPost: any
}

export default function ArticleCard(props: Props) {
  const { post, navigateToPost } = props
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
        <div
          style={{
            fontSize: '13.5px',
            color: '#555',
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
        <p
          style={{
            fontWeight: '600',
            fontSize: '14.5px',
            color: 'black',
            marginTop: '5px'
          }}>
          Read more..
        </p>
      </section>
    </article>
  )
}

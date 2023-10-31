import React from 'react'
import { navigate } from 'gatsby'

export type Post = {
  frontmatter: {
    title: string
    description: string
    date: string
    icon: string
  },
  fields: {
    slug: string
  }
  excerpt: string
}

type Props = {
  post: Post
}

export default function ArticleCard(props: Props) {
  const { post } = props
  const title = post.frontmatter.title || post.fields.slug

  function navigateToPost(url: string) {
    navigate(url)
  }

  return (
    <article
      key={post.fields.slug}
      className="cursor-pointer p-5 hover:drop-shadow-2xl"
      onClick={() => navigateToPost(post.fields.slug)}>
      <header>
        <span className="text-xl">{title}</span>
        <div>{post.frontmatter.date}</div>
      </header>

      <section className="mt-3">
        <img src={`${post.fields.slug}/${post.frontmatter.icon}`} className="article-icon" />
        <span
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt
          }}
          itemProp="description"
        />
        <p className="text-[color:var(--color-primary)] text-sm">Read more...</p>
      </section>
    </article>
  )
}

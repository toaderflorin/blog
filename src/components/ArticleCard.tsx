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
      className="cursor-pointer p-6 hover:shadow-[0_0_40px_-15px_rgba(0,0,0,0.2)]"
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

import React from 'react'
import { navigate } from 'gatsby'

export type Post = {
  frontmatter: {
    title: string
    description: string
    date: string
    icon: string
  }
  fields: {
    slug: string
  }
  excerpt: string
}

type Props = {
  post: Post
  position: number
}

export default function ArticleCard(props: Props) {
  const { post, position } = props
  const title = post.frontmatter.title || post.fields.slug

  function navigateToPost(url: string) {
    navigate(url)
  }

  const offset = [0, 3, 5]
  const randomIndex = Math.floor(Math.random() * offset.length)
  // const off = offset[randomIndex]

  const sequence = [2, 1, 1, 1, 1, 1, 2]
  const span = sequence[position % 7]

  return (
    <article
      key={post.fields.slug}
      className={`cursor-pointer p-6 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_30px_-15px_rgba(0,0,0,0.7)] hover:text-black duration-300 rounded span-${span}`    }
      onClick={() => navigateToPost(post.fields.slug)}>
      <section className="mt-3" style={{ overflow: 'hidden', height: '260px'}}>
        <header>
          <span className="text-xl">{title}</span>
          <div>{post.frontmatter.date}</div>
        </header>
        <div style={{ overflow: 'hidden', width: '100%', marginTop: '10px', fontSize: '15px' }}>
          <img src={`${post.fields.slug}/${post.frontmatter.icon}`} className="article-icon" />
          {post.frontmatter.description}
        </div>
      </section>
      <p className="text-[color:var(--color-primary)] text-sm">Read more...</p>
    </article>
  )
}

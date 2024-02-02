import React from 'react'
import { navigate } from 'gatsby'
import './ArticleCard.css'

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
  // const randomIndex = Math.floor(Math.random() * offset.length)
  const sequence = [2, 1, 1, 1, 1, 1, 2]
  const span = sequence[position % 7]

  return (
    <>
      {position == 5 && (
        <div className="span-3 my-5 flex gap-3">
          <div className="w-[5px] bg-slate-100"></div>
          <div>
            <h3>Like what you are reading?</h3>{' '}
            <p>
              Reach <a>out</a>.
            </p>
          </div>
        </div>
      )}
      <article
        key={post.fields.slug}
        className={`cursor-pointer p-5 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_30px_-15px_rgba(0,0,0,0.7)] hover:text-black duration-300 rounded span-${span}`}
        onClick={() => navigateToPost(post.fields.slug)}>
        <section className="mt-3 relative h-[215px]" style={{ overflow: 'hidden' }}>
          <header>
            <span className="text-xl">{title}</span>
            <div>{post.frontmatter.date}</div>
          </header>
          <div className="overflow-hidden w-[100%] mt-[10px]">
            <img src={`${post.fields.slug}/${post.frontmatter.icon}`} className="article-icon" />
            {post.frontmatter.description}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 80,
                background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 150))'
              }}
            />
          </div>
        </section>
        <p className="text-[color:var(--color-primary)] text-sm">Read more...</p>
      </article>
    </>
  )
}

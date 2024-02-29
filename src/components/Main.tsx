import React from 'react'
import ArticleCard, { Post } from './ArticleCard'
import './Main.css'

type Props = {
  posts: Post[]
}

export default function Main(props: Props) {
  const { posts } = props

  return (
    <div
      className="relative bg-white pt-10 z-0 pb-[20px] shadow-[0_0_30px_0_rgba(0,0,0,0.5) margin"
      style={{ boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.5)' }}>
      <div className="mx-auto container">
        <div className="pt-4">
          <div className="text-gray-400  flex flex-col gap-1">
            <div className="text-right">
              <i>“The only thing a Big Bang rewrite guarantees is a Big Bang!”</i>
            </div>
            <div className="text-right">
              <b>Martin Fowler</b>
            </div>
          </div>
          <div style={{ fontSize: '35px', lineHeight: '2' }}>Blog</div>
          <div className="cards">
            {posts.map((post, i) => {
              return <ArticleCard post={post} position={i} key={i} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

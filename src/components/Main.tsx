import React from 'react'
import ArticleCard, { Post } from './ArticleCard'

type Props = {
  posts: Post[]
}

export default function Main(props: Props) {
  const { posts } = props
  
  return (
    <div className="relative bg-white pt-12">
      <div className="w-[650px] mx-auto">
        <div className="pt-12">
          {posts.map((post) => {
            return <ArticleCard post={post} />
          })}
        </div>
      </div>
    </div>
  )
}

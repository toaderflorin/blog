import React from 'react'
import ArticleCard from './ArticleCard'

type Props = {
  posts: any
}

export default function Main(props: Props) {
  const { posts } = props

  return (
    <div className="relative bg-white">    
      <div id="main-inner" className="w-[650px] mx-auto">
        <br />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {posts.map((post) => {
            return <ArticleCard post={post} />
          })}
        </div>
      </div>
    </div>
  )
}

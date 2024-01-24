import React from 'react'
import ArticleCard, { Post } from './ArticleCard'

type Props = {
  posts: Post[]
}

export default function Main(props: Props) {
  const { posts } = props

  return (
    <div className="relative bg-white pt-10 z-0 mt-[600px]" style={{ boxShadow: '0 0 30px 0 rgba(0, 0, 0, 50%)' }}>
      <div className="w-[1000px] mx-auto">
        <div className="pt-12">          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            {posts.map((post, i) => {
              return <ArticleCard post={post} position={i} />
            })}
          </div>
        </div>
      </div>
      <div style={{ background: '#f3f3f3', height: '200px', padding: '10px', marginTop: '50px' }}></div>
    </div>
  )
}

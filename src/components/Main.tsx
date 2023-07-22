import React from 'react'
import ArticleCard from '../components/ArticleCard'
import './Main.css'

type Props = {
  posts: any
}

export default function Main(props: Props) {
  const { posts } = props

  return (
    <div id="main">    
      <div id="main-inner">
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

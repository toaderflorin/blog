import React from 'react'
import ArticleCard from '../components/ArticleCard'

type Props = {
  posts: any
}

export default function Main(props: Props) {
  const { posts } = props

  return (
    <div
      style={{
        backgroundColor: 'white',
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 1)'
      }}>
      <div
        style={{
          margin: '130px auto 0 auto',
          width: '650px',
          marginTop: '50vh',
          backgroundColor: 'white'
        }}>

        <br />
        <p style={{ fontSize: '11pt' }}></p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {posts.map((post) => {
            return <ArticleCard post={post} />
          })}
        </div>
      </div>
    </div>
  )
}

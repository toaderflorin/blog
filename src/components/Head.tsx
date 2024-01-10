import React from 'react'

export default function Head(props: any) {
  const { post, location } = props
  console.log( 'post', location + post.frontmatter.image)
  return (
    <>
      <title>{post.frontmatter.title}</title>   
      <meta name="image" content={location + post.frontmatter.image} />
      <meta name="og:url" content={location} />
      <meta name="og:image" content={location + post.frontmatter.image} />
      <meta name="og:description" content={post.frontmatter.description} />
    </>
  )
}

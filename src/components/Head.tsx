import React from 'react'

export default function Head(props: any) {
  const { post, location } = props
  console.log( 'POST', location.href + post.frontmatter.image)
  //  + post.frontmatter.image
  return (
    <>
      <title>{post.frontmatter.title}</title>   
      {/* <meta name="image" content={location.href + post.frontmatter.image} /> */}
      <meta name="og:url" content={location.href} />
      <meta name="og:image" content={location.href + post.frontmatter.image} />
      <meta name="og:description" content={post.frontmatter.description} />
    </>
  )
}

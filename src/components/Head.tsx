import React from 'react'

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <title>Blah</title>
    {/* <meta name="description" content={data.page.description} />
    <meta name="twitter:url" content={`https://www.foobar.tld/${location.pathname}`} /> */}
    <meta
      name="image"
      content="https://florintoader.me/2024-01-06-modules/screen.png"
    />
    <meta
      name="og:url"
      content="https://florintoader.me/2024-01-06-modules"
    />
    <meta
      name="og:image"
      content="https://florintoader.me/2024-01-06-modules/screen.png"
    />    
    <meta
      name="og:description"
      content="Some description goes here."
    />
  </>
)

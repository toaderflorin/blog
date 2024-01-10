import React from 'react'

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <title>Blah</title>
    {/* <meta name="description" content={data.page.description} />
    <meta name="twitter:url" content={`https://www.foobar.tld/${location.pathname}`} /> */}
    <meta
      name="image"
      content="https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA"
    />
    <meta
      name="og:image"
      content="https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA"
    />
    <meta
      name="twitter:image"
      content="https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA"
    />
  </>
)

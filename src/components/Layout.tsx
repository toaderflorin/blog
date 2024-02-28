import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "./layout.css"

export default function Layout(props) {
  const { children } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div className="headx"></div>
      <main>{children}</main>
    </>
  )
}

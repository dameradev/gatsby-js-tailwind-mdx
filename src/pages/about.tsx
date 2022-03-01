import { Layout } from "@/components"
import { PageProps } from "@/definitions"
import { graphql } from "gatsby"
import React from "react"

const About: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <h1>About me</h1>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

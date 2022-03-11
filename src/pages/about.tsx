import { Layout, Seo } from "@/components"
import { PageProps } from "@/definitions"
import { graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import { AboutUs } from "@/components/icons"

const About: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"About us"} />
      <h1 className="text-5xl capitalize mb-12">About course</h1>
      <div className="flex items-center gap-24">
        <div className="w-3/4">
          <p className="text-xl mb-4">
            This course is meant for anyone who has basic knowledge of React and
            Javascript, and wants to dive deeper and learn Gatsby JS and static
            site generation. We will explore how to build a basic blog using MD
            (markdown), and style everything without writting a single line of
            css code. Keep in mind that knowledge of css is needed, we will use
            tailwind to speed up the process and make our lives easier.
          </p>
          <p className="text-xl mb-8">
            Below you will find a list of what you will gain
          </p>
          <ul className="ml-6 list-disc flex flex-col gap-4 text-xl">
            <li>Setup Gatsby project with Tailwind and Typescript</li>
            <li>Install and setup Gatsby plugins</li>
            <li>Generate static pages using gatsby Internal processes</li>
            <li>Work with svgs and images</li>
            <li>
              Use mdx for static blog post generation (can be used for any type
              of content ex: portfolio project)
            </li>
            <li>Publish project on github and deploy site to netlify</li>
          </ul>
        </div>
        <div className="block w-1/4">
          <AboutUs className="fill-skin-header" />
        </div>
      </div>
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
    file(relativePath: { eq: "about-us-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`

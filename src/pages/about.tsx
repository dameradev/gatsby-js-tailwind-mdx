import { Layout, Seo } from "@/components"
import { PageProps } from "@/definitions"
import { graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const About: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"About us"} />
      <h1 className="text-5xl capitalize mb-12">About us</h1>
      <div className="flex items-center gap-24">
        <div className="">
          <p className="text-xl mb-8">
            If you’ve ever wanted to learn how to travel cheaper, experience a
            destination’s authentic side, and turn your dream trip into a
            reality, you are in the right place. This website will give you
            road-tested tips, advice, and suggestions so you can see and do more
            for less. On this website, you will find:
          </p>
          <ul className="ml-6 list-disc flex flex-col gap-2 text-xl">
            <li>Tested travel tips from years of experience</li>
            <li>Interviews with other travel experts</li>
            <li>
              Case studies and profiles of other travelers from various
              backgrounds, genders, colors, and nationalities
            </li>
            <li>
              A community of supportive travelers to help encourage you to keep
              going
            </li>
            <li>
              Detailed cost breakdowns to help you better budget for your trip
            </li>
            <li>
              Travel tips that can be applied to any destination in the world
            </li>
            <li>
              In-depth reporting that lets you know which sites really do help
              you save money!
            </li>
          </ul>
        </div>
        <div className="block w-full">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="A corgi smiling happily"
          />
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

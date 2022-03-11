import * as React from "react"
import { Link, graphql } from "gatsby"

import { Seo, Layout } from "../components"
import { PageProps, INode } from "@/definitions"

const CategoryPageTemplate: React.FC<PageProps> = ({
  data,
  location,
  pageContext,
}) => {
  const posts = data.allMdx.edges

  const siteTitle = data.site.siteMetadata?.title || `Title`

  console.log(location)
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={pageContext.title}
        description={`Explore all of our ${pageContext.title} posts`}
      />
      <h1 className="text-6xl mb-24 font-bold">
        #{pageContext.title.toLowerCase()}
      </h1>
      <ol className="divide-y divide-skin-fg-muted max-w-2xl">
        {posts.map(({ node }: { node: INode }, index: number) => {
          const title = node.frontmatter.title || node.fields.slug
          const classes = index === 0 ? "pb-12" : "py-12"
          return (
            <li key={node.fields.slug} className={classes}>
              <article itemScope itemType="http://schema.org/Article">
                <header>
                  <small className="font-yrsa text-skin-fg-muted text-lg">
                    {node.frontmatter.date}
                  </small>
                  <h2 className="text-2xl font-exo font-black text-skin-fg mt-3">
                    <Link
                      to={node.fields.slug}
                      itemProp="url"
                      className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                </header>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt || node.frontmatter.description,
                  }}
                  itemProp="description"
                  className="text-lg font-yrsa text-skin-fg mt-3"
                />
                <section className="font-yrsa text-skin-fg-muted uppercase md:text-sm space-x-2 mt-3">
                  {(node.frontmatter.tags || "")
                    .split(",")
                    .map((s: string) => s.trim())
                    .map((s: string) => (
                      <span key={s}>{`#${s}`}</span>
                    ))}
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
  query CategoryPageQuery($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { frontmatter: { tags: { regex: $tag } } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            description
            tags
            title
          }
        }
      }
    }
  }
`

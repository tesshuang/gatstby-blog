import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => {
  
  const post = data.markdownRemark
  const featuredImage = data.markdownRemark.frontmatter.featuredImage
  const sectionImage = data.markdownRemark.frontmatter.sectionImage
  console.log(featuredImage);
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        {
          featuredImage ? <Img fixed={featuredImage.childImageSharp.fixed} /> : ''
        }
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div style={{ width: `300px` }}>
          { sectionImage ? <Img fluid={sectionImage.childImageSharp.fluid} alt="This is the section image"/> : ''}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sectionImage {
          childImageSharp {
            fluid(
              maxWidth: 800, 
              duotone: {
                highlight: "#f00e2e",
                shadow: "#192550"
              }) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`
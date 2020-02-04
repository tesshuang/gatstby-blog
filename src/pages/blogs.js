import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import blogStyles from "./blogs.module.css"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "")
          }
          fields {
            slug
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ( {data} ) => {
  // console.log(data);
  return (
  <Layout>
    <SEO title="Blogs" />
    <h2>You can do more with MDX</h2>
    <p>Other than looping from the content blog posts, we can build a Gatsby page directly from MDX. Learn more at: <Link to={`/mdxpage`}>Writing Pages in MDX</Link></p>
    
    <h2>Weekly Challenge</h2>
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="Gatsby Docs are awesome"
    />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug} className={blogStyles.title}>
          <h3>{node.frontmatter.title}</h3>
          <span>{node.frontmatter.date}</span>
        </Link>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)}
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

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
  }
`

export default ( {data} ) => {
  // console.log(data);
  return (
  <Layout>
    <SEO title="Blogs" />
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
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

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
        }
      }
    }
  }
`

export default ( {data} ) => {
  console.log(data);
  return (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>{node.frontmatter.title}</h3>
        <span>{node.frontmatter.date}</span>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)}
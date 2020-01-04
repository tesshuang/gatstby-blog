import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({data}) => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact me</h1>
    <p>Data from query: {data.site.siteMetadata.title}</p>
    <p>Let's work together!</p>
  </Layout>
)

export default Contact

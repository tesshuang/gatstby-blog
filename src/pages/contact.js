import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact me</h1>
    <p>Let's work together!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

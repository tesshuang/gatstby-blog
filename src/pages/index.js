import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Gatsby</h1>
    <p>What a world.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div >
      <Link style={{ margin: `5px` }} to="/about">About</Link>
      <Link style={{ margin: `5px` }} to="/contact/">Contact</Link>
    </div>

  </Layout>
)

export default IndexPage

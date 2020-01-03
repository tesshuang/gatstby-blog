import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi! This is a website all about my Gatsby learning journey!</h1>
    <p>I am always curious and willing to learn something to enhance my knowledge. In 2020, I will start to use #100DaysOfGatsby as my daily learning challenge.</p>
    <p>Let's learn Gatsby and build something great.</p>
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

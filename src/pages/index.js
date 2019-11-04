import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/client/wakeword/test-phrase">Go to Phrase</Link>
  </Layout>
)

export default IndexPage

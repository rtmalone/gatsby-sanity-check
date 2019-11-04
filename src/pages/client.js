import React from "react"
import { Router } from "@reach/router"
import Phrase from "../components/phrase"
import Layout from "../components/layout"

export default function Other() {
  return (
    <Layout>
      <Router>
        <Phrase path="/client/wakeword/:phrase" />
      </Router>
    </Layout>
  )
}

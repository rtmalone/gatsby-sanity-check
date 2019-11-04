import React from "react"
import { Link } from "gatsby"

export default function Phrase(props) {
  return (
    <>
      <Link to="/">home</Link>
      <h1>{props.phrase}</h1>
    </>
  )
}

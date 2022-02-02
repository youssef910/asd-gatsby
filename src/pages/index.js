import React from "react"
import Welcome from "./welcome/welcome"
import Layout from "../Components/Layout"
import ScrollDown from "./welcome/scrollDown"
export default function Home() {
  return (
    <Layout>
      <Welcome />
      <ScrollDown />
    </Layout>
  )
}

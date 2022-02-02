import React from "react"
import Welcome from "./welcome/welcome"
import Layout from "../Components/Layout"
import ScrollDown from "./welcome/scrollDown"
import AboutUs from "./welcome/aboutUs"
import WhatWeDo from "./welcome/whatWeDo"
export default function Home() {
  return (
    <Layout>
      <Welcome />
      <ScrollDown />
      <AboutUs />
      <WhatWeDo />
    </Layout>
  )
}

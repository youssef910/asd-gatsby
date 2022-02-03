import React from "react"
import Welcome from "./welcome/welcome"
import Layout from "../Components/Layout"
import ScrollDown from "./welcome/scrollDown"
import AboutUs from "./welcome/aboutUs"
import WhatWeDo from "./welcome/whatWeDo"
import WeSupportU from "./welcome/weSupportU"
export default function Home() {
  return (
    <Layout>
      <Welcome />
      <ScrollDown />
      <AboutUs />
      <WhatWeDo />
      <WeSupportU />
    </Layout>
  )
}

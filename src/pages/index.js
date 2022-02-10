import React from "react"
import Welcome from "./welcome/welcome"
import Layout from "../Components/Layout"
import ScrollDown from "./welcome/scrollDown"
import AboutUs from "./welcome/aboutUs"
import WhatWeDo from "./welcome/whatWeDo"
import WeSupportU from "./welcome/weSupportU"
import MemberSays from "./welcome/memberSayings"
import Subscribe from "./welcome/subscribeNL"
import FrequentAskedQuestions from "./welcome/FQA"
export default function Home() {
  return (
    <Layout>
      <Welcome />
      <ScrollDown  />
      <AboutUs id="aboutUs" />
      <WhatWeDo />
      <WeSupportU />
      <MemberSays />
      <Subscribe />
      <FrequentAskedQuestions />
    </Layout>
  )
}

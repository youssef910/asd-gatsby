import React from "react"
import FooterLinks from "./footerLinks"
import LogoAndJoin from "./logoAndJoin"
import SocialLinks from "./socialLinks"

function Footer() {
  return (
    <footer className="lg:mx-10 bg-d-Black text-white">
      {" "}
      <LogoAndJoin />
      <FooterLinks />
      <SocialLinks />
    </footer>
  )
}

export default Footer

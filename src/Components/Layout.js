import React from "react"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./NavBar/Navbar"
function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
      {/* <Button primary></Button> */}
      <Footer />
    </div>
  )
}

export default Layout

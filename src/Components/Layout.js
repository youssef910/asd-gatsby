import React from "react"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./NavBar/Navbar"
function Layout({ children }) {
  return (
    <div className="layout bg-black">
      <NavBar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

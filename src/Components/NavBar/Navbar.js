import React, { useState } from "react"
import { Link } from "gatsby"
import { items } from "../../../static/items"
import LoginButton from "./LoginBtn"
import NavBarDropDown from "./NavBarDropDown"
import SearchBtn from "./SearchBtn"
import MobileMenu from "./MobileMenu"

const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <nav className="bg-d-ltBg  ">
      <div className="px-8 mx-auto border-y border-b-gray-500-800 ">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <img src="/Logo.jpeg" className="img  max-h-10" alt="logo" />
          </div>
          <div className=" hidden md:flex space-x-5  ">
            <Link
              to="/"
              className="py-2 px-2 no-underline   font-nexa text-20 
               hover:bg-d-blue hover:text-d-ltBg text-d-Black focus:bg-d-blue focus:text-d-ltBg"
            >
              Home
            </Link>

            <NavBarDropDown items={items.about} />
            <NavBarDropDown items={items.resources} />
            <Link
              to="/about"
              className="py-2 px-2 no-underline  font-nexa text-20 
               hover:bg-d-blue hover:text-d-ltBg text-d-Black focus:bg-d-blue focus:text-d-ltBg"
            >
              Contact
            </Link>
          </div>
          <div className=" hidden md:flex space-x-5">
            <SearchBtn />
            <LoginButton />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={handleClick} className="px-3 py-3">
              {click ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden lg:hidden  ${!click && "hidden"}`}>
        <MobileMenu />
      </div>
    </nav>
  )
}

export default NavBar

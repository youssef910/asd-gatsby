import React from "react"
import { Link } from "gatsby"
const WhatWeDo = () => {
  return (
    <div className="grid md:grid-cols-2 bg-d-lBlue mx-10 py-10 md:grid-rows-1 sm:grid-rows-2 xs:grid-col-1 gap-2 ">
      <div className="pl-2  grid justify-items-center ">
        {" "}
        <h1 className="font-roboto text-48	text-center"> What We Do?</h1>
        <p className="font-nexa text-20 text-start">
          We are provide advice, signposting, tips
          <br /> and products to help support parents of
          <br />
          autistic children on their autism journey
          <br /> within the neurodiverse family.
        </p>
        <div>
          <Link to="/whatWeDoPg">
            <button
              className={` border-1 bg-d-Black text-center text-white
              font-ambit_bold text-24 ml-6 px-4 py-2 my-5 w-fit group hover:bg-stone-600 focus:outline-none focus:ring focus:ring-d-Black-300 `}
            >
              Read More
              <div
                className=" hidden  group-hover:block  hover:bg-d-lBlue  bg-d-Black text-white mt-3 
                 px-1 absolute rounded shadow-xl text-sm"
              >
                Click to Read More
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="pl-3   relative">
        <img
          src="/cute-girl-with-down-syndrome-in-mothers-arms.jpg"
          alt="Welcome image"
          className=" z-10 absolute   h-4/6 w-4/5 max  bottom-12 left-20 rounded-xl  "
        />
        <div className="bg-d-beige w-2/3 h-4/5 rounded-2xl absolute bottom-5 left-10 z-0   "></div>
      </div>
    </div>
  )
}

export default WhatWeDo

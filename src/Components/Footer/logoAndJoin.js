import React from "react"
import { Link } from "gatsby"
const LogoAndJoin = () => {
  return (
    <div className="py-3 px-5 flex  md:flex-row flex-col  space-y-2 justify-between items-center  border-b-2 border-gray-400">
      <div className="">
        {" "}
        <img src="/Logo.jpeg" className=" md:shrink-0 max-h-12" alt="logo" />
      </div>
      <div className="flex flex-row items-center">
        <h5 className="md:text-22 font-ambit_bold text-sm ">
          Do want to be part of us?
        </h5>
        <Link to="/about">
          <button
            className={` border-1 bg-d-ltBg text-center text-d-Black 
          font-ambit_bold md:text-24 text-sm ml-6 md:px-4 md:py-1 p-1 w-fit 
          group hover:bg-stone-600 hover:text-d-ltBg focus:outline-none focus:ring focus:ring-d-Black-300 `}
          >
            Read More
            <div
              className=" hidden  group-hover:block  hover:bg-d-lBlue  bg-d-ltBg text-white mt-3 
            px-1 absolute rounded shadow-xl text-sm"
            >
              Click to Read More
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LogoAndJoin

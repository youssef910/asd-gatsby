import { Link } from "gatsby"
import React from "react"

const WeSupportU = () => {
  return (
    <div className="grid mx-10 md:grid-cols-2 mx-10 bg-d-ltBg py-14 md:grid-rows-1 sm:grid-rows-2 xs:grid-col-1 gap-2 ">
      <div className="pl-2  grid justify-items-center ">
        {" "}
        <h1 className="font-roboto text-48	text-center"> We Support You?</h1>
        <p className="font-nexa text-20 text-start">
          If you are a parent of an autistic child
          <br /> (whether officially diagnosed, on the long
          <br /> winded journey or just having some
          <br /> concerns), then this is the group for you!
        </p>
        <div>
          <Link to="/register">
            <button
              className={` border-1 bg-d-Black text-center text-white
              font-ambit_bold text-24 ml-6 px-4 py-2 my-5 w-fit group hover:bg-stone-600 focus:outline-none focus:ring focus:ring-d-Black-300 `}
            >
              Join Us
              <div
                className=" hidden  group-hover:block  hover:bg-d-lBlue  bg-d-Black text-white mt-3 
                 px-1 absolute rounded shadow-xl text-sm"
              >
                Click Join Us
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="pl-3   relative">
        <img
          src="/supporting-elderly-woman.jpg"
          alt="Welcome image"
          className=" z-10 absolute   h-5/6 w-4/6 max  bottom-12 right-16 rounded-xl  "
        />
        <div className="bg-d-beige w-2/3 h-4/5 rounded-2xl absolute bottom-5 right-10 z-0   "></div>
      </div>
    </div>
  )
}

export default WeSupportU

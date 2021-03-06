import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const WeSupportU = () => {
  return (
    <div
      className=" grid grid-rows-2  bg-d-ltBg md:grid-cols-2 md:grid-rows-1 lg:mx-10 "
      // className="xs:grid-col-1  grid gap-2 bg-d-ltBg py-14 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:mx-10 "
    >
      <div className="grid  justify-items-center pl-2 ">
        {" "}
        <h1 className="text-center font-roboto	text-48"> We Support You?</h1>
        <p className="text-start font-nexa text-20">
          If you are a parent of an autistic child
          <br /> (whether officially diagnosed, on the long
          <br /> winded journey or just having some
          <br /> concerns), then this is the group for you!
        </p>
        <div>
          <Link to="/register">
            <button
              className={` border-1 group focus:ring-d-Black-300 my-5
              ml-6 w-fit bg-d-Black px-4 py-2 text-center font-ambit_bold text-24 text-white hover:bg-stone-600 focus:outline-none focus:ring `}
            >
              Join Us
              <div
                className=" absolute  mt-3  hidden  rounded bg-d-Black px-1 
                 text-sm text-white shadow-xl hover:bg-d-lBlue group-hover:block"
              >
                Click Join Us
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="relative   pl-3">
        <StaticImage
          src="../../images/supporting-elderly-woman.jpg"
          // className=" max absolute   bottom-12 left-20 z-10  h-4/6 w-4/5 rounded-xl  "
          formats={["auto", "avif", "webp"]}
          alt="Support"
          className=" max absolute   bottom-12 right-16 z-10  h-5/6 w-4/6 rounded-xl  "
          placeholder="blurred"
        />
        <div className="absolute bottom-5 right-10 z-0 h-4/5 w-2/3 rounded-2xl bg-d-beige   "></div>
      </div>
    </div>
  )
}

export default WeSupportU

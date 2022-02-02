import React from "react"

const Welcome = () => {
  return (
    <div className="grid md:grid-cols-2  md:grid-rows-1 sm:grid-rows-2 xs:grid-col-1 gap-2 ">
      <div className="pl-2  ">
        {" "}
        <h1 className="font-roboto text-48	pl-4 py-5">
          Welcome to <br /> SENsation Life
        </h1>
        <ul className=" flex-col space-y-5">
          <li className="flex align-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-d-beige rounded-2xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h6 className="pl-2 font-nexa text-20 ">Supporting Families.</h6>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-d-beige rounded-2xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h6 className="pl-2 font-nexa text-20">
              Empowering Neurodiverse Families.
            </h6>
          </li>
        </ul>
        <div>
          <button
            className=" border-1 bg-d-blue text-center text-white
           font-ambit_bold text-24 ml-6 px-4 py-2 w-3/4 mr-5 my-5 "
          >
            Click here to Register
          </button>
        </div>
      </div>
      <div className="pl-3   relative">
        <img
          src="/autistic-little-girl-close-up.jpg"
          alt="Welcome image"
          className=" z-10 absolute   h-4/6 w-4/5 max  bottom-12 right-15 rounded-xl  "
        />
        <div className="bg-d-lBlue w-2/3 h-4/5 rounded-2xl absolute bottom-5 right-10 z-0   "></div>
      </div>
    </div>
  )
}

export default Welcome

import React from "react"
import { Link } from "gatsby"
import { membersSays } from "../../../static/memberSays.js"
const MemberSays = () => {
  return (
    <div className="lg:mx-10 py-5 bg-d-blue">
      <h2 className="text-center text-white font-roboto text-40">
        What Our Beloved Members Say
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 ">
        {membersSays.map(x => (
          <div className="bg-white align-middle grid justify-items-center md:p-5 sm:pl-3 m-4 ">
            <h4 className="text-24 text-center font-ambit_bold">{x.head}</h4>
            <p className="text-center  font-ambit_italic text-16">{x.p}</p>
          </div>
        ))}
      </div>
      <div className="grid justify-items-center mt-4">
        <Link to="/register">
          <button
            className=" border-1 bg-d-Black  group w-full text-center text-white
            font-ambit_bold text-24  px-4 py-2   hover:bg-slate-600 
            focus:outline-none focus:ring focus:ring-d-Black-300 "
          >
            Click here to Register
            <div
              className=" hidden  group-hover:block   hover:bg-d-lBlue  bg-d-Black text-white mt-3 
                 px-1 absolute rounded shadow-xl text-sm ml-20"
            >
              Click to Register
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MemberSays

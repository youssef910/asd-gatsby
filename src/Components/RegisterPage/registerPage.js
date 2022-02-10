import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
function RegisterPage() {
  const initialState = {
    first_name: "",
    last_name: "",
    user_name: "",
    dob: "",
    email: "",
    pwd: "",
    confirmPwd: "",
    mobile: "",
    address: "",
  }
  const [form, setForm] = useState(initialState)
  const handleChange = event => {
    const { target } = event
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log(form)
    // setForm(initialState)
  }
  return (
    <div className="grid grid-cols-3  bg-d-ltBg lg:mx-10  ">
      <div className="col-span-3 md:col-span-2 ">
        <h1 className="my-10 text-center ">Register With Us</h1>
        <form
          className="mx-2 flex flex-col justify-items-center space-y-5 md:mx-24 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="First Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="Last Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="user_name"
            value={form.user_name}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="User Name"
            onChange={handleChange}
          ></input>
          <input
            type="date"
            name="dob"
            value={form.dob}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="DOB"
            onChange={handleChange}
          ></input>
          <input
            type="email"
            name="email"
            value={form.email}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="pwd"
            value={form.pwd}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="Password"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="confirmPwd"
            value={form.confirmPwd}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="Confirm Password"
            onChange={handleChange}
          ></input>
          <input
            type="number"
            name="mobile"
            value={form.mobile}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="Mobile"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="address"
            value={form.address}
            className=" border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 "
            placeholder="Address"
            onChange={handleChange}
          ></input>
          <button className="mt-5 bg-d-blue py-2 text-center font-ambit_bold text-20 text-white lg:px-5 ">
            {" "}
            Register
          </button>
        </form>
        <div className="mt-10 flex flex-row justify-center  ">
          <h5 className="font-ambit_italic text-16">
            Already have an account?
            <Link className="no-underline" to="/">
              <span className=" pl-2 font-ambit_bold text-16 text-d-blue">
                Sign In
              </span>
            </Link>
          </h5>
        </div>
      </div>
      <div>
        <StaticImage
          className="mt-5 hidden md:block "
          alt="register"
          src="../../images/Register-image.png"
          formats={["auto", "avif", "webp"]}
          placeholder="blurred"
        />
      </div>
    </div>
  )
}

export default RegisterPage

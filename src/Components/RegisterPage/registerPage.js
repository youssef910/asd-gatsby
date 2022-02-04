import { Link } from "gatsby"
import React, { useState } from "react"

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
    <div className="lg:mx-10 bg-d-ltBg  grid grid-cols-3  ">
      <div className="md:col-span-2 col-span-3 ">
        <h1 className="text-center my-10 ">Register With Us</h1>
        <form
          className="flex flex-col space-y-5 justify-items-center mx-2 md:mx-24 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="First Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="Last Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="user_name"
            value={form.user_name}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="User Name"
            onChange={handleChange}
          ></input>
          <input
            type="date"
            name="dob"
            value={form.dob}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="DOB"
            onChange={handleChange}
          ></input>
          <input
            type="email"
            name="email"
            value={form.email}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="pwd"
            value={form.pwd}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="Password"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="confirmPwd"
            value={form.confirmPwd}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="Confirm Password"
            onChange={handleChange}
          ></input>
          <input
            type="number"
            name="mobile"
            value={form.mobile}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="Mobile"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="address"
            value={form.address}
            className=" px-1 lg:px-3 py-1 bg-transparent border-1 border-gray-300 "
            placeholder="Address"
            onChange={handleChange}
          ></input>
          <button className="text-center bg-d-blue text-white text-20 font-ambit_bold mt-5 lg:px-5 py-2 ">
            {" "}
            Register
          </button>
        </form>
        <div className="flex flex-row justify-center mt-10  ">
          <h5 className="text-16 font-ambit_italic">
            Already have an account?
            <Link className="no-underline" to="/">
              <span className=" text-d-blue font-ambit_bold text-16 pl-2">
                Sign In
              </span>
            </Link>
          </h5>
        </div>
      </div>
      <div>
        <img
          className="mt-5 md:block hidden "
          src="/Regester_image.png"
          alt="register"
        />
      </div>
    </div>
  )
}

export default RegisterPage

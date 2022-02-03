import React, { useState } from "react"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
    setEmail("")
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsOpen(true)
  }
  return (
    <div
      className="grid relative md:grid-cols-2 bg-d-ltBg lg:mx-10 py-10 md:grid-rows-1
     sm:grid-rows-2 xs:grid-col-1 gap-2 "
    >
      <div className="pl-2  grid justify-items-center  py-5 ">
        <h1 className="font-roboto text-48 mb-5	text-start">
          {" "}
          Subscribe to <br />
          our newsletter?
        </h1>
        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          {/* <div class="md:flex"> */}
          <div class="relative ">
            {" "}
            <form onSubmit={handleSubmit}>
              <input
                // onSubmit={handleSubmit}
                required
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="enter your email "
                className="bg-white h-10 w-4/5 px-12  rounded-lg focus:outline-none hover:cursor-pointer"
                name="email"
              />{" "}
              <button
                // onClick={handleSubmit}
                className="absolute top-0 right-1   p-2 text-white  bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>{" "}
            </form>
          </div>
        </div>
        {/* </div>   */}
      </div>

      <div className=" pl-3   relative ">
        <img
          src="/woman-using-a-mobile-phone.jpg"
          alt="subscribe image"
          className=" z-10 absolute   h-5/6 w-4/6 max  bottom-12 right-16 rounded-xl  "
        />
        <div className="bg-d-lBlue w-2/3 h-4/5 rounded-2xl absolute bottom-5 right-10 z-0   "></div>
      </div>
      {isOpen ? (
        <div className=" absolute inset-0   bg-stone-700 bg-opacity-25 z-10 ">
          <div className="bg-white max-w-md py-2 px-3 absolute  rounded lg:top-1/3 lg:left-1/4   z-10  text-gray-800">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-center">Thank you!!</h4>

              <button onClick={closeModal}>
                <svg
                  className="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mt-2 text-sm">
              <p>
                Your Email
                <span className=" px-2 text-green-700">
                  {""}
                  {email}
                </span>
                is added to our newsletter and you will receive updates
              </p>
            </div>
            <div className="mt-3 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-3 py-1 rounded hover:bg-green-700 hover:bg-opacity-50 bg-green-500"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Subscribe

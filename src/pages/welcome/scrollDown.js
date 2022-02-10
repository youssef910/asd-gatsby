import React from "react"
import { Link } from "gatsby"
const ScrollDown = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center bg-d-ltBg lg:mx-10">
      {" "}
      <h1 className="size-27 text-center font-ambit_bold text-d-blue">
        SCROLL DOWN
      </h1>
      <Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-d-blue hover:text-d-lBlue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </Link>
    </div>
  )
}

export default ScrollDown

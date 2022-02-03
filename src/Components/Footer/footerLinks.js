import React from "react"
import { Link } from "gatsby"
import { footerLinks } from "../../../static/footerLinkList"
const mailtoHref =
  "mailto:support@example.com?subject=SendMail&body=Description"
const FooterLinks = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-4  py-4 px-5">
      <div className="flex flex-col  md:space-y-4 items-center">
        <h4 className=" lg:pl-5 text-center">about</h4>
        <ul className="flex shrink flex-col  lg:space-y-4  lg:space-x-0  ">
          {footerLinks.aboutLinks.map(link => (
            <Link
              className="no-underline 
             hover:border-2 hover:border-blue-100 hover:rounded-xl hover:px-2 "
              to={link.link}
            >
              <li className="text-white text-center ">{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col  md:space-y-4 items-center ">
        <h4 className=" pl-5 text-center shrink">Resources</h4>
        <ul className="flex shrink flex-col  lg:space-y-4    ">
          {footerLinks.resourcesLinks.map(link => (
            <Link
              className="no-underline hover:border-2 hover:border-blue-100 hover:rounded-xl hover:px-2"
              to={link.link}
            >
              <li className="text-white ">{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col  md:space-y-4 items-center">
        <h4 className=" pl-5 text-center">Help</h4>
        <ul className="flex shrink flex-col  lg:space-y-4  lg:space-x-0    ">
          <Link className="no-underline" to="/fqa">
            <li className="text-white hover:border-2 hover:border-blue-100 hover:rounded-xl hover:px-2 ">
              FAQs
            </li>
          </Link>
        </ul>
      </div>
      <div className=" flex items-center">
        <div className="flex flex-col items-center">
          {" "}
          <h3 className=" text-center font-nexa text-16 underline underline-offset-4   ">
            Our Email address
          </h3>
          <a
            className="flex flex-row align-middle no-underline text-white "
            href={mailtoHref}
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-center px-2">info@sensational-life.com</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterLinks

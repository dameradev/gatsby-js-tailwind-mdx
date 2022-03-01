import React from "react"
import { Link } from "gatsby"

import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"

import { Github, Linkedin, Twitter } from "./icons"
const Footer: React.FC<EmptyProps> = () => {
  return (
    <footer className=" z-10 bg-skin-header backdrop-blur-md backdrop-saturate-150 bg-opacity-70 px-8 lg:px-24">
      <div className="mx-auto  py-10  flex">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link
            to="/"
            className="rounded-md text-skin-header-fg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
          >
            <span className="sr-only">Home</span>
            <HomeIcon className="h-8 w-auto" />
          </Link>
        </div>

        <div>
          <ul className="flex gap-5">
            <Linkedin className="w-8 h-auto cursor-pointer bg-white" />
            <Github className="w-8 h-auto cursor-pointer fill-white" />
            <Twitter className="w-8 h-auto cursor-pointer" />
          </ul>
        </div>
      </div>
      <div className="pb-8 flex justify-between">
        <p>© {new Date().getFullYear()} Blog. All rights reserved.</p>
        <ul className="flex gap-6">
          <li>
            <Link to="/">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

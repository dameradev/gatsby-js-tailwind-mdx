import { MDXProviderComponentsProp } from "@mdx-js/react"
import React from "react"

import { XIcon } from "@heroicons/react/outline"
import { Github, Twitter } from "../icons"

const components: MDXProviderComponentsProp = {
  XIcon: ({ className }) => <XIcon className={`h-6 w-auto ${className}`} />,
  Twitter: ({ className }) => <Twitter className={`w-auto ${className}`} />,
  Github: ({ className }) => <Github className={`w-auto ${className}`} />,
}

export default components

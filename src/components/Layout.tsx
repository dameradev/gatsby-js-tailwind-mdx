import React, { ReactNode } from "react"
import { Location } from "history"

import { Header } from "./"
import Footer from "./Footer"

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div
      className={`relative antialiased min-h-screen flex flex-col selection:bg-yellow-200 selection:text-black`}
    >
      <div
        className={`${isRootPath ? "" : "hidden"} absolute top-0 right-0 m-5`}
      >
        {/* <ThemeSwitch /> */}
      </div>
      {<Header />}
      <main className="flex-1 bg-primary  transition-colors px-8 lg:px-24 py-8 md:py-16 overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

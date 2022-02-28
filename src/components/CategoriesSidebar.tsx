import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import { Fragment } from "react"
import React from "react"
import { Link } from "gatsby"

interface CategoriesSidebarProps {
  tags: (string | undefined)[]
}

const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({ tags }) => {
  return (
    <>
      <Popover className="fixed right-5 md:hidden">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center uppercase bg-skin-header  p-2 inline-flex items-center justify-center text-skin-header-fg ">
              Categories{" "}
              {!open ? (
                <ChevronDownIcon
                  className="ml-2 mb-1 h-4 w-auto"
                  aria-hidden="true"
                />
              ) : (
                <ChevronUpIcon
                  className="ml-2 mb-1 h-4 w-auto"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-0"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-0"
            >
              <Popover.Panel className=" fixed top-36 right-5 p-4 transition transform origin-top-right md:hidden w-fit bg-skin-header ">
                <div className="list-none text-right">
                  {tags.map(tag => (
                    <li className="text-2xl cursor-pointer uppercase mb-4">
                      <Link to={`/category/${tag}`}>{tag}</Link>
                    </li>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <section className="hidden md:block">
        <h3 className="text-3xl">CATEGORIES</h3>
        <ul className="mt-4 flex flex-col items-end">
          {tags.map(tag => (
            <li className="text-2xl cursor-pointer uppercase">
              <Link to={`/category/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default CategoriesSidebar

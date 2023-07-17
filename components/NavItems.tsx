"use client"; // this is a client component
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { NavItem } from "./Navbar";
import { useEffect } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function hasProperty(obj: NavItem, key: string) {
  return obj.hasOwnProperty(key);
}

export default function NavItems(item: NavItem, key: number) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentSrollPosition = window.scrollY;
      if (currentSrollPosition > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (hasProperty(item, "options")) {
    return (
      <Listbox>
        {({ open }) => (
          <>
            <div className="relative mt-2">
              <Listbox.Button
                className={`mt-2 relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium ${
                  isScrolled ? "text-gray-500" : "text-gray-500 md:text-white"
                }  hover:border-gray-300 hover:text-gray-700 border-0`}
              >
                <span className="block truncate">{item.navItemLabel}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  {/* <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {item.options?.map((option, id) => (
                    <Listbox.Option
                      key={id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={item.navItemLabel}
                    >
                      {({ active }) => <span>{option.optionLabel}</span>}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    );
  } else {
    return (
      <div className="relative mt-2">
        <a
          href="#"
          className={`mt-2 relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium ${
            isScrolled ? "text-gray-500" : "text-gray-500 md:text-white"
          }  hover:border-gray-300 hover:text-gray-700 border-0`}
        >
          {item.navItemLabel}
        </a>
      </div>
    );
  }
}

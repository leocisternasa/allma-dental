"use client"; // this is a client component

import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../public/logo-allma-dental.png";
import NavItems from "./NavItems";

export interface NavItem {
  navItemLabel: string;
  page: string;
  options?: { optionLabel: string; optionPage: string }[];
}

const NAV_ITEMS: Array<NavItem> = [
  {
    navItemLabel: "TRATAMIENTOS",
    options: [
      {
        optionLabel: "Ortodoncia Lingual",
        optionPage: "ortodonciaLingual",
      },
      {
        optionLabel: "Ortodoncia Invisible",
        optionPage: "ortodonciaInvisible",
      },
      {
        optionLabel: "Ortodoncia Visible con Brackets",
        optionPage: "ortodonciaBrackets",
      },
      {
        optionLabel: "Expansores de paladar para ninos",
        optionPage: "expansores",
      },
    ],
    page: "tratamientos",
  },
  {
    navItemLabel: "EDADES",
    options: [
      {
        optionLabel: "Ortodoncia en Ninos",
        optionPage: "ortodonciaEnNinos",
      },
      {
        optionLabel: "Ortodoncia en Jovenes",
        optionPage: "ortodonciaEnJovenes",
      },
      {
        optionLabel: "Ortodoncia en Adultos",
        optionPage: "ortodonciaEnAdultos",
      },
    ],
    page: "edades",
  },
  {
    navItemLabel: "CONOCENOS",
    options: [
      {
        optionLabel: "Mision y Vision",
        optionPage: "misionYvision",
      },
      {
        optionLabel: "Equipo Profesional",
        optionPage: "equipo",
      },
    ],
    page: "conocenos",
  },
  {
    navItemLabel: "PRIMERA VISITA",
    page: "primeraVista",
  },
];

function hasProperty(obj: NavItem, key: string) {
  return obj.hasOwnProperty(key);
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentSrollPosition = window.pageYOffset;
      if (currentSrollPosition > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="hidden md:flex justify-between items-center py-2 border-b text-sm ">
        <div className="">
          <ul className="flex text-white">
            <li>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>

                <span className="ml-2">1985 Kerry Way, Whittier, CA, USA</span>
              </div>
            </li>
            <li className="ml-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                </svg>

                <span className="ml-2">+1 562-789-1935</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="">
          <ul className="flex justify-end text-white">
            <li>
              <a href="#" target="_blank" title="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path>
                </svg>
              </a>
            </li>

            <li className="ml-6">
              <a href="#" target="_blank" title="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path>
                </svg>
              </a>
            </li>

            <li className="ml-6">
              <a href="#" target="_blank" title="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path>
                  <circle cx="11.994" cy="11.979" r="3.003"></circle>
                </svg>
              </a>
            </li>

            <li className="ml-6">
              <a href="#" target="_blank" title="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className={`${isScrolled ? "scrolled bg-white" : "bg-transparent"}`}>
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-12">
                <div className="relative flex h-16 justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <Image
                        className="block h-8 w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                        width={300}
                        height={300}
                      />
                      <Image
                        className="hidden h-8 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      {NAV_ITEMS.map((item, idx) => {
                        return <NavItems {...item} key={idx} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-4 pt-2">
                  {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Team
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Projects
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Calendar
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
}

export default Navbar;

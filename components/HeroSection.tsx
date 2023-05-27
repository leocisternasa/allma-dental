"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo-allma-dental.png";
import background from "../public/images/cover-bg.jpg";
import Navbar from "@/components/Navbar";
import iconPresencial from "../public/dentist-chair.png";
import iconTelemedicina from "../public/telemedicine.png";
import iconMedicalApp from "../public/medical-app.png";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

function HeroSection() {
  const [open, setOpen] = useState(false);
  const [presencial, setPresencial] = useState(true);

  const handleClose = () => setOpen(false);
  const handleOpenOnline = () => {
    setOpen(true);
    setPresencial(false);

    console.log(presencial);
  };
  const handleOpenPresencial = () => {
    setOpen(true);
    setPresencial(true);

    console.log(presencial);
  };

  const cancelButtonRef = useRef(null);
  return (
    <div>
      <div className="bg-gray-100">
        <section
          className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
              items-center min-h-screen"
        >
          <div className="fixed top-0 left-[10vw] items-center w-[80vw] z-30">
            <Navbar />
          </div>
          <div className="h-full absolute top-0 left-0 z-0">
            <Image
              src={background}
              alt=""
              className="w-full h-full object-cover opacity-20"
              width={500}
              height={500}
            />
          </div>

          <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
            <div>
              <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Una vida mejor comienza con una hermosa sonrisa.
              </h1>
              <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-12">
                Bienvenido a Allma centro odontologico especializada en
                Ortodoncia, donde la confianza y su comodidad son nuestras
                prioridades.
              </p>
              <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-6">
                Agenda una evaluacion con nuestro Director el Dr. Diego Morales
                Montecinos, fundador y especialista en ortodoncia y ortopedia
                dentomaxilar de la Universidad de Chille
              </p>
              <a
                href="#"
                className="px-8 py-4 bg-teal-500 text-white rounded flex mt-8 font-semibold w-full"
                onClick={handleOpenPresencial}
              >
                <Image
                  src={iconPresencial}
                  height={50}
                  width={50}
                  alt="logo atencion presencial"
                />
                <p className="self-center ml-7">
                  Agenda evaluacion Ortodoncia presencial gratuita
                </p>
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-teal-500 text-white rounded flex mt-8 font-semibold w-full align-middle "
              >
                <Image
                  src={iconTelemedicina}
                  height={50}
                  width={50}
                  alt="logo teledicina"
                />
                <p onClick={handleOpenOnline} className="self-center ml-7">
                  Agenda evaluacion Ortodoncia online gratuita
                </p>
              </a>
            </div>
            <div>
              {" "}
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  initialFocus={cancelButtonRef}
                  onClose={handleClose}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                          <div>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                              <CheckIcon
                                className="h-6 w-6 text-green-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="mt-3 text-center sm:mt-5">
                              <Dialog.Title
                                as="h3"
                                className="text-base font-semibold leading-6 text-gray-900"
                              >
                                Payment successful
                              </Dialog.Title>
                              <div className="mt-2">
                                {presencial ? (
                                  <p className="text-sm text-gray-500">
                                    Probando agenda presencial amet consectetur
                                    adipisicing elit. Eius aliquam laudantium
                                    explicabo pariatur iste dolorem animi vitae
                                    error totam. At sapiente aliquam accusamus
                                    facere veritatis.
                                  </p>
                                ) : (
                                  <p className="text-sm text-gray-500">
                                    Probando agenda online amet consectetur
                                    adipisicing elit. Eius aliquam laudantium
                                    explicabo pariatur iste dolorem animi vitae
                                    error totam. At sapiente aliquam accusamus
                                    facere veritatis.
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                              onClick={handleClose}
                            >
                              Deactivate
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                              onClick={handleClose}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;

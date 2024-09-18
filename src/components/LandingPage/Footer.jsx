import React from "react";
import udinus from "../../assets/landingpage/udinus.png";
import logo from "../../assets/landingpage/logo.png";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <>
      <footer className="mx-auto container py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-10 md:mb-0">
            <img src={udinus} alt="Logo UDINUS" className="w-[120px] mr-5" />
            <img src={logo} alt="IDSS Logo" className="w-[100px] mr-8" />
          </div>
          <div className="text-gray-700 text-center ml-5 md:text-left">
            <h2 className="font-bold text-lg mb-2">Intelligent Distributed Surveillance <br /> and Security (IDSS)</h2>
            <div className="flex items-center mb-2">
              <MapPinIcon className="h-5 w-5 mr-2 text-gray-600" />
              <p>Jalan Imam Bonjol No. 207, Semarang</p>
            </div>
            <div className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-600" />
              <p>Phone: +62-24-3517261</p>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-600" />
              <p>Email: <a href="mailto:idss@fasilkom.dinus.ac.id" className="text-blue-600 hover:underline">idss@fasilkom.dinus.ac.id</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
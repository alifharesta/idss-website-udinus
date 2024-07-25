import React from "react";
import logo from "../../assets/logo.svg";
import bghero from "../../assets/bghero.svg";
import search from "../../assets/search.svg";
export default function NavbarLP() {
  return (
    <nav>
      <div>
        <img src={bghero} className="w-full" />
      </div>
      <div className="fixed top-0 w-full text-white min-h-screen space-x-20">
        <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <img src={logo} className="text-2xl font-bold" />
          </div>
          <nav>
            <ul className="flex space-x-20">
              <li>
                <a href="#homepage" className="hover:underline">
                  Homepage
                </a>
              </li>
              <li>
                <a href="#profiles" className="hover:underline">
                  Profiles
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:underline">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-10">
          <img src={search} className="flex" />
            <input
              type="text"
              placeholder="Search.."
              className="bg-white text-center text-black p-2 rounded-md"
            />
          </div>
        </header>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Tambahkan impor ini
import logotext from "../../assets/landingpage/logotext.png";
import search from "../../assets/landingpage/search.png";

export default function NavbarLP() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container mx-auto py-4 px-8 w-full flex justify-between items-center">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Link to="/">
            <img
              src={logotext}
              className="mt-5 xl:w-[300px] lg:w-[200px] translate-x-[70px]"
              alt="Logo"
            />
          </Link>
          <div className="lg:hidden">
            {/* Mobile menu button */}
            <button
              className="text-black focus:outline-none"
              type="button"
              onClick={toggleMenu}
            >
              {/* Icon for mobile menu (burger icon) */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex text-black font-bold text-base flex-1 justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-20 text-md">
            <li>
              <Link to="/" className="hover:underline">
                Homepage
              </Link>
            </li>
            <li>
              <Link to="/profiles" className="hover:underline">
                Profiles
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:underline">
                News
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-2 sm:space-x-3 md:space-x-4 mt-4 md:mt-0">
          <img
            src={search}
            className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search.."
            className="bg-blue-900 text-center text-white font-bold p-1 sm:p-1.5 md:p-2 rounded-md text-sm sm:text-base"
          />
        </div>
      </div>
    </nav>
  );
}

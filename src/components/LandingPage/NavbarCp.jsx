import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logotext from "../../assets/landingpage/logotext.png";
import flag1 from "../../assets/landingpage/flag1.png";
import flag2 from "../../assets/landingpage/flag2.png";

export default function index(props) {

  const {t, i18n} = useTranslation();
  const [selectLang, setSelectLang] = useState("id");

  const handleLanguange = (lang) => {
    setSelectLang(lang);
    i18n.changeLanguage(lang);
  }
  //Change navbar color when scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition duration-700 ease-in-out  ${
        color
          ? "bg-white pt-[12px]"
          : "pt-[12px] lg:pt-[20px] bg-white lg:bg-transparent"
      } ${props.fix ? "lg:bg-white !pt-[12px]" : ""}`}
    >
      <header className="container m-auto font-roboto flex flex-wrap items-center justify-between px-2">
        <div className="flex  items-center justify-between w-full xl:w-auto">
          <a href="\" className="">
            <img src={logotext} alt="" className="!w-[350px]" />
          </a>
          <button
            id="hamburger"
            className="relative w-10 h-10 xl:hidden overflow-hidden"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <div
              role="hidden"
              id="line"
              className={` ${
                isNavExpanded ? "" : "-rotate-45 translate-y-2"
              } inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300`}
            ></div>
            <div
              role="hidden"
              id="line2"
              className={` ${
                isNavExpanded ? "visible translate-x-0" : "translate-x-10"
              } inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300`}
            ></div>
            <div
              role="hidden"
              id="line3"
              className={`${
                isNavExpanded ? "" : "rotate-45 -translate-y-2"
              } inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300`}
            ></div>
          </button>
        </div>
        <div
          id="navlinks"
          className={`relative  bg-white xl:bg-transparent font-bold font-poppins ${
            isNavExpanded
              ? "hidden -translate-y-[120%] lg:-translate-y-0"
              : "visible translate-y-2 rounded-lg p-5"
          } ${
            color ? "bg-white" : ""
          } w-full px-6 xl:visible xl:bg-transparent justify-center items-center  transition duration-300 ease-in-out xl:block xl:w-auto`}
        >
          <nav className=" w-full px-6  tracking-wide transition lg:w-auto  mr-7 lg:block">
            <ul className="text-[18px] flex flex-col  xl:flex-row items-center justify-around gap-[60px]">
              <li>
                <a
                  href="/"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  {t("navbar.homepage")}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </a>
              </li>
              <li>
                <a
                  href="/profiles"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  {t("navbar.profiles")}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </a>
              </li>
              <li>
                <Link
                  to="/news"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  {t("navbar.news")}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  {t("navbar.events")}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden xl:flex items-center space-x-2 sm:space-x-3 md:space-x-4 mt-4 md:mt-0">
          {/* Button Bahasa Indonesia */}
      <button
        onClick={() => handleLanguange("id")}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-300 ${
          selectLang === "id"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <span className="font-medium font-poppins text-md">ID</span>
        <img src={flag1} alt="ID Flag" className="w-8" />
      </button>

      {/* Button Bahasa Inggris */}
      <button
        onClick={() => handleLanguange("en")}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-300 ${
          selectLang === "en"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <span className="font-medium font-poppins text-md">EN</span>
        <img src={flag2} alt="EN Flag" className="w-8" />
      </button>
        </div>
      </header>
    </div>
  );
}

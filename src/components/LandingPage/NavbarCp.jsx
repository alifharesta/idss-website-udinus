import { useState } from "react";
import { Link } from "react-router-dom";
import logotext from "../../assets/landingpage/logotext.png";


export default function index(props) {

  // const {t, i18n} = useTranslation();
  // const [selectLang, setSelectLang] = useState("id");

  // const handleLanguange = (lang) => {
  //   setSelectLang(lang);
  //   i18n.changeLanguage(lang);
  // }

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
            <img src={logotext} alt="" className="!w-[350px] ml-10" />
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
          <nav className="tracking-wide transition lg:w-auto lg:block">
            <ul className="text-[18px] mr-72 flex flex-col  xl:flex-row items-center justify-around gap-[60px]">
              <li>
                <a  
                  href="/"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  Homepage
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </a>
              </li>
              <li>
                <a
                  href="/profiles"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  Profiles
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </a>
              </li>
              <li>
                <Link
                  to="/news"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  News
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  Events
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="group transition duration-300 hover:text-[#2196F3]"
                >
                  Publications
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3] text-white"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

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
      className={`fixed top-0 w-full z-50 transition duration-700 ease-in-out ${
        color
          ? "bg-white pt-[12px]"
          : "pt-[12px] lg:pt-[20px] bg-white lg:bg-transparent"
      } ${props.fix ? "lg:bg-white !pt-[12px]" : ""}`}
    >
      <header className="container mx-auto px-4 lg:px-14 py-2 lg:py-0 font-roboto flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between w-full xl:w-auto">
          <a href="\" className="">
            <img src={logotext} alt="" className="!w-[250px] md:!w-[350px] ml-4 md:ml-10" />
          </a>
          <button
            id="hamburger"
            className="relative w-10 h-10 xl:hidden overflow-hidden mr-4"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <div
              role="hidden"
              id="line"
              className={`${
                isNavExpanded ? "" : "-rotate-45 translate-y-2"
              } inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300`}
            ></div>
            <div
              role="hidden"
              id="line2"
              className={`${
                isNavExpanded ? "visible" : "opacity-0"
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
    
        {/* Mobile Navigation Overlay */}
        {!isNavExpanded && (
          <div onClick={() => setIsNavExpanded(!isNavExpanded)} className="fixed top-0 right-0 h-screen w-screen bg-black/40 z-[10]"></div>
        )}
        <div
          id="navlinks"
          className={`z-50 fixed top-0 right-0 h-screen w-[300px] bg-[#03103d] shadow-2xl xl:hidden transform transition-transform duration-300 ease-in-out ${
            isNavExpanded ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="p-6">
            <nav className="tracking-wide">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white text-xl font-bold">Menu</h2>
              <button onClick={() => setIsNavExpanded(!isNavExpanded)} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

              <ul className="flex flex-col space-y-6 text-[18px]">
                <li>
                  <a href="/" className="block py-2 group transition duration-300 text-white hover:text-[#2196F3] font-poppins">
                    Homepage
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                  </a>
                </li>
                <li>
                  <a href="/profiles" className="block py-2 group transition duration-300 text-white hover:text-[#2196F3] font-poppins">
                    Profiles
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                  </a>
                </li>
                <li>
                  <Link to="/news" className="block py-2 group transition duration-300 text-white hover:text-[#2196F3] font-poppins">
                    News
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="block py-2 group transition duration-300 text-white hover:text-[#2196F3] font-poppins">
                    Events
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/publications" className="block py-2 group transition duration-300 text-white hover:text-[#2196F3] font-poppins">
                    Publications
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/iprs" className="block py-2 group transition duration-300 text-white hover:text-[#2196F3] font-poppins">
                    IPRS
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    
        {/* Desktop Navigation */}
        <div className="hidden xl:block">
          <nav className="tracking-wide">
            <ul className="text-[18px] flex items-center gap-[60px]">
              <li>
                <a href="/" className="group transition duration-300 hover:text-[#2196F3] font-poppins">
                  Homepage
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                </a>
              </li>
              <li>
                <a href="/profiles" className="group transition duration-300 hover:text-[#2196F3] font-poppins">
                Profiles
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                </a>
              </li>
              <li>
                <a href="/news" className="group transition duration-300 hover:text-[#2196F3] font-poppins">
                News
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                </a>
              </li>
              <li>
                <a href="/events" className="group transition duration-300 hover:text-[#2196F3] font-poppins">
                Events
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                </a>
              </li>
              <li>
                <a href="/publications" className="group transition duration-300 hover:text-[#2196F3] font-poppins">
                Publications
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                </a>
              </li>
              <li>
                <a href="/iprs" className="group transition duration-300 hover:text-[#2196F3] font-poppins">
                IPRS
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2196F3]"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

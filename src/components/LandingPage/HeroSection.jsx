import { useNavigate } from "react-router-dom";
import arrow from "../../assets/landingpage/arrow.png";
// import lab2 from "../../assets/landingpage/lab2.jpg";
import latarlab from "../../assets/landingpage/latarlab.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate("/about"); // Navigate to the "About Us" page
  };

  return (
    <div className="relative mt-60">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Mobile image - shown only on small screens */}
          <div className="block md:hidden mb-8">
            <img
              src={latarlab}
              alt="labidss"
              className="h-[300px] w-full object-cover rounded-lg shadow-blue-300 shadow-xl"
            />
          </div>
          <div className="order-2 md:order-1">
            <h1 className="text-7xl font-bold ml-20 bg-gradient-to-b from-blue-700 to-blue-300 bg-clip-text text-transparent font-poppins">
              IDSS
              <br />
              <span className="mt-2 text-2xl font-poppins font-bold bg-gradient-to-b from-blue-500 to-blue-400 bg-clip-text text-transparent">
                Intelligent Distributed Surveillance and Security
              </span>
            </h1>
            <p className="text-xl lg:text-xl ml-20 text-gray-600 drop-shadow-xl rounded-xl font-poppins mt-6">
              Committed to being a pioneer in the research and development of
              distributed artificial intelligence-based surveillance and
              security technologies.
            </p>
            <div className="mt-10 ml-20 inline-block">
              <button
                onClick={handleClickAbout}
                className="bg-blue-400 text-black font-bold py-2 pl-8 pr-16 rounded-md hover:bg-blue-700 transition duration-1000 relative"
              >
                About Us
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-6 absolute right-7 top-1/2 transform -translate-y-1/2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* Desktop image - hidden on mobile */}
       <div className="absolute inset-0 hidden md:block">
        <img
          src={latarlab}
          alt="labidss"
          className="h-[600px] object-cover translate-y-[-120px] translate-x-[900px] rounded-lg shadow-blue-300 shadow-xl"
        />
      </div>
    </div>
  );
}

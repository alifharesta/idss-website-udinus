import { useNavigate } from "react-router-dom";
import arrow from "../../assets/landingpage/arrow.png";
import lab2 from "../../assets/landingpage/lab2.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate("/about"); // Navigate to the "About Us" page
  };

  return (
    <div className="relative mt-60">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-black drop-shadow-xl font-poppins">
              IDSS<br /><span className="mt-2 text-2xl font-poppins font-bold text-black drop-shadow-xl">Intelligent Distributed Surveillance and Security</span>
            </h1>
            <p className="text-xl lg:text-xl font-bold text-black drop-shadow-xl rounded-xl font-poppins mt-6">
              Committed to being a pioneer in the research and development of
              distributed artificial intelligence-based surveillance and security
              technologies.
            </p>
            <div className="mt-10 inline-block">
              <button 
                onClick={handleClickAbout} 
                className="bg-yellow-500 text-black font-bold py-2 pl-8 pr-16 rounded-md hover:bg-yellow-600 transition duration-1000 relative"
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
      <div className="absolute inset-0">
        <img
          src={lab2}
          alt="labidss"
          className="w-full h-[600px] object-cover translate-y-[-20%] opacity-50"
        />
      </div>
    </div>
  );
}

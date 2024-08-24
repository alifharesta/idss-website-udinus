import { useNavigate } from "react-router-dom";
import arrow from "../../assets/landingpage/arrow.png";
import lab2 from "../../assets/landingpage/lab2.jpg";

export default function HeroSection() {
  const navigate = useNavigate(); // Inisialisasi hook useNavigate

  const handleClickAbout = () => {
    navigate("/about"); // Navigasi ke halaman "About Us"
  };

  return (
    <div className="mx-auto container px-4 sm:px-8 md:px-16 lg:px-28 mt-32 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="order-2 md:order-1 z-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-black drop-shadow-lg font-poppins">
            IDSS<br /> (Intelligent Distributed Surveillance and Security)
          </h1> 
          <p className="text-xl lg:text-2xl font-bold text-black drop-shadow-lg rounded-xl font-poppins mt-6">
            Committed to being a pioneer in the research and development of
            distributed artificial intelligence-based surveillance and security
            technologies.
          </p>
          <div className="mt-10 inline-block">
            <button 
              onClick={handleClickAbout} // Mengatur event handler untuk klik
              className="bg-yellow-500 text-black font-bold py-2 pl-8 pr-16 rounded-md hover:bg-yellow-600 transition duration-300 relative"
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
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={lab2}
            alt="labidss"
            className="flex w-[1400px] h-[600px] mt-10 md:mt-0 rounded-xl absolute translate-y-[-45%] translate-x-[6.5%] opacity-50"
          />
        </div>
      </div>
    </div>
  );
}

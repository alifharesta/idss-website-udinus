import { useNavigate } from "react-router-dom";
import latarlab from "../../assets/landingpage/latarlab.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <div
        className="min-h-screen pt-24 relative bg-center bg-no-repeat object-cover"
        style={{
          backgroundImage: `url('/bg-hero-circullar.png')`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mt-12 ml-14">
            {/* Content Section */}
            <div className="col-span-1 w-full px-4 md:px-[60px] md:col-span-6 flex flex-col justify-center items-start gap-3 md:gap-6">              <h1 className="text-lg xs:text-xl sm:text-3xl md:text-5xl mt-14 font-bold text-gray-800 leading-tight font-poppins">
                IDSS <span className="text-lg xs:text-xl sm:text-3xl md:text-5xl">- Intelligent Distributed Surveillance and Security</span>
              </h1>
              <p className="text-xs xs:text-sm sm:text-base md:text-2xl font-medium text-gray-700 max-w-3xl leading-relaxed font-poppins">
                Committed to being a pioneer in the research and development of
                distributed artificial intelligence-based surveillance and
                security technologies.
              </p>

              {/* Stats and Button Section */}
              <div className="w-full md:mt-12 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <button
                  onClick={handleClickAbout}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-[30px] px-4 sm:px-6 py-2 sm:py-3"
                >
                  <p className="text-center text-white text-sm sm:text-base font-medium font-poppins">
                    About Us
                  </p>
                </button>

                {/* Stats Container */}
                <div className="w-full sm:w-auto flex justify-center gap-6 sm:gap-8 md:gap-12">
                  <div className="flex flex-col items-center">
                    <div className="text-gray-800 text-xl sm:text-3xl md:text-[45.71px] font-medium uppercase font-poppins">
                      500+
                    </div>
                    <div className="text-gray-700 text-xs sm:text-sm md:text-xl font-normal font-poppins">
                      Publication
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-gray-800 text-xl sm:text-3xl md:text-[45.71px] font-medium uppercase font-poppins">
                      10+
                    </div>
                    <div className="text-gray-700 text-xs sm:text-sm md:text-xl font-normal font-poppins">
                      Event
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden w-full">
                <img
                  src={latarlab}
                  alt="labidss"
                  className="w-full h-48 object-cover rounded-lg shadow-blue-300 shadow-xl"
                />
              </div>
            </div>

            {/* Desktop Image Section */}
            <div className="hidden md:block md:col-span-6 mt-14">
              <div className="flex justify-end">
                <img
                  src={latarlab}
                  alt="labidss"
                  className="w-[60%] object-cover rounded-lg shadow-blue-300 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#08325f] py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
            <div className="flex justify-center items-center flex-col gap-2">
              <div className="text-white text-2xl sm:text-3xl md:text-[45.71px] font-medium uppercase font-poppins">
                100+
              </div>
              <div className="text-white text-sm sm:text-base md:text-xl font-normal font-poppins">
                Peserta
              </div>
            </div>

            <div className="flex justify-center items-center flex-col gap-2">
              <div className="text-white text-2xl sm:text-3xl md:text-[45.71px] font-medium uppercase font-poppins">
                50+
              </div>
              <div className="text-white text-sm sm:text-base md:text-xl font-normal font-poppins">
                Pembimbing
              </div>
            </div>

            <div className="flex justify-center items-center flex-col gap-2">
              <div className="text-white text-2xl sm:text-3xl md:text-[45.71px] font-medium uppercase font-poppins">
                300+
              </div>
              <div className="text-white text-sm sm:text-base md:text-xl font-normal font-poppins">
                Research
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import latarlab from "../../assets/landingpage/latarlab.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate("/about"); // Navigate to the "About Us" page
  };

  return (
    <>
      <div
        className="min-h-[calc(100vh+2vh)] relative bg-center bg-no-repeat object-cover"
        style={{
          backgroundImage: `url('/bg-hero-circullar.png')`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left container mx-auto my-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Content Section */}
            <div className="col-span-1 md:col-span-6 flex flex-col justify-center items-start gap-4 md:gap-6">
              <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-800 leading-tight font-poppins">
                IDSS
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-tight font-poppins flex flex-col gap-3">
                <span>Intelligent Distributed</span>
                <span>Surveillance and Security</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-700 max-w-3xl leading-relaxed font-poppins">
                Committed to being a pioneer in the research and development of
                distributed artificial intelligence-based surveillance and
                security technologies.
              </p>

              {/* Stats and Button Section */}
              <div className="w-full mt-6 md:mt-12 flex flex-col sm:flex-row items-center gap-6">
                <button
                  onClick={handleClickAbout}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-[30px] px-6 py-3"
                >
                  <p className="text-center text-white text-base sm:text-lg font-medium font-poppins">
                    About Us
                  </p>
                </button>

                {/* Stats Container */}
                <div className="w-full sm:w-auto flex justify-center gap-8 sm:gap-12">
                  <div className="flex flex-col items-center">
                    <div className="text-gray-800 text-2xl sm:text-4xl md:text-[45.71px] font-medium uppercase font-poppins">
                      500+
                    </div>
                    <div className="text-gray-700 text-sm sm:text-base md:text-xl font-normal font-poppins">
                      Publication
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-gray-800 text-2xl sm:text-4xl md:text-[45.71px] font-medium uppercase font-poppins">
                      10+
                    </div>
                    <div className="text-gray-700 text-sm sm:text-base md:text-xl font-normal font-poppins">
                      Event
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={latarlab}
                alt="labidss"
                className="w-full md:w-[60%] sm:w-[80%] h-[20%] md:h-full sm:h-full object-cover rounded-lg shadow-blue-300 shadow-xl block md:hidden sm:hidden"
              />
            </div>

            {/* Image Section */}
            <div className="col-span-1 md:col-span-6 justify-center md:justify-end hidden md:flex sm:flex">
              <img
                src={latarlab}
                alt="labidss"
                className="w-[80%] md:w-[60%] h-[20%] md:h-full sm:h-full object-cover rounded-lg shadow-blue-300 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#08325f] py-12 md:py-20">
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

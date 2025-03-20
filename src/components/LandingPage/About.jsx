import arrow from "../../assets/landingpage/arrow.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function About() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };

  return (
    <section className="container mx-auto py-4 px-8 mt-24">
      <main className="container mx-auto px-4 mt-8">
        <button
          onClick={handleClickBack}
          className="inline-flex items-center bg-blue-400 hover:bg-blue-700 transition duration-1000 text-black font-bold font-poppins mb-10 py-2 px-4 rounded-md"
        >
          <img src={arrow} alt="arrow" className="w-6 mr-2 scale-x-[-1]" />
          <span className="hidden sm:inline">Back to Home</span>
        </button>
        <div className="container">
          <h1 className="text-5xl text-black font-medium mb-8 mt-4">
            About Us
          </h1>
        </div>

        <div className="flex justify-between items-start mb-16">
          <div className="w-full">
            <h2 className="text-3xl text-black font-poppins font-bold mb-2">
              IDSS
            </h2>
            <h3 className="text-xl text-black font-poppins font-semibold mb-4">
              Intelligent Distributed Surveillance & Security
            </h3>
            <p className="text-black font-poppins mb-4">
              Committed to being a pioneer in the research and development of
              distributed artificial intelligence-based surveillance and
              security technologies.
            </p>
            <p className="text-black font-poppins mb-4">
              Established in 2022, the IDSS is a research center within the
              Faculty of Computer Science at Dian Nuswantoro University. The
              center is dedicated to advancing AI methods and applications
              across six key areas:
            </p>
            <ul className="list-disc list-inside text-black font-poppins mb-4 pl-4">
              <li>Healthcare</li>
              <li>Gaming</li>
              <li>High-performance computing</li>
              <li>Natural disaster</li>
              <li>Smart societies, food and agriculture</li>
              <li>Data security</li>
            </ul>
          </div>
          {/* <div className="w-1/2"></div> image */}
        </div>
        <Footer />
      </main>
    </section>
  );
}

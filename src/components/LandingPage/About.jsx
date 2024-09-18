import arrow from "../../assets/landingpage/arrow.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function About() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/"); // Navigasi ke halaman utama
  };

  return (
    <section className="container mx-auto py-4 px-8 mt-24">
      <main className="container mx-auto px-4 mt-8">
        <div className="container mt-10">
          <button
            onClick={handleClickBack}
            className="relative inline-flex items-center bg-yellow-500 text-black text-xs font-bold font-poppins py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            <img
              src={arrow}
              alt="arrow"
              className="w-5 mr-2 scale-x-[-1]"
            />
            <span className="hidden sm:inline">Back to Homepage</span>
          </button>
          <h1 className="text-5xl text-black font-medium mb-8 mt-4">About Us</h1>
        </div>

        <div className="flex justify-between items-start mb-16">
          <div className="w-full">
            <h2 className="text-3xl text-black font-poppins font-bold mb-2">IDSS</h2>
            <h3 className="text-xl text-black font-poppins font-semibold mb-4">Intelligent Distributed Surveillance & Security</h3>
            <p className="text-black font-poppins mb-4">
              Committed to being a pioneer in the research and development of
              distributed artificial intelligence-based surveillance and security
              technologies.
            </p>
            <p className="text-black font-poppins mb-4">
              Established in 2022, the IDSS is a research center within the Faculty of Computer Science at Dian Nuswantoro University. The center is dedicated to advancing AI methods and applications across six key areas:
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
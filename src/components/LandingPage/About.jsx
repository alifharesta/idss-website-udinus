import NavbarLP from "./NavbarLP";
import arrow from "../../assets/landingpage/arrow.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function About() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/"); // Navigasi ke halaman utama
  };

  return (
    <section className="container mx-auto py-4 px-8">
      <NavbarLP />
      <main className="container mx-auto px-4 mt-8">
        <div className="container mt-10">
          <button
            onClick={handleClickBack} // Event handler untuk navigasi
            className="relative inline-flex items-center bg-yellow-500 text-black font-bold font-poppins py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            <img
              src={arrow}
              alt="arrow"
              className="w-6 mr-2 scale-x-[-1]"
            />
            Back to Homepage
          </button>
          <h1 className="text-5xl text-black font-medium mb-8 mt-4">About Us</h1>
        </div>

        <div className="flex justify-between items-start mb-16">
          <div className="w-1/2">
            <h2 className="text-3xl text-black font-poppins font-bold mb-2">IDSS</h2>
            <h3 className="text-xl text-black font-poppins font-semibold mb-4">Intelligent Distributed Surveillance & Security</h3>
            <p className="text-black font-poppins mb-4">
              Committed to being a pioneer in the research and development of
              distributed artificial intelligence-based surveillance and security
              technologies.
            </p>
          </div>
          {/* <div className="w-1/2"></div> image */}
        </div>

        <div className="flex justify-between mb-16">
          <div className="w-1/2">
            <h3 className="text-2xl text-black font-poppins font-bold mb-4">Our Visions</h3>
            <p className="text-black font-poppins font-light">
              At Acme Technology, our mission is to provide cutting-edge
              technology solutions that empower businesses to thrive in the digital
              age. We are committed to driving innovation and delivering exceptional
              value to our clients.
            </p>
          </div>
          <div className="w-1/2 px-10">
            <h3 className="text-2xl text-black font-poppins font-bold mb-4">Our Missions</h3>
            <ul className="space-y-4 text-black font-poppins font-light">
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <p>
                  Innovation: We are committed to pushing the boundaries of
                  technology and delivering cutting-edge solutions.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <p>
                  Excellence: Our goal is to exceed expectations and deliver
                  superior results.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <p>
                  Integrity: We uphold the highest standards of integrity in all of
                  our actions.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl text-black font-bold mb-8 text-center">Contents</h3>
        <div className="flex justify-between mb-16">
          {/* Tempatkan gambar di sini */}
        </div>

        <div className="text-center mb-16">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Achievements</h4>
          <h2 className="text-3xl font-bold mb-4">IDSS Achievements</h2>
          <p className="mb-8">
            We are proud of our accomplishments and the recognition we have received
            for our innovative solutions and exceptional service.
          </p>

          <div className="flex justify-between">
            <div className="text-center">
              <h5 className="font-semibold">Best Tech Innovator</h5>
              <p className="text-sm">2022 Industry Awards</p>
            </div>
            <div className="text-center">
              <h5 className="font-semibold">Top 50 Fastest Growing Companies</h5>
              <p className="text-sm">2021 Inc. 5000 List</p>
            </div>
            <div className="text-center">
              <h5 className="font-semibold">Highest Customer Satisfaction</h5>
              <p className="text-sm">2020 Customer Choice Awards</p>
            </div>
            <div className="text-center">
              <h5 className="font-semibold">Best Enterprise Solution</h5>
              <p className="text-sm">2019 Technology Innovation Awards</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </section>
  );
}

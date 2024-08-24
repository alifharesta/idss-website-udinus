import { Link } from "react-router-dom";
import bgprofil from "../../assets/landingpage/bgprofil.png";
import profildosen from "../../assets/landingpage/profildosen.png";
import NavbarLP from "../LandingPage/NavbarLP";

export default function SingleProfilesDetails() {
  return (
    <>
      <NavbarLP />
      <main className="container mx-auto px-10 mt-8 mb-10">
        <Link
          to="/profiles"
          className="text-black font-poppins font-semibold mb-4 inline-block"
        >
          ← Back to Profiles
        </Link>
        <h1 className="text-4xl text-black font-poppins font-bold mb-8">
          Personal Profile
        </h1>

        {/* Profile Header */}
        <div className="relative mb-8">
          <img
            src={bgprofil}
            alt="UDINUS Background"
            className="w-full object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/2"></div>
          <div className="absolute top-5 left-10 flex items-end">
            <img
              src={profildosen}
              alt="pak pulung"
              className="w-[220px] rounded-lg mr-4 border-4 border-white"
            />
            <div className="text-black font-poppins  translate-y-[-210px] ">
              <h2 className="text-3xl text-black font-bold mb-2">
                Prof. Dr. Pulung Nurtantio Andono
              </h2>
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=55924269600"
                className="text-blue-600 hover:underline mb-1 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scopus ID: 55924269600
              </a>
              <p className="mb-1">Sinta ID: Director</p>
            </div>
          </div>
        </div>

        {/* Research Output */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Research Output</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
        </section>
        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">
              Just greatest Article in the world
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-bold mb-4">
              Just greatest Article in the world
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
        </div>

        {/* Design Process */}
        <section>
          <h3 className="text-2xl font-bold mb-5">
            Design Process for Beginners
          </h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
        </section>
      </main>
    </>
  );
}

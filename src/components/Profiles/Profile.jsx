import NavbarLP from "../LandingPage/NavbarLP";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/landingpage/arrow.png";

export default function Profile() {
  const commitee = [
    {
      name: "Prof. Dr. Pulung Nurtantio Andono",
      role: "Advisory Board",
      scopusId: "55924269600",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=55924269600",
      sintaId: "",
      sintaLink: "",
    },
    {
      name: "Dr. Guruh Fajar Shidik",
      role: "Director",
      scopusId: "55668171000",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=55668171000",
      sintaId: "",
      sintaLink: "",
    },
    {
      name: "Dr. Catur Supriyanto",
      role: "Secretary 1",
      scopusId: "57211573458",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=57211573458",
      sintaId: "8989",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/8989",
    },
    {
      name: "Dr. Farrikh Al Zami",
      role: "Secretary 2",
      scopusId: "57190280279",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=57190280279",
      sintaId: "",
      sintaLink: "",
    },
    {
      name: "Junta Zeniarja",
      role: "Coordinator AI for Medical Science",
      scopusId: "55986865000",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=55986865000",
      sintaId: "",
      sintaLink: "",
    },
    {
      name: "Dr. Ricardus Anggi Pramunendar",
      role: "Coordinator AI for Natural Disaster",
      scopusId: "55747567200",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=55747567200",
      sintaId: "",
      sintaLink: "",
    },
    {
      name: "Hanny Haryanto",
      role: "Coordinator AI for Game",
      scopusId: "55844919300",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=55844919300",
      sintaId: "",
      sintaLink: "",
    },
    {
      name: "Aditya Nugraha",
      role: "Coordinator AI for Smart Society, Food, and Agriculture",
      scopusId: "57214303311",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=57214303311",
      sintaId: "",
      sintaLink: "",
    },
    {
      name: "Lekso Budi Handoko",
      role: "Coordinator AI for High Performance Computing",
      scopusId: "57211752939",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=57211752939",
      sintaId: "",
      sintaLink: "",
    },
    {
      name: "Ramadhan Rakhmat Sani",
      role: "Coordinator AI for Data Security",
      scopusId: "57205443190",
      scopusLink: "https://www.scopus.com/authid/detail.uri?authorId=57205443190",
      sintaId: "",
      sintaLink: "",
    },
  ];
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };

  return (
    <>
    <NavbarLP />
    <button
            onClick={handleClickBack} // Event handler untuk navigasi
            className="relative inline-flex items-center bg-yellow-500 text-black font-bold font-poppins mt-10 ml-24 py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            <img
              src={arrow}
              alt="arrow"
              className="w-6 mr-2 scale-x-[-1]"
            />
            Back to Homepage
          </button>
    <section className="container mx-auto px-24 py-8">
      <h1 className="text-4xl font-poppins font-bold mb-8">Commitee</h1>
      <ul className="space-y-6">
        {commitee.map((person, index) => (
          <li key={index} className="border-b pb-4">
            <h2 className="text-3xl font-poppins font-medium">{person.name}</h2>
            <p className="text-lg font-poppins">{person.role}</p>
            <div className="flex space-x-4 mt-2">
              {person.scopusLink && (
                <a
                  href={person.scopusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Scopus ID: {person.scopusId}
                </a>
              )}
              {person.sintaLink && (
                <a
                  href={person.sintaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Sinta ID: {person.sintaId}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
    </>
  );
}

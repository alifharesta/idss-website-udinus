import NavbarCp from "../LandingPage/NavbarCp";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/landingpage/arrow.png";

export default function Profile() {
  const commitee = [
    {
      name: "Pulung Nurtantio Andono",
      role: "Advisory Board, Professor in Informatics Engineering",
      scopusId: "55924269600",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=55924269600",
      sintaId: "5972581",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/5972581",
    },
    {
      name: "Guruh Fajar Shidik",
      role: "Director, Associate Professor",
      scopusId: "55668171000",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=55668171000",
      sintaId: "8999",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/8999",
    },
    {
      name: "Catur Supriyanto",
      role: "Secretary",
      scopusId: "57211573458",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=57211573458",
      sintaId: "8989",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/8989",
    },
    {
      name: "Farrikh Al Zami",
      role: "Secretary",
      scopusId: "57190280279",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=57190280279",
      sintaId: "6714047",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6714047",
    },
    {
      name: "Junta Zeniarja",
      role: "Coordinator AI for Medical Science",
      scopusId: "55986865000",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=55986865000",
      sintaId: "5979806",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/5979806",
    },
    {
      name: "Ricardus Anggi Pramunendar",
      role: "Coordinator AI for Natural Disaster",
      scopusId: "55747567200",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=55747567200",
      sintaId: "5973166",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/5973166",
    },
    {
      name: "Hanny Haryanto",
      role: "Coordinator AI for Game",
      scopusId: "55844919300",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=55844919300",
      sintaId: "8990",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/8990",
    },
    {
      name: "Aditya Nugraha",
      role: "Coordinator AI for Smart Society, Food, and Agriculture",
      scopusId: "57214303311",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=57214303311",
      sintaId: "6587317",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/6587317",
    },
    {
      name: "Lekso Budi Handoko",
      role: "Coordinator AI for High Performance Computing",
      scopusId: "57211752939",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=57211752939",
      sintaId: "8975",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/8975",
    },
    {
      name: "Ramadhan Rakhmat Sani",
      role: "Coordinator AI for Data Security",
      scopusId: "57205443190",
      scopusLink:
        "https://www.scopus.com/authid/detail.uri?authorId=57205443190",
      sintaId: "5977814",
      sintaLink: "https://sinta.kemdikbud.go.id/authors/profile/5977814",
    },
  ];
  const navigate = useNavigate();

  // const handleClickBack = () => {
  //   navigate("/");
  // };

  return (
    <>
      <NavbarCp />
      <section className="container mx-auto py-4 px-8 mt-24">
        {/* <button
          onClick={handleClickBack} // Event handler untuk navigasi
          className="inline-flex items-center bg-yellow-500 text-black font-bold font-poppins mb-16 py-2 px-4 rounded-md hover:bg-yellow-600"
        >
          <img src={arrow} alt="arrow" className="w-6 mr-2 scale-x-[-1]" />
          <span className="hidden sm:inline">Back to Homepage</span>
        </button> */}
        <h1 className="text-4xl font-poppins font-bold mb-8">Commitee</h1>
        <ul className="space-y-6">
          {commitee.map((person, index) => (
            <li key={index} className="border-b pb-4">
              <h2 className="text-3xl font-poppins font-medium">
                {person.name}
              </h2>
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

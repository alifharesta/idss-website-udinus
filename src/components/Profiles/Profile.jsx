import { useState, useEffect } from "react";
import NavbarCp from "../LandingPage/NavbarCp";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import scopusicon from "../../assets/landingpage/scopusicon.png";
import sintaicon from "../../assets/landingpage/sintaicon.jpeg";

export default function Profile() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("members")
        .select(
          `
          id,
          gelar_depan,
          gelar_belakang,
          nama,
          jabatan,
          bidang,
          scopus_id,
          sinta_id,
          created_at
        `
        )
        .order("created_at", { ascending: true });

      if (error) throw error;

      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarCp />
      <section className="container px-4 sm:px-6 md:px-8 lg:px-10 py-4 mt-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mt-4 mb-8 text-center">
          Committee
        </h1>
        <ul className="space-y-6">
          {members.map((person) => (
            <li key={person.id} className="border-b pb-4">
              <div className="flex flex-col space-y-2">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-medium text-center">
                    {person.gelar_depan} {person.nama}{" "}
                    {person.gelar_belakang && (
                      <span>
                        {Array.isArray(person.gelar_belakang)
                          ? person.gelar_belakang.join(", ")
                          : person.gelar_belakang}
                      </span>
                    )}
                  </h2>
                  <p className="mt-2 font-light text-sm sm:text-base md:text-lg font-poppins text-center">
                    {person.jabatan}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-poppins text-gray-600 text-center">
                    {person.bidang}
                  </p>
                </div>
                {/* profile container */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
                  <button className="bg-white text-white font-poppins">
                    {person.scopus_id && (
                      <a
                        href={`${person.scopus_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline text-xs sm:text-sm font-poppins"
                      >
                        <img
                          src={scopusicon}
                          alt="scopus"
                          className="w-4 h-4 inline-block mr-1"
                        />
                        SCOPUS
                      </a>
                    )}
                  </button>
                  <button className="bg-white text-white font-poppins">
                    {person.sinta_id && (
                      <a
                        href={`${person.sinta_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline text-xs sm:text-sm font-poppins"
                      >
                        <img
                          src={sintaicon}
                          alt="sintaicon"
                          className="w-4 h-4 inline-block mr-1"
                        />
                        SINTA
                      </a>
                    )}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

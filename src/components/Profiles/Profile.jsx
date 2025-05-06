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
        .select(`
          gelar,
          nama,
          jabatan,
          bidang,
          scopus_id,
          sinta_id,
          created_at
        `)
        .order("created_at", { ascending: true });
  
      if (error) throw error;
      
      console.log("Fetched members data:", data); // For debugging
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
      <section className="container ml-14 py-4 px-8 mt-24">
        <h1 className="text-4xl font-poppins font-bold mt-4 mb-8">Committee</h1>
        <ul className="space-y-6">
          {members.map((person) => (
            <li key={person.id} className="border-b pb-4">
              <div className="flex items-start space-x-4">
                <div>
                  <h2 className="text-3xl font-poppins font-medium">
                    {person.gelar} {person.nama}
                  </h2>
                  <p className="mt-2 font-light text-lg font-poppins">{person.jabatan}</p>
                  <p className="text-base font-poppins text-gray-600">{person.bidang}</p>
                  <div className="mt-2 translate-x-[-38px] translate-y-1 grid grid-cols-2">
                    <button className="bg-white text-white font-poppins">
                    {person.scopus_id && (
                      <a
                        href={`${person.scopus_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm font-poppins block"
                      >
                        <img src={scopusicon} alt="scopus" className="w-4 h-4 inline-block mr-1" />
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
                        className="text-blue-600 hover:text-blue-800 text-sm font-poppins block"
                      >
                        <img src={sintaicon} alt="sintaicon" className="w-4 h-4 inline-block mr-1" />
                        SINTA
                      </a>
                    )}
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
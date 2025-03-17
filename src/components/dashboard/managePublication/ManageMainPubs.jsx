import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabaseClient";
import edit from "../../../assets/landingpage/edit.png";
import del from "../../../assets/landingpage/delete.png";
import Swal from "sweetalert2";

export default function ManageMainPubs() {
  const [publication, setPublication] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublications();
  }, []);

  async function fetchPublications() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("publications")
        .select("*")

      if (error) throw error;
      setPublication(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching publications: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  const deletePublications = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const { error } = await supabase
          .from("publications")
          .delete()
          .eq("id", id);

        if (error) throw error;

        setPublication(publication.filter((item) => item.id !== id));

        fetchPublications();

        Swal.fire("Deleted!", "Your article has been deleted.", "success");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error deleting article: " + error.message,
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mx-auto mb-4">
        <Link to="add" className="p-2 bg-blue-500 text-white rounded-md">
          Add Publications
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Manage Publications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publication.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>
                <p
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      item.content?.length > 100
                        ? `${item.content.substring(0, 100)}...`
                        : item.content,
                  }}
                ></p>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-black font-bold">{item.author}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">
                      Publication Type:
                    </span>
                    <span className="text-sm text-gray-600">
                      {item.jenis}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">
                      Volume:
                    </span>
                    <span className="text-sm text-gray-600">{item.volume}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">
                      Issue:
                    </span>
                    <span className="text-sm text-gray-600">{item.issue}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">
                      Year:
                    </span>
                    <span className="text-sm text-gray-600">{item.tahun}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700">
                    Article URL:
                  </span>
                  <a
                    href={item.url_artikel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 break-all"
                  >
                    {item.url_artikel}
                  </a>
                </div>

                <div className="mt-4 flex justify-end space-x-2">
                  <Link to={`/dashboard/manage-publications/edit/${item.id}`}>
                    <img
                      src={edit}
                      alt="Edit"
                      className="w-6 h-6 cursor-pointer"
                    />
                  </Link>
                  <img
                    src={del}
                    alt="Delete"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => deletePublications(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

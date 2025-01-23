import { supabase } from "../services/supabaseClient";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function ArchiveEvents() {
  const [events, setArchive] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArchiveEvents();
  }, []);

  async function fetchArchiveEvents() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        // .is("deleted_at")
        .not('deleted_at', 'is', null)
        .order("deleted_at", { ascending: false });

      if (error) throw error;
      setArchive(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching news: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <div>
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Archive Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      item.content.length > 100
                        ? `${item.content.substring(0, 100)}...`
                        : item.content,
                  }}
                ></p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.author}</span>
                  <span className="text-sm text-gray-500">
                    {format(new Date(item.created_at), "dd/MM/yyyy")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mb-4">
            <button className="mt-10 py-2 px-5 bg-blue-500 text-white rounded-full">
                <Link to="/dashboard">Back</Link>
            </button>
            </div>
      </div>
    </>
  );
}

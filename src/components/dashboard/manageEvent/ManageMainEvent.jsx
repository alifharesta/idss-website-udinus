import { supabase } from "../../../services/supabaseClient";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Swal from "sweetalert2";
import edit from "../../../assets/landingpage/edit.png";
import del from "../../../assets/landingpage/delete.png";

export default function ManageMainEvent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .is("deleted_at", null)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setEvents(data);
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
  const deleteEvents = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const { data, error } = await supabase
          .from("events")
          .update({
            deleted_at: new Date().toISOString(),
          })
          .eq("id", id);

        fetchEvents();

        Swal.fire("Deleted!", "Your events has been deleted.", "success");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error deleting news: " + error.message,
      });
    }
  };

  if (loading) {
    return (
      <div>
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }
  return (
    <>
      <div className="mx-auto mb-4">
        <Link to="add" className="p-2 bg-blue-500 text-white rounded-md">
          Add Events
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Manage Events</h1>
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
                <div className="mt-4 flex justify-end space-x-2">
                  <Link to={`/dashboard/manage-events/edit/${item.id}`}>
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
                    onClick={() => deleteEvents(item.id)}
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

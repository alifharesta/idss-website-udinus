import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Swal from "sweetalert2";

function renderLeft(props) {
  const { event, isOdd } = props;
  const imageUrls = event.image_url ? event.image_url.split(",") : [];

  if (isOdd) {
    return (
      <div>
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <img
              key={index}
              src={url.trim()}
            className="bg-cover !w-96 h-[300px]"
              alt={`${item.title} - ${index + 1}`}
            />
          ))
        ) : (
          <p>No image available</p>
        )}
      </div>
    )
  }

  return (
    <div className="h-fit">
      <h2
        onClick={() => handleEventsDetail(item.slug)}
        className="cursor-pointer card-title text-lg font-poppins"
      >
        {item.title}
        {isRecent(item.published_at) && (
          <div className="badge badge-warning">NEW</div>
        )}
      </h2>
      <div
        className="line-clamp-2"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
      <div className="card-actions justify-end mt-2">
        <div className="badge badge-outline">
          {formatDate(item.published_at)}
        </div>
        <div className="badge badge-outline">{item.author}</div>
      </div>
    </div>
  );
}

export default function LatestEvents() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestEvents();
  }, []);

  async function fetchLatestEvents() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .is("deleted_at", null)
        .order("published_at", { ascending: false })
        .limit(3); //Show 3 latest news

      if (error) throw error;

      console.log("Fetched latest events:", data);
      setEvents(data);
    } catch (error) {
      console.error("Error fetching latest events:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching latest events: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  // Format date with null check
  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    try {
      return format(parseISO(dateString), "dd MMMM yyyy", { locale: id });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  // Check if date is recent (within 7 days) with null check
  const isRecent = (dateString) => {
    if (!dateString) return false;
    try {
      const date = parseISO(dateString);
      return date >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    } catch (error) {
      console.error("Error checking date:", error);
      return false;
    }
  };

  const handleEventsDetail = (slug) => {
    navigate(`/events/${slug}`);
  };

  const handleViewMore = () => {
    navigate("/events");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="mx-auto py-5 px-0">
        <div className="mt-0 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center">
          Our Events
        </div>
  
        <div className="grid justify-items-center justify-center gap-y-6 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mt-10">
          {events.map((item, index) => {
            const imageUrls = item.image_url ? item.image_url.split(",") : [];
            const isOdd = index % 2 === 0;
            if (isOdd) {
              return (
                <div className="card !flex !flex-row !w-full gap-6 rounded-lg  px-14">
                  <div className="h-fit">
                    <h2
                      onClick={() => handleEventsDetail(item.slug)}
                      className="cursor-pointer card-title text-lg font-poppins"
                    >
                      {item.title}
                      {isRecent(item.published_at) && (
                        <div className="badge badge-warning">NEW</div>
                      )}
                    </h2>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <div className="card-actions justify-end mt-2">
                      <div className="badge badge-outline">
                        {formatDate(item.published_at)}
                      </div>
                      <div className="badge badge-outline">{item.author}</div>
                    </div>
                  </div>
                  {imageUrls.length > 0 ? (
                    imageUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url.trim()}
                        className="bg-cover !w-96 h-[300px]"
                        alt={`${item.title} - ${index + 1}`}
                      />
                    ))
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
              );
            }
            return (
              <div className="card !flex !flex-row !w-full gap-6 px-14">
                  {imageUrls.length > 0 ? (
                    imageUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url.trim()}
                      className="bg-cover !w-96 h-[300px]"
                        alt={`${item.title} - ${index + 1}`}
                      />
                    ))
                  ) : (
                    <p>No image available</p>
                  )}

                  <div className="h-fit">
                    <h2
                      onClick={() => handleEventsDetail(item.slug)}
                      className="cursor-pointer card-title text-lg font-poppins"
                    >
                      {item.title}
                      {isRecent(item.published_at) && (
                        <div className="badge badge-warning">NEW</div>
                      )}
                    </h2>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <div className="card-actions justify-end mt-2">
                      <div className="badge badge-outline">
                        {formatDate(item.published_at)}
                      </div>
                      <div className="badge badge-outline">{item.author}</div>
                    </div>
                  </div>
              </div>
            )
          })}
        </div>
        <div className="mt-14 text-center">
          <button
            onClick={handleViewMore}
            className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg"
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
  
}

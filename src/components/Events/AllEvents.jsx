import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import arrowup from "../../assets/landingpage/arrowup.png";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Swal from "sweetalert2";

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

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-14">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-blue-600 hover:bg-blue-700 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2`}
      >
        <img src={arrowup} className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default function AllNews() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    fetchEvents();
  }, [currentPage]);

  async function fetchEvents() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false })
        .range((currentPage - 1) * pageSize, currentPage * pageSize - 1);

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNewsDetail = (slug) => {
    if (slug) {
      navigate(`/events/${slug}`);
    }
  };

  return (
    <>
      <section className="mx-auto px-0 mb-24">
        <div className="mt-28 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center ">
          All Events
        </div>

        <div className="grid justify-items-center justify-center gap-y-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10">
          {loading ? (
            <p>Loading events...</p>
          ) : (
            events.map((item) => (
              <div
                key={item.id}
                className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[200px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl"
              >
                <figure
                  onClick={() => handleNewsDetail(item.slug)}
                  className="cursor-pointer"
                >
                  <img
                    src={item.image_url}
                    className="bg-cover w-96 h-[300px]"
                    alt={item.title}
                  />
                </figure>
                <div className="card-body h-fit">
                  <h2
                    onClick={() => handleNewsDetail(item.slug)}
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
            ))
          )}
        </div>
      </section>
      <div className="mt-16 mb-10">
        <div className="join grid grid-cols-2 px-96 m-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="join-item btn btn-outline px-10"
          >
            Previous Events
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={news.length < pageSize}
            className="join-item btn btn-outline px-10"
          >
            Next Events
          </button>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

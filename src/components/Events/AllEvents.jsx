import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import arrowup from "../../assets/landingpage/arrowup.png";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Swal from "sweetalert2";
import ComingSoon from "../comingSoon/ComingSoon";
import SearchInput from "../search/SearchInput";

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

export default function AllEvents() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const pageSize = 6;

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  async function fetchEvents() {
    try {
      setLoading(true);
      let query = supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false })
        .is("deleted_at", null)
        .range((currentPage - 1) * pageSize, currentPage * pageSize - 1);

      // Add search filter if search term exists
      if (search) {
        query = query.or(
          `title.ilike.%${search}%, content.ilike.%${search}%, author.ilike.%${search}%`
        );
      }

      // Get the total count of events
      const { count: eventCount, error: countError } = await supabase
        .from("events")
        .select("*", { count: "exact" })
        .is("deleted_at", null);

      if (countError) throw countError;

      // Get paginated data
      const { data, error } = await query.range(
        (currentPage - 1) * pageSize,
        currentPage * pageSize - 1
      );


      console.log("countData", eventCount);
      setCount(eventCount);
      setEvents(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching events: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, [currentPage, search]);

  const handlePageChange = (eventsPage) => {
    setCurrentPage(eventsPage);
  };

  const handleEventsDetail = (slug) => {
    if (slug) {
      navigate(`/events/${slug}`);
    }
  };

  const isHaveNextPage = currentPage < count / pageSize;

  if (!loading && events.length === 0) {
    return <ComingSoon title="Events" />;
  }

  return (
    <>
      <section className="mx-auto px-0 mb-24">
        <div className="mt-28 text-4xl font-bold text-blue-900 stroke-slate-400 drop-shadow-lg text-center ">
          All Events
        </div>

        <SearchInput
          title="Search Events..."
          placeholder="Search Events..."
          className="w-[350px] sm:w-[200px] md:w-[500px] lg:w-72 xl:w-96"
          value={search}
          onChange={handleSearch}
        />

        {loading ? (<div className="w-full flex justify-center"><p>Loading Event...</p></div>) : (
          <div className="px-4 md:px-6 lg:px-8 grid grid-cols-12 py-16 mx-auto z-20">
            <ul className="lg:gap-16 sm:gap-8 grid grid-cols-12 col-span-10 col-start-2 gap-6">
              {/* Start */}
              {events.map((item) => (  
                <li key={item.id} className="mb-6 md:mb-0 col-span-12 sm:col-span-6 lg:col-span-4 bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div className="flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    {/* Image */}
                    <div className="aspect-w-16 aspect-h-9 md:aspect-h-full rounded-l-lg">
                      <img 
                        src={item.image_url} 
                        className="rounded-t-lg w-full h-48 md:h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                        alt={item.title || "Event image"}
                      />
                    </div>

                    <div className="p-4 md:p-6 flex-1">
                      <h6 className="mb-2 md:mb-4 font-sans text-sm md:text-base font-semibold text-red-500 uppercase">
                        Event {formatDate(item.published_at)}
                      </h6>
                      <h4 className="mb-2 font-sans text-xl md:text-2xl font-semibold text-blue-gray-900 line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="line-clamp-2 md:line-clamp-3 text-sm md:text-base text-gray-600"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
        
                      <button 
                        onClick={() => handleEventsDetail(item.slug)}
                        className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 mt-4 md:mt-6 font-sans text-xs md:text-sm font-bold text-red-500 hover:text-white uppercase transition-all rounded-lg bg-pink-500/10 hover:bg-red-500" 
                        type="button"
                      >
                        Lihat Detail
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}


      </section>
      <div className="mt-8 md:mt-16 mb-6 md:mb-10">
        <div className="flex justify-center px-4 md:px-8 lg:px-16">
          <div className="join grid grid-cols-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="join-item btn btn-outline px-4 md:px-10 text-sm md:text-base"
            >
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!isHaveNextPage}
              className="join-item btn btn-outline px-4 md:px-10 text-sm md:text-base"
            >
              <span className="hidden sm:inline">Next News</span>
              <span className="sm:hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

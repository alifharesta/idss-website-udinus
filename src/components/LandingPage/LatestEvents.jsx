import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Swal from "sweetalert2";

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
      <section className="bg-cover bg-center bg-no-repeat mb-10 relative px-4 md:px-6 lg:px-8">
        <div className="mt-8 md:mt-10 text-2xl md:text-3xl lg:text-4xl font-bold px-4 md:px-20 lg:px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center">
          Our Events
        </div>
      
        <div className="py-8 md:py-12 lg:py-16 mx-auto z-20">
          {events.map((item, index) => {
            const imageUrls = item.image_url ? item.image_url.split(",") : [];
            const isOdd = index % 2 !== 0;
            return (
              <div key={`event-${index}`} className="mb-8 last:mb-0">
                <div className="flex flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="block sm:hidden relative w-full md:w-2/5 overflow-hidden text-gray-700 bg-white rounded-t-xl md:rounded-l-xl md:rounded-tr-none group">
                    <div className="aspect-w-16 aspect-h-9 md:aspect-h-full">
                      <img 
                        src={imageUrls.length ? imageUrls[0].trim() : ''} 
                        className="w-full h-48 md:h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                        alt={item.title || "Event image"}
                      />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center p-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"> 
                          Event Date <br /> 
                          <span className="text-red-500"> {formatDate(item.published_at)}</span>
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* asd */}
                  {isOdd && (
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
                  )}

                  {/* Image Section Desktop */}
                  <div className={`hidden sm:block relative w-full md:w-2/5 overflow-hidden text-gray-700 bg-white group
                    ${isOdd ? 'rounded-r-xl md:rounded-r-xl' : 'rounded-l-xl md:rounded-l-xl'}`}>
                    <div className="aspect-w-16 aspect-h-9 md:aspect-h-full">
                      <img 
                        src={imageUrls.length ? imageUrls[0].trim() : ''} 
                        className="w-full h-48 md:h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                        alt={item.title || "Event image"}
                      />
                    </div>
                    {/* Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      ${isOdd ? 'rounded-r-xl md:rounded-r-xl' : 'rounded-l-xl md:rounded-l-xl'}`}>
                      <div className="text-center p-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"> 
                          Event Date <br /> 
                          <span className="text-red-500">{formatDate(item.published_at)}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
      
                  {/* Content Section */}
                  {!isOdd && (
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
                  )}
                </div>
              </div>
            );
          })}
        </div>
      
        {/* View More Button */}
        <div className="flex justify-center pb-8 md:pb-12">
          <button 
            onClick={handleViewMore}
            className="flex items-center gap-2 px-6 py-3 font-sans text-sm font-bold text-[#3699FF] hover:text-white uppercase transition-all rounded-lg bg-[#E1F0FF] hover:bg-[#3699FF]"
            type="button"
          >
            View More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
  
}

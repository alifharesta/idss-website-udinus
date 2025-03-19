import bgnews from "../../assets/landingpage/bgnews.png";
import bgnews1 from "../../assets/landingpage/bgnews1.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Swal from "sweetalert2";

export default function LatestNews() {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestNews();
  }, []);

  async function fetchLatestNews() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .is("deleted_at", null)
        .order("published_at", { ascending: false })
        .limit(3); //Show 3 latest news

      if (error) throw error;

      console.log("Fetched latest news:", data);
      setNews(data);
    } catch (error) {
      console.error("Error fetching latest news:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching latest news: " + error.message,
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

  const handleNewsDetail = (slug) => {
    navigate(`/news/${slug}`);
  };

  const handleViewMore = () => {
    navigate("/news");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <section className="mx-auto py-20 px-0">
        <div className="mt-40 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center">
          Latest News
        </div>
        <div className="left-0 right-0 justify-left absolute mt-10">
          <img src={bgnews} alt="bgnews" className="w-96" />
        </div>
        <div className="right-0 absolute mt-10">
          <img src={bgnews1} alt="bgnews" className="w-96" />
        </div>
  
        <div className="grid justify-items-center justify-center gap-y-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10">
          {news.map((item) => {
            const imageUrls = item.image_url ? item.image_url.split(",") : [];
  
            return (
              <div
                key={item.id}
                className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[400px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl"
              >
                <figure
                  onClick={() => handleNewsDetail(item.slug)}
                  className="cursor-pointer"
                >
                  {imageUrls.length > 0 ? (
                    imageUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url.trim()}
                        className="bg-cover w-96 h-[300px]"
                        alt={`${item.title} - ${index + 1}`}
                      />
                    ))
                  ) : (
                    <p>No image available</p>
                  )}
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
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={handleViewMore}
            className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg"
          >
            View More
          </button>
        </div>
      </section> */}
      <section className="bg-cover bg-center bg-no-repeat py-20 mb-10 relative">

        <div className="mt-10 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center">
          Latest News
        </div>
        <div className="px-4 md:px-6 lg:px-8 grid grid-cols-12 py-16 mx-auto z-20">
          <ul className="lg:gap-16 sm:gap-8 grid grid-cols-12 col-span-10 col-start-2 gap-6">
            {news.map((item) => {
              const imageUrls = item.image_url ? item.image_url.split(",") : [];
              return (
                <li key={item.id} className="mb-6 md:mb-0 col-span-12 sm:col-span-6 lg:col-span-4">
                  <a href="#" onClick={() => handleNewsDetail(item.slug)} className="block h-full">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img 
                        src={imageUrls.length ? imageUrls[0].trim() : ''} 
                        className="w-full h-[300px] object-cover rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" 
                        alt={item.title || "News image"} 
                      />
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500">
                        News
                      </span>
                      <p className="font-mono text-xs font-normal opacity-75 text-black">
                        {item.author} | {formatDate(item.published_at)}
                      </p>
                    </div>
                    <p className="font-display max-w-sm text-2xl font-bold leading-tight">
                      <span className="link-underline link-underline-black text-black">
                        {item.title}
                      </span>
                    </p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <button onClick={handleViewMore} className="flex items-center gap-2 px-6 py-3 font-sans text-sm font-bold text-[#3699FF] hover:text-white uppercase transition-all rounded-lg bg-[#E1F0FF] hover:bg-[#3699FF]" type="button">
            View More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        {/* <div className="absolute inset-0 z-0">
          <img src={bgnews} alt="bgnews" className="h-full object-cover opacity-30" />
        </div> */}

      </section>

    </>
  );
  
}

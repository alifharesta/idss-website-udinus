import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import arrowup from "../../assets/landingpage/arrowup.png";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ComingSoon from "../comingSoon/ComingSoon";

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

export default function AllPublication() {
  const navigate = useNavigate();
  const [publication, setPublication] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    fetchPublication();
  }, [currentPage]);

  async function fetchPublication() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("publications")
        .select("*")
        .range((currentPage - 1) * pageSize, currentPage * pageSize - 1);

      if (error) throw error;

      setPublication(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching publication: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  const handlePageChange = (publicationPage) => {
    setCurrentPage(publicationPage);
  };

  const handlePublicationDetail = (slug) => {
    if (slug) {
      navigate(`/publications/${slug}`);
    }
  };

  if (!loading && publication.length === 0) {
    return (
      <ComingSoon title="Publication" />
    )
  }

  return (
    <>
      <section className="mx-auto px-0 mb-24">
        <div className="mt-28 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center ">
          All Publication
        </div>

        <div className="grid justify-items-center justify-center gap-y-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10">
          {loading ? (
            <p>Loading publication...</p>
          ) : (
            publication.map((item) => (
              <div
                key={item.id}
                className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[200px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl"
              >
                <figure
                  onClick={() => handlePublicationDetail(item.slug)}
                  className="cursor-pointer"
                >
                </figure>
                <div className="card-body h-fit">
                  <h2
                    onClick={() => handlePublicationDetail(item.slug)}
                    className="cursor-pointer card-title text-lg font-poppins"
                  >
                    {item.judul}
                  </h2>
                  <div
                    className="line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  <div className="card-actions justify-end mt-2">
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
            Previous Publication
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={publication.length < pageSize}
            className="join-item btn btn-outline px-10"
          >
            Next Publication
          </button>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

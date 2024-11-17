import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import NavbarCp from "../LandingPage/NavbarCp";
import arrow from "../../assets/landingpage/arrow.png";
import Swal from "sweetalert2";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export default function EventsDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (slug) {
      setEvents(null);
      setLoading(false);
    } else {
      fetchEventsDetails();
    }
  }, [slug]);

  async function fetchEventsDetails() {
    try {
      setLoading(true);
      console.log("Fetching events with slug:", slug);

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        console.log("No events found with this slug", slug);
        setEvents(null);
      } else {
        console.log("Fetched events:", data);
        setEvents(data);
      }
    } catch (error) {
      console.error("Error fetching events detail:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching events detail: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  const handleClickBack = () => {
    navigate("/events");
  };

  if (loading) {
    return (
      <button
        disabled=""
        type="button"
        className="mt-20 ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          role="status"
          className="inline w-4 h-4 me-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Loading...
      </button>
    );
  }

  if (!events) {
    return <div>Events not found</div>;
  }

  return (
    <>
      <NavbarCp />
      <section className="container mx-auto py-10 px-5 sm:px-10 lg:px-24 mt-32">
        <button
          onClick={handleClickBack}
          className="inline-flex items-center bg-yellow-500 text-black font-bold font-poppins mb-10 py-2 px-4 rounded-md hover:bg-yellow-600"
        >
          <img src={arrow} alt="arrow" className="w-6 mr-2 scale-x-[-1]" />
          <span className="hidden sm:inline">Back to Events</span>
        </button>
        <h1 className="text-4xl font-poppins font-bold">{events.title}</h1>
        <img
          src={events.image_url}
          alt={events.title}
          className="w-[500px] mt-10 rounded-lg"
        />
        <div className="mt-5 text-sm text-gray-600">
          <span>
            {formatDate(events.published_at)}
          </span>
          <span className="font-bold ml-2">|</span>
          <span className="ml-2">{events.author}</span>
        </div>
        <div
          className="mt-10 text-xl font-poppins leading-loose text-justify"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </section>
    </>
  );
}

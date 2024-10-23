// import bgnews from "../../assets/landingpage/bgnews.png";
// import bgnews1 from "../../assets/landingpage/bgnews1.png";
// import news1 from "../../assets/landingpage/news1.jpg";
// import ricardus from "../../assets/landingpage/ricardus.jpg";
// import oncodoc from "../../assets/landingpage/oncodoc.jpg";
// import fotoxray from "../../assets/landingpage/fotoxray.png";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import arrowup from "../../assets/landingpage/arrowup.png";
// import { supabase } from "../../services/supabaseClient";

// const [news, setNews] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   fetchNews();
// }, []);

// //read all news from supabase
// async function fetchNews() {
//   try {
//     setLoading(true);
//     const { data, error } = await supabase
//       .from("news")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) throw error;
//     setNews(data);
//   } catch (error) {
//     alert("Error fetching news: " + error.message);
//   } finally {
//     setLoading(false);
//   }
// }

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   return (
//     <div className="fixed bottom-8 right-14">
//       <button
//         type="button"
//         onClick={scrollToTop}
//         className={`${
//           isVisible ? "opacity-100" : "opacity-0"
//         } bg-blue-600 hover:bg-blue-700  inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2`}
//       >
//         <img src={arrowup} className="h-6 w-6" aria-hidden="true" />
//       </button>
//     </div>
//   );
// };

// export default function LatestNews() {
//   const navigate = useNavigate();

//   //handler ke news detail dengan slug
//   const handleNewsDetail = (slug) => {
//     navigate(`/news/${slug}`);
//   };
//   return (
//     <>
//       <section className="mx-auto px-0 mb-24">
//         <div className="mt-24 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center ">
//           All News
//         </div>
//         <div className="left-0 right-0 justify-left absolute mt-10">
//           <img src={bgnews} alt="bgnews" className="w-96" />
//         </div>
//         <div className="right-0 absolute mt-10">
//           <img src={bgnews1} alt="bgnews" className="w-96" />
//         </div>

//         <div className="grid justify-items-center justify-center gap-y-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10">
//           {/* artikel 1 */}
//           <div className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[200px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl">
//             <figure
//               onClick={() => handleNewsDetail("drtpm-2024")}
//               className="cursor-pointer"
//             >
//               <img
//                 src={news1}
//                 className="bg-cover w-96 h-[300px]"
//                 alt="pengabdian masyarakat"
//               />
//             </figure>
//             <div className="card-body h-fit">
//               <h2
//                 onClick={() => handleNewsDetail("drtpm-2024")}
//                 className="cursor-pointer card-title text-lg font-poppins"
//               >
//                 DRTPM 2024 Grants Awarded to 19 Research Projects at IDSS,
//                 Exploring AI, Data Security, and HPC
//               </h2>
//               <p className="line-clamp-2">
//                 Several lecturers have successfully obtained grant funds from
//                 DRTPM 2024. Out of 31 research titles submitted, 19 have passed
//                 the selection process. These 19 research titles consist of 12
//                 fundamental research projects, 3 master's thesis research
//                 projects, 2 doctoral dissertation research projects, and 2
//                 applied research project.
//               </p>
//               <div className="card-actions justify-end mt-2">
//                 <div className="badge badge-outline">August 25, 2024</div>
//                 <div className="badge badge-outline">Admin IDSS</div>
//               </div>
//             </div>
//           </div>
//           {/* end of artikel 1 */}

//           {/* artikel 2 */}
//           <div className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[400px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl">
//             <figure
//               onClick={() => handleNewsDetail("katalis-2024")}
//               className="cursor-pointer"
//             >
//               <img
//                 src={ricardus}
//                 className="bg-cover w-96 h-[300px]"
//                 alt="pengabdian masyarakat"
//               />
//             </figure>
//             <div className="card-body h-fit">
//               <h2
//                 onClick={() => handleNewsDetail("katalis-2024")}
//                 className="cursor-pointer card-title text-lg font-poppins"
//               >
//                 Dr. Ricardus Receives DRTPM KATALIS Grant for Agriculture
//                 Research
//               </h2>
//               <p className="line-clamp-2">
//                 Dr. Ricardus Anggi Pramunendar successfully obtained funding
//                 through a research grant from DRTPM under the Strategic Research
//                 Collaboration or Kolaborasi Penelitian Strategis (KATALIS)
//                 scheme in 2024. The research members are Prof. Dr. Pulung
//                 Nurtantio Andono and Dr. Farrikh Al Zami. The KATALIS scheme is
//                 research in the form of a consortium consisting of 3-4 research
//                 teams from different universities.
//               </p>
//               <div className="card-actions justify-end mt-2">
//                 <div className="badge badge-outline">August 25, 2024</div>
//                 <div className="badge badge-outline">Admin IDSS</div>
//               </div>
//             </div>
//           </div>

//           {/* artikel 3 */}
//           <div className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[400px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl">
//             <figure
//               onClick={() => handleNewsDetail("oncodoc-app")}
//               className="cursor-pointer"
//             >
//               <img
//                 src={oncodoc}
//                 className="bg-cover w-96 h-[300px]"
//                 alt="healthy living"
//               />
//             </figure>
//             <div className="card-body h-fit">
//               <h2
//                 onClick={() => handleNewsDetail("oncodoc-app")}
//                 className="cursor-pointer card-title text-lg font-poppins"
//               >
//                 Oncodoc Application and Healthy Living Habits at Nurul Istiqomah
//                 Al Hira Orphanage
//                 <div className="badge badge-warning">NEW</div>
//               </h2>
//               <p className="line-clamp-2">
//                 Dinus Research Group for AI in Medical Science (DREAMS), part of
//                 IDSS, recently conducted a community service activity at Panti
//                 Asuhan Nurul Istiqomah Al Hira, located in Kelurahan Kandri,
//                 Kecamatan Gunungpati, Kota Semarang, on Saturday, September 7,
//                 2024. The event was attended by around 50 orphanage children and
//                 led by Budi Tri Priambodo, the head of the orphanage.
//               </p>
//               <div className="card-actions justify-end mt-2">
//                 <div className="badge badge-outline">September 7, 2024</div>
//                 <div className="badge badge-outline">Admin IDSS</div>
//               </div>
//             </div>
//           </div>

//           {/* artikel 4 */}
//           <div className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[400px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl">
//             <figure
//               onClick={() => handleNewsDetail("automated-xray")}
//               className="cursor-pointer"
//             >
//               <img
//                 src={fotoxray}
//                 className="bg-cover w-96 h-[300px] translate-y-[-10px] translate-x-1"
//                 alt="ai-imaging"
//               />
//             </figure>
//             <div className="card-body h-fit">
//               <h2
//                 onClick={() => handleNewsDetail("automated-xray")}
//                 className="cursor-pointer card-title text-lg font-poppins"
//               >
//                 Integrating AI Imaging and LLMs to Develop Automated X-ray
//                 Radiology Report System
//                 <div className="badge badge-warning">NEW</div>
//               </h2>
//               <p className="line-clamp-2">
//                 DREAMS (Dinus Research Group for AI in Medical Science), part of
//                 IDSS, in collaboration with DINUSTEK, is developing a
//                 disease-detection application focused on the chest area. The
//                 application can detect various diseases such as Atelectasis,
//                 Consolidation, Infiltration, Pneumothorax, and Edema using X-ray
//                 images. It identifies disease-affected areas in the chest by
//                 automatically providing mask annotations and generating
//                 radiology diagnosis reports. The application leverages deep
//                 learning and Large Language Models (LLMs) as its core
//                 approaches.
//               </p>
//               <div className="card-actions justify-end mt-2">
//                 <div className="badge badge-outline">September 18, 2024</div>
//                 <div className="badge badge-outline">Admin IDSS</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ScrollToTopButton />
//     </>
//   );
// }

import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import bgnews from "../../assets/landingpage/bgnews.png";
import bgnews1 from "../../assets/landingpage/bgnews1.png";
import arrowup from "../../assets/landingpage/arrowup.png";
import { useState, useEffect } from "react";

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
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setNews(data);
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

  const handleNewsDetail = (slug) => {
    console.log("Navigating to news with slug:", slug);
    if (slug) {
      navigate(`/news/${slug}`);
    } else {
      console.warn("Attempted to navigate with null or undefined slug");
    }
  };

  return (
    <>
      <section className="mx-auto px-0 mb-24">
        <div className="mt-24 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center ">
          All News
        </div>
        <div className="left-0 right-0 justify-left absolute mt-10">
          <img src={bgnews} alt="bgnews" className="w-96" />
        </div>
        <div className="right-0 absolute mt-10">
          <img src={bgnews1} alt="bgnews" className="w-96" />
        </div>

        <div className="grid justify-items-center justify-center gap-y-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10">
          {loading ? (
            <p>Loading news...</p>
          ) : (
            news.map((item) => (
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
                    {item.is_new && (
                      <div className="badge badge-warning">NEW</div>
                    )}
                  </h2>
                  <p className="line-clamp-2">{item.content}</p>
                  <div className="card-actions justify-end mt-2">
                    <div className="badge badge-outline">
                      {new Date(item.created_at).toLocaleDateString()}
                    </div>
                    <div className="badge badge-outline">{item.author}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
}

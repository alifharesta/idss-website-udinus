import bgnews from "../../assets/landingpage/bgnews.png";
import bgnews1 from "../../assets/landingpage/bgnews1.png";
import news1 from "../../assets/landingpage/news1.jpg";
import ricardus from "../../assets/landingpage/ricardus.jpg";
import oncodoc from "../../assets/landingpage/oncodoc.jpg";
import fotoxray from "../../assets/landingpage/fotoxray.png";
import { useNavigate } from "react-router-dom";
import { duration } from "@mui/material";

export default function LatestNews() {
  const navigate = useNavigate();

  //handler ke news detail dengan slug
  const handleNewsDetail = (slug) => {
    navigate(`/news/${slug}`);
  };

  //handler ke view more
  const handleViewMore = () => {
    navigate("/news");
  };

  return (
    <>
      <section className="mx-auto py-20 px-0">
        <div className="mt-40 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center ">
          Latest News
        </div>
        <div className="left-0 right-0 justify-left absolute mt-10">
          <img src={bgnews} alt="bgnews" className="w-96" />
        </div>
        <div className="right-0 absolute mt-10">
          <img src={bgnews1} alt="bgnews" className="w-96" />
        </div>

        <div className="grid justify-items-center justify-center gap-y-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10">
          {/* artikel 4 */}
          <div className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[400px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl">
            <figure
              onClick={() => handleNewsDetail("automated-xray")}
              className="cursor-pointer"
            >
              <img
                src={fotoxray}
                className="bg-cover w-96 h-[300px] translate-y-[-10px] translate-x-1"
                alt="ai-imaging"
              />
            </figure>
            <div className="card-body h-fit">
              <h2
                onClick={() => handleNewsDetail("automated-xray")}
                className="cursor-pointer card-title text-lg font-poppins"
              >
                Integrating AI Imaging and LLMs to Develop Automated X-ray
                Radiology Report System
                <div className="badge badge-warning">NEW</div>
              </h2>
              <p className="line-clamp-2">
                DREAMS (Dinus Research Group for AI in Medical Science), part of
                IDSS, in collaboration with DINUSTEK, is developing a
                disease-detection application focused on the chest area. The
                application can detect various diseases such as Atelectasis,
                Consolidation, Infiltration, Pneumothorax, and Edema using X-ray
                images. It identifies disease-affected areas in the chest by
                automatically providing mask annotations and generating
                radiology diagnosis reports. The application leverages deep
                learning and Large Language Models (LLMs) as its core
                approaches.
              </p>
              <div className="card-actions justify-end mt-2">
                <div className="badge badge-outline">September 18, 2024</div>
                <div className="badge badge-outline">Admin IDSS</div>
              </div>
            </div>
          </div>

          {/* artikel 3 */}
          <div className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[400px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl">
            <figure
              onClick={() => handleNewsDetail("oncodoc-app")}
              className="cursor-pointer"
            >
              <img
                src={oncodoc}
                className="bg-cover w-96 h-[300px]"
                alt="healthy living"
              />
            </figure>
            <div className="card-body h-fit">
              <h2
                onClick={() => handleNewsDetail("oncodoc-app")}
                className="cursor-pointer card-title text-lg font-poppins"
              >
                Oncodoc Application and Healthy Living Habits at Nurul Istiqomah
                Al Hira Orphanage
                <div className="badge badge-warning">NEW</div>
              </h2>
              <p className="line-clamp-2">
                Dinus Research Group for AI in Medical Science (DREAMS), part of
                IDSS, recently conducted a community service activity at Panti
                Asuhan Nurul Istiqomah Al Hira, located in Kelurahan Kandri,
                Kecamatan Gunungpati, Kota Semarang, on Saturday, September 7,
                2024. The event was attended by around 50 orphanage children and
                led by Budi Tri Priambodo, the head of the orphanage.
              </p>
              <div className="card-actions justify-end mt-2">
                <div className="badge badge-outline">September 7, 2024</div>
                <div className="badge badge-outline">Admin IDSS</div>
              </div>
            </div>
          </div>

          {/* artikel 2 */}
          <div className="card max-h-[1000px] bg-white text-black border-2 w-[350px] sm:w-[400px] md:w-[500px] lg:w-72 xl:w-96 shadow-xl rounded-xl">
            <figure
              onClick={() => handleNewsDetail("katalis-2024")}
              className="cursor-pointer"
            >
              <img
                src={ricardus}
                className="bg-cover w-96 h-[300px]"
                alt="pengabdian masyarakat"
              />
            </figure>
            <div className="card-body h-fit">
              <h2
                onClick={() => handleNewsDetail("katalis-2024")}
                className="cursor-pointer card-title text-lg font-poppins"
              >
                Dr. Ricardus Receives DRTPM KATALIS Grant for Agriculture
                Research
              </h2>
              <p className="line-clamp-2">
                Dr. Ricardus Anggi Pramunendar successfully obtained funding
                through a research grant from DRTPM under the Strategic Research
                Collaboration or Kolaborasi Penelitian Strategis (KATALIS)
                scheme in 2024. The research members are Prof. Dr. Pulung
                Nurtantio Andono and Dr. Farrikh Al Zami. The KATALIS scheme is
                research in the form of a consortium consisting of 3-4 research
                teams from different universities.
              </p>
              <div className="card-actions justify-end mt-2">
                <div className="badge badge-outline">August 25, 2024</div>
                <div className="badge badge-outline">Admin IDSS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
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

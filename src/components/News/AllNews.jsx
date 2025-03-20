import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import bgnews from "../../assets/landingpage/bgnews.png";
import bgnews1 from "../../assets/landingpage/bgnews1.png";
import news1 from "../../assets/landingpage/news1.jpg";
import arrowup from "../../assets/landingpage/arrowup.png";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Swal from "sweetalert2";
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
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage1, setCurrentPage1] = useState(1);
  const pageSize = 6;

  const [search, setSearch] = useState("");
  const handleSearch = (news) => {
    setSearch(news.target.value);
  };

  async function fetchNews() {
    try {
      setLoading(true);
      let query = supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false })
        .is("deleted_at", null);

      // Add search filter if search term exists
      if (search) {
        query = query.or(
          `title.ilike.%${search}%, content.ilike.%${search}%, author.ilike.%${search}%`
        );
      }

      const startIndex = (currentPage - 1) * ([1, 2].includes(currentPage) ? 5 : pageSize);
      const endIndex = currentPage * ([1, 2].includes(currentPage) ? 5 : pageSize) - 1;

      // Pagination Logic 
      const { data, error } = await query.range(startIndex, endIndex);

      if (error) throw error;

      let additionalArticle = {
        id: "drtpm-2024",
        slug: "drtpm-2024-grants-awarded",
        title:
          "DRTPM 2024 Grants Awarded to 19 Research Projects at IDSS, Exploring AI, Data Security, and HPC",
        content: `
          <p>Several lecturers have successfully obtained grant funds from DRTPM 2024. Out of 31 research titles submitted, 19 have passed the selection process. These 19 research titles consist of 12 fundamental research projects, 3 master's thesis research projects, 2 doctoral dissertation research projects, and 2 applied research projects. The research topics are divided into several areas: Artificial Intelligence (AI) for health, AI for data security, AI for smart society, AI for nature conservation, and High-Performance Computing (HPC).</p>
          <p>The number of research projects from FIK that have successfully received DRTPM grants continues to grow. With this funding, it is hoped that the quality of lecturers' research will improve and contribute significantly to society. Below are the titles that have received DRTPM 2024 funding:</p>
          <table class="min-w-full text-left text-sm border-collapse border-2 border-black">
            <thead class="border-2 bg-gray-200">
              <tr>
                <th class="border border-black px-4 py-2">No</th>
                <th class="border border-black px-4 py-2">Name</th>
                <th class="border border-black px-4 py-2">Title</th>
                <th class="border border-black px-4 py-2">Scheme</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td class="border px-4 py-2">1</td>
                  <td class="border px-4 py-2">Adhitya Nugraha, M.Cs</td>
                  <td class="border px-4 py-2">Lightweight dan Robust Model Berbasis Ensemble Learning untuk Deteksi Serangan IoT pada Edge Computing</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2</td>
                  <td class="border px-4 py-2">Dr. Aris Marjuni, M.Kom</td>
                  <td class="border px-4 py-2">Perbaikan Kualitas Citra dengan Pendekatan Twofold Transformation Berbasis Guided Filtering untuk Meningkatkan Visibilitas pada Pemandangan Berkabut</td>
                  <td class="border px-4 py-2">Disertasi Doktor</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">3</td>
                  <td class="border px-4 py-2">Dr. Catur Supriyanto, MCs</td>
                  <td class="border px-4 py-2">Pengembangan Sistem Informasi Geografis Berbasis Web untuk Pemetaan dan Monitoring Kualitas Air Sungai di Kota Bandung</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">4</td>
                  <td class="border px-4 py-2">Dr. Catur Supriyanto, MCs</td>
                  <td class="border px-4 py-2">Optimasi Model Deep Learning dengan Modifikasi Fungsi Aktivasi untuk Deteksi dan Klasifikasi Penyakit Kanker Payudara pada Citra Histopatologi</td>
                  <td class="border px-4 py-2">Tesis Magister</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">5</td>
                  <td class="border px-4 py-2">Dr. Catur Supriyanto, MCs</td>
                  <td class="border px-4 py-2">Peningkatan Keberagaman Data Menggunakan SMOTE-ENN untuk Klasifikasi Diagnosis Penyakit Diabetes Berbasis Stacking Ensemble Learning</td>
                  <td class="border px-4 py-2">Tesis Magister</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">6</td>
                  <td class="border px-4 py-2">Christy Atika Sari, M.Kom</td>
                  <td class="border px-4 py-2">Peningkatan Keamanan Smart Farming Berbasis Wireless Sensor Network Bentuk IoT Aeroponik Urban Farming Berbasis Quantum Cryptography</td>
                  <td class="border px-4 py-2">Terapan</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">7</td>
                  <td class="border px-4 py-2">Dr. Muljono, S.Si, M.Kom</td>
                  <td class="border px-4 py-2">Instrumen Pasien Monitor Hemoglobin dan Gula Darah Berbasis Deep Learning Multimodal Mini Array Spektrofotometri</td>
                  <td class="border px-4 py-2">Terapan</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">8</td>
                  <td class="border px-4 py-2">Dr. Muljono, S.Si, M.Kom</td>
                  <td class="border px-4 py-2">Pengembangan Metode Sentiment Analysis Berbahasa Indonesia Menggunakan Aspect Based Transform Learning Model</td>
                  <td class="border px-4 py-2">Disertasi Doktor</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">9</td>
                  <td class="border px-4 py-2">Dewi Agustini Santoso, M.Kom</td>
                  <td class="border px-4 py-2">Optimasi Pemilihan Produk dalam Parcel berbasis AI untuk Kelompok UMKM: Strategi Maksimalkan Nilai dan Efisiensi</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">10</td>
                  <td class="border px-4 py-2">Eko Hari Rachmawanto, M.Kom</td>
                  <td class="border px-4 py-2">Aplikasi Android Peningkatan Perlindungan Informasi Sensitif Citra Medis Berbasis Quantum Frequency Encryption, Arnold Cat Maps Scrambling, dan Discrete Wavelet Transform</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">11</td>
                  <td class="border px-4 py-2">Erika Devi Udayanti, M.Cs</td>
                  <td class="border px-4 py-2">Model Hybrid pada Sistem Monitoring Transportasi Cerdas untuk Mendeteksi Pelanggaran Berkendaraan mengggunakan Algoritma CNNLSTM</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">12</td>
                  <td class="border px-4 py-2">Dr. Farrikh Al Zami, M.Kom</td>
                  <td class="border px-4 py-2">Peningkatan Algoritma Deteksi Kelelahan pada CNN dengan pendekatan histogram menggunakan Data Kecil dan Lingkungan Minim Cahaya</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">13</td>
                  <td class="border px-4 py-2">Fauzi Adi Rafrastara, M.Cs</td>
                  <td class="border px-4 py-2">Deteksi Malware berbasis Machine Learning dan Seleksi Fitur untuk Melindungi Data pada Era Ekonomi Digital</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">14</td>
                  <td class="border px-4 py-2">Dr. Guruh Fajar Shidik, M.Cs</td>
                  <td class="border px-4 py-2">Sistem Peringatan Dini (Early Warning System) Dampak Bencana Alam Gempa Berbasis Internet of Things (IoT) dan Artificial Intelligent (AI)</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">15</td>
                  <td class="border px-4 py-2">Junta Zeniarja, M.Kom</td>
                  <td class="border px-4 py-2">Generative Empathetic Model for Artificial Therapeutic Intelligence (GEMATI): Inovasi Chatbot untuk Peningkatan Kesehatan Mental dan Kesejahteraan Psikologis di Indonesia</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">16</td>
                  <td class="border px-4 py-2">Lekso Budi Handoko, M.Kom</td>
                  <td class="border px-4 py-2">Optimisasi Efisiensi Energi pada Federated Edge Computing (FEC) melalui Peningkatan Fungsi Reward pada Agen Reinforcement Qlearning</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">17</td>
                  <td class="border px-4 py-2">Prof. Dr. Pulung Nurtantio Andono, ST, M.Kom</td>
                  <td class="border px-4 py-2">Pemetaan Hotspot Penangkapan Ikan dengan Memperhatikan Kesehatan Terumbu Karang melalui Pendekatan Computer Vision berbasis Convolution Neural Network dan Observasi Bumi</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">18</td>
                  <td class="border px-4 py-2">Prof. Dr. Pulung Nurtantio Andono, ST, M.Kom</td>
                  <td class="border px-4 py-2">Optimasi CNN melalui Pemilihan Metode Augmentasi Terbaik menggunakan Fox Optimization untuk Identifikasi Ikan</td>
                  <td class="border px-4 py-2">Tesis Magister</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">19</td>
                  <td class="border px-4 py-2">Dr. Ricardus Anggi Pramunendar, M.Cs</td>
                  <td class="border px-4 py-2">Pemetaan Tutupan Lahan untuk Manajemen Bencana Alam berbasis Computer Vision dan Adaptif Parameter CNN dalam Konteks Ekonomi Hijau</td>
                  <td class="border px-4 py-2">Fundamental</td>
                </tr>
              </tbody>
          </table>
        `,
        image_url: news1,
        published_at: new Date().toISOString(),
        author: "IDSS",
      };
      if (
        currentPage === 1 &&
        (!search || (additionalArticle.title.toLowerCase().includes(search) || additionalArticle.content.toLowerCase().includes(search)))
      ) {
        setNews([additionalArticle, ...data]);
        return;
      }

      setNews([...data]);
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
    setCurrentPage1(newPage);
  };

  const handleNewsDetail = (slug) => {
    if (slug) {
      navigate(`/news/${slug}`);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [currentPage, search]);

  return (
    <>
      <section className="mx-auto px-0 mb-24">

        <div className="mt-28 text-4xl font-bold text-blue-900 stroke-slate-400 drop-shadow-lg text-center ">
          All News
        </div>
        
        {/* <SearchInput
          title="Search News..."
          placeholder="Search News..."
          value={search}
          onChange={handleSearch}
        /> */}

        {/* <div className="grid justify-items-center justify-center gap-y-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10">
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
        </div> */}

        <div className="px-4 md:px-6 lg:px-8 grid grid-cols-12 py-8 mx-auto z-20">
          <ul className="lg:gap-16 sm:gap-8 grid grid-cols-12 col-span-10 col-start-2 gap-6">
            <li className="mb-6 md:mb-0 col-span-12 sm:col-span-12 lg:col-span-12">
              <SearchInput
                title="Search News..."
                placeholder="Search News..."
                value={search}
                onChange={handleSearch}
              />
            </li>
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
              disabled={news.length < pageSize}
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

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import NavbarCp from "../LandingPage/NavbarCp";
import arrow from "../../assets/landingpage/arrow.png";
import news1 from "../../assets/landingpage/news1.jpg";
import Swal from "sweetalert2";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export default function NewsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const additionalArticle = {
    id: "drtpm-2024",
    slug: "drtpm-2024-grants-awarded", 
    title:
      "DRTPM 2024 Grants Awarded to 19 Research Projects at IDSS, Exploring AI, Data Security, and HPC",
    content: `
      <p>Several lecturers have successfully obtained grant funds from DRTPM 2024. Out of 31 research titles submitted, 19 have passed the selection process. These 19 research titles consist of 12 fundamental research projects, 3 master's thesis research projects, 2 doctoral dissertation research projects, and 2 applied research projects. The research topics are divided into several areas: Artificial Intelligence (AI) for health, AI for data security, AI for smart society, AI for nature conservation, and High-Performance Computing (HPC).</p>
      <p>The number of research projects from FIK that have successfully received DRTPM grants continues to grow. With this funding, it is hoped that the quality of lecturers' research will improve and contribute significantly to society. Below are the titles that have received DRTPM 2024 funding:</p>
      <table class="min-w-full text-left text-sm border-collapse border border-black">
        <thead class="bg-gray-200">
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
    if (slug === additionalArticle.slug) {
      setNews(additionalArticle);
      setLoading(false);
    } else {
      fetchNewsDetail();
    }
  }, [slug]);

  async function fetchNewsDetail() {
    try {
      setLoading(true);
      console.log("Fetching news with slug:", slug);

      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        console.log("No news found with this slug", slug);
        setNews(null);
      } else {
        console.log("Fetched news:", data);
        setNews(data);
      }
    } catch (error) {
      console.error("Error fetching news detail:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching news detail: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  const handleClickBack = () => {
    navigate("/news");
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

  if (!news) {
    return <div>News not found</div>;
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
          <span className="hidden sm:inline">Back to News</span>
        </button>
        <h1 className="text-4xl font-poppins font-bold">{news.title}</h1>
        <img
          src={news.image_url}
          alt={news.title}
          className="w-[500px] mt-10 rounded-lg"
        />
        <div className="mt-5 text-sm text-gray-600">
          <span>
            {formatDate(news.published_at)}
          </span>
          <span className="font-bold ml-2">|</span>
          <span className="ml-2">{news.author}</span>
        </div>
        <div
          className="mt-10 text-xl font-poppins leading-loose text-justify"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </section>
    </>
  );
}

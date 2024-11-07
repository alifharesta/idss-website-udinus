import { id } from "date-fns/locale";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: {
    translation: {
      navbar: { homepage: "Homepage", profiles: "Profiles", news: "News" },
      about: {
        title: "About Us",
        back: "Back to Homepage",
        subtitle: "Intelligent Distributed Surveillance & Security",
        description1:
          "Committed to being a pioneer in the research and development of distributed artificial intelligence-based surveillance and security technologies.",
        description2:
          "Established in 2022, the IDSS is a research center within the Faculty of Computer Science at Dian Nuswantoro University. The center is dedicated to advancing AI methods and applications across six key areas:",
        areas: [
          "Healthcare",
          "Gaming",
          "High-performance computing",
          "Natural disaster",
          "Smart societies, food and agriculture",
          "Data security",
        ],
      },
      latestNews: {
        title: "Latest News",
        loading: "Loading...",
        error: "Error fetching latest news:",
        viewMore: "View More",
        newBadge: "NEW",
        noDate: "No date",
        invalidDate: "Invalid date",
      },
    },
  },
  id: {
    translation: {
      navbar: { homepage: "Beranda", profiles: "Profil", news: "Berita" },
      about: {
        title: "Tentang Kami",
        back: "Kembali ke Beranda",
        subtitle: "Intelligent Distributed Surveillance & Security",
        description1:
          "Berkomitmen untuk menjadi pelopor dalam penelitian dan pengembangan teknologi keamanan dan pengawasan berbasis kecerdasan buatan terdistribusi.",
        description2:
          "Berdiri pada tahun 2022, IDSS adalah pusat penelitian di Fakultas Ilmu Komputer Universitas Dian Nuswantoro. Pusat ini berdedikasi untuk memajukan metode dan aplikasi kecerdasan buatan di enam area kunci:",
        areas: [
          "Kesehatan",
          "Gaming",
          "Komputasi berkinerja tinggi",
          "Bencana alam",
          "Masyarakat pintar, pangan dan pertanian",
          "Keamanan data",
        ],
      },
      latestNews: {
        title: "Berita Terbaru",
        loading: "Memuat...",
        error: "Gagal mengambil berita terbaru:",
        viewMore: "Lihat Lebih Banyak",
        newBadge: "BARU",
        noDate: "Tidak ada tanggal",
        invalidDate: "Tanggal tidak valid",
      },
    },
  },
};

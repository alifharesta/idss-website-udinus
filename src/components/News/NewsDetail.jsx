import { useParams, useNavigate } from "react-router-dom";
import news1 from "../../assets/landingpage/news1.jpg";
import NavbarLP from "../LandingPage/NavbarLP";
import arrow from "../../assets/landingpage/arrow.png";
export default function NewsDetail() {
  const { slug } = useParams();
  const getNewsContent = (slug) => {
    const artikel = {
        "drtpm-2024": {
          title: (
            <h1 className="text-4xl font-poppins font-bold">
              Penelitian di Pusat Kajian IDSS yang berhasil mendapatkan pendanaan DRTPM 2024
            </h1>
          ),
          content: (
            <div className="text-xl font-poppins leading-loose text-justify">
              <p>
                Beberapa dosen di pusat kajian IDSS Universitas Dian Nuswantoro berhasil mendapatkan dana hibah Direktorat Riset, Teknologi, dan Pengabdian kepada Masyarakat (DRTPM) 2024. Sebanyak 17 judul dari 31 judul penelitian yang diajukan telah lolos seleksi. Tujuh belas judul penelitian tersebut terdiri dari 12 penelitian fundamental, 3 penelitian tesis magister, 1 penelitian disertasi doktor, dan 1 penelitian terapan. Judul-judul tersebut terbagi ke dalam beberapa topik penelitian, yaitu Artificial Intelligent (AI) untuk kesehatan, AI untuk data security, AI untuk smart society, AI untuk pelestarian alam, dan High Performance Computing (HPC).
              </p>
              <p className="mt-4">
                Jumlah penelitian yang lolos hibah DRTPM di FIK terus mengalami peningkatan. Dengan perolehan pendanaan penelitian DRTPM ini diharapkan penelitian dosen menjadi semakin berkualitas dan memberikan kontribusi kepada masyarakat. Berikut judul yang mendapat pendanaan DRTPM 2024 tersebut:
              </p>
      
              <table className="mt-10 w-full border-collapse border border-black">
                <thead>
                  <tr>
                    <th className="border border-black px-4 py-2">No</th>
                    <th className="border border-black text-center px-4 py-2">Dosen Pengusul</th>
                    <th className="border border-black text-center px-4 py-2">Judul</th>
                    <th className="border border-black text-center px-4 py-2">Skema</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-4 py-2">1</td>
                    <td className="border border-black px-4 py-2">Adhitya Nugraha, M.Cs</td>
                    <td className="border border-black px-4 py-2">Lightweight dan Robust Model Berbasis Ensemble Learning untuk Deteksi Serangan IoT pada Edge Computing</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">2</td>
                    <td className="border border-black px-4 py-2">Dr. Aris Marjuni, M.Kom</td>
                    <td className="border border-black px-4 py-2">Perbaikan Kualitas Citra dengan Pendekatan Twofold Transformation Berbasis Guided Filtering untuk Meningkatkan Visibilitas pada Pemandangan Berkabut</td>
                    <td className="border border-black px-4 py-2">Disertasi Doktor</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">3</td>
                    <td className="border border-black px-4 py-2">Dr. Catur Supriyanto, MCs</td>
                    <td className="border border-black px-4 py-2">IDSS-Net: Pengembangan Metode Baru Convolutional Neural Network untuk Deteksi Dini Penyakit Kanker Kulit Berbasis Incremental Dilated and Depthwise Separable Convolutions</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">4</td>
                    <td className="border border-black px-4 py-2">Dr. Catur Supriyanto, MCs</td>
                    <td className="border border-black px-4 py-2">Optimasi Model Deep Learning dengan Modifikasi Fungsi Aktivasi untuk Deteksi dan Klasifikasi Penyakit Kanker Payudara pada Citra Histopatologi</td>
                    <td className="border border-black px-4 py-2">Tesis Magister</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">5</td>
                    <td className="border border-black px-4 py-2">Dr. Catur Supriyanto, MCs</td>
                    <td className="border border-black px-4 py-2">Peningkatan Keberagaman Data Menggunakan SMOTE-ENN untuk Klasifikasi Diagnosis Penyakit Diabetes Berbasis Stacking Ensemble Learning</td>
                    <td className="border border-black px-4 py-2">Tesis Magister</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">6</td>
                    <td className="border border-black px-4 py-2">Christy Atika Sari, M.Kom</td>
                    <td className="border border-black px-4 py-2">Peningkatan Keamanan Smart Farming Berbasis Wireless Sensor Network Bentuk IoT Aeroponik Urban Farming Berbasis Quantum Cryptography</td>
                    <td className="border border-black px-4 py-2">Terapan</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">7</td>
                    <td className="border border-black px-4 py-2">Dewi Agustini Santoso, M.Kom</td>
                    <td className="border border-black px-4 py-2">Optimasi Pemilihan Produk dalam Parcel berbasis AI untuk Kelompok UMKM: Strategi Maksimalkan Nilai dan Efisiensi</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">8</td>
                    <td className="border border-black px-4 py-2">Eko Hari Rachmawanto, M.Kom</td>
                    <td className="border border-black px-4 py-2">Aplikasi Android Peningkatan Perlindungan Informasi Sensitif Citra Medis Berbasis Quantum Frequency Encryption, Arnold Cat Maps Scrambling, dan Discrete Wavelet Transform</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">9</td>
                    <td className="border border-black px-4 py-2">Erika Devi Udayanti, M.Cs</td>
                    <td className="border border-black px-4 py-2">Model Hybrid pada Sistem Monitoring Transportasi Cerdas untuk Mendeteksi Pelanggaran Berkendaraan mengggunakan Algoritma CNNLSTM</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">10</td>
                    <td className="border border-black px-4 py-2">Dr. Farrikh Al Zami, M.Kom</td>
                    <td className="border border-black px-4 py-2">Peningkatan Algoritma Deteksi Kelelahan pada CNN dengan pendekatan histogram menggunakan Data Kecil dan Lingkungan Minim Cahaya</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">11</td>
                    <td className="border border-black px-4 py-2">Fauzi Adi Rafrastara, M.Cs</td>
                    <td className="border border-black px-4 py-2">Deteksi Malware berbasis Machine Learning dan Seleksi Fitur untuk Melindungi Data pada Era Ekonomi Digital</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">12</td>
                    <td className="border border-black px-4 py-2">Dr. Guruh Fajar Shidik, M.Cs</td>
                    <td className="border border-black px-4 py-2">Sistem Peringatan Dini (Early Warning System) Dampak Bencana Alam Gempa Berbasis Internet of Things (IoT) dan Artificial Intelligent (AI)</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">13</td>
                    <td className="border border-black px-4 py-2">Junta Zeniarja, M.Kom</td>
                    <td className="border border-black px-4 py-2">Generative Empathetic Model for Artificial Therapeutic Intelligence (GEMATI): Inovasi Chatbot untuk Peningkatan Kesehatan Mental dan Kesejahteraan Psikologis di Indonesia</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">14</td>
                    <td className="border border-black px-4 py-2">Lekso Budi Handoko, M.Kom</td>
                    <td className="border border-black px-4 py-2">Optimisasi Efisiensi Energi pada Federated Edge Computing (FEC) melalui Peningkatan Fungsi Reward pada Agen Reinforcement Qlearning</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">15</td>
                    <td className="border border-black px-4 py-2">Prof. Dr. Pulung Nurtantio Andono, ST, M.Kom</td>
                    <td className="border border-black px-4 py-2">Pemetaan Hotspot Penangkapan Ikan dengan Memperhatikan Kesehatan Terumbu Karang melalui Pendekatan Computer Vision berbasis Convolution Neural Network dan Observasi Bumi</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">16</td>
                    <td className="border border-black px-4 py-2">Prof. Dr. Pulung Nurtantio Andono, ST, M.Kom</td>
                    <td className="border border-black px-4 py-2">Optimasi CNN melalui Pemilihan Metode Augmentasi Terbaik menggunakan Fox Optimization untuk Identifikasi Ikan</td>
                    <td className="border border-black px-4 py-2">Tesis Magister</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">17</td>
                    <td className="border border-black px-4 py-2">Dr. Ricardus Anggi Pramunendar, M.Cs</td>
                    <td className="border border-black px-4 py-2">Pemetaan Tutupan Lahan untuk Manajemen Bencana Alam berbasis Computer Vision dan Adaptif Parameter CNN dalam Konteks Ekonomi Hijau</td>
                    <td className="border border-black px-4 py-2">Fundamental</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
      "katalis-2024": {
        title:
        <h1 className="text-4xl font-poppins font-bold">Pendanaan Penelitian Skema Katalis 2024 oleh Peneliti IDSS</h1>,
        content: 
        <p className="text-xl font-poppins leading-loose text-justify">Dr. Ricardus Anggi Pramunendar berhasil memperoleh pendanaan melalui hibah penelitian dari DRTPM dengan skema Kolaborasi Penelitian Strategis (KATALIS) tahun 2024. Penelitian tersebut beranggotakan Prof. Pulung Nurtantio Andono dan Dr. Farrikh Al Zami. Skema KATALIS adalah penelitian dalam bentuk konsorsium yang terdiri dari 3-4 tim peneliti dari perguruan tinggi yang berbeda. Penelitian yang dilakukan oleh Dr. Ricardus melibatkan kerja sama dengan Universitas Lambung Mangkurat dan Universitas Sari Mulia.<br></br>
        <br></br>Penelitian dengan judul konsorsium ‘Presisi Pertanian untuk Ketahanan Pertanian terhadap Perubahan Iklim’ ini merupakan bagian dari upaya untuk mendukung pertanian yang lebih tangguh di tengah tantangan perubahan iklim global. Dalam skema KATALIS, setiap tim konsorsium diwajibkan untuk menghasilkan minimal satu publikasi di jurnal internasional bereputasi sebagai luaran penelitian. Inisiatif ini menunjukkan komitmen untuk meningkatkan kontribusi ilmiah Indonesia dalam mendukung inovasi pertanian melalui kolaborasi lintas institusi. Keberhasilan perolehan hibah ini menjadi langkah penting bagi Dr. Ricardus dan tim penelitiannya dalam upaya mewujudkan pertanian presisi yang berkelanjutan dan tahan terhadap perubahan iklim.
        </p>
      },
    };
    return artikel[slug];
  };
  const artikel = getNewsContent(slug);

  if (!artikel) {
    return <div>Artikel tidak ditemukan.</div>;
  }
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };

  return (
    <>
    <NavbarLP />
    <button
            onClick={handleClickBack} // Event handler untuk navigasi
            className="relative inline-flex items-center bg-yellow-500 text-black font-bold font-poppins mt-10 ml-24 py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            <img
              src={arrow}
              alt="arrow"
              className="w-6 mr-2 scale-x-[-1]"
            />
            Back to Homepage
          </button>
    <div className="container mx-auto py-10 px-24">
      <h1 className="text-4xl font-poppins font-bold">{artikel.title}</h1>
      <img src={news1} alt="pengabdian masyarakat" className="flex w-[400px] mt-10 " />
      <p className="mt-10">{artikel.content}</p>
    </div>
    </>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import news1 from "../../assets/landingpage/news1.jpg";
import ricardus from "../../assets/landingpage/ricardus.jpg";
import NavbarCp from "../LandingPage/NavbarCp";
import arrow from "../../assets/landingpage/arrow.png";
import oncodoc1 from "../../assets/landingpage/oncodoc1.jpg";
import oncodoc2 from "../../assets/landingpage/oncodoc2.jpg";
import oncodoc3 from "../../assets/landingpage/oncodoc3.jpg";
import dinustek from "../../assets/landingpage/dinustek.jpg";
import xray from "../../assets/landingpage/xray.jpg"; 

export default function NewsDetail() {
  const { slug } = useParams();
  const getNewsContent = (slug) => {
    const artikel = {
      "drtpm-2024": {
        title: (
          <h1 className="text-4xl font-poppins font-bold">
            DRTPM 2024 Grants Awarded to 19 Research Projects at IDSS, Exploring
            AI, Data Security, and HPC
          </h1>
        ),
        cover: <img src={news1} alt="" className="flex w-[400px] mt-10 " />,
        content: (
          <div className="text-xl container mx-auto font-poppins leading-loose text-justify">
            <p>
              Several lecturers have successfully obtained grant funds from
              DRTPM 2024. Out of 31 research titles submitted, 19 have passed
              the selection process. These 19 research titles consist of 12
              fundamental research projects, 3 master's thesis research
              projects, 2 doctoral dissertation research projects, and 2 applied
              research project. The research topics are divided into several
              areas: Artificial Intelligence (AI) for health, AI for data
              security, AI for smart society, AI for nature conservation, and
              High-Performance Computing (HPC).
            </p>
            <p className="mt-4">
              The number of research projects from FIK that have successfully
              received DRTPM grants continues to grow. With this funding, it is
              hoped that the quality of lecturers' research will improve and
              contribute significantly to society. Below are the titles that
              have received DRTPM 2024 funding:
            </p>

            <table className="mt-10 w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2">No</th>
                  <th className="border border-black text-center px-4 py-2">
                    Name
                  </th>
                  <th className="border border-black text-center px-4 py-2">
                    Title
                  </th>
                  <th className="border border-black text-center px-4 py-2">
                    Scheme
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* no 1 */}
                <tr>
                  <td className="border border-black px-4 py-2">1</td>
                  <td className="border border-black px-4 py-2">
                    Adhitya Nugraha, M.Cs
                  </td>
                  <td className="border border-black px-4 py-2">
                    Lightweight dan Robust Model Berbasis Ensemble Learning
                    untuk Deteksi Serangan IoT pada Edge Computing
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 2 */}
                <tr>
                  <td className="border border-black px-4 py-2">2</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Aris Marjuni, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Perbaikan Kualitas Citra dengan Pendekatan Twofold
                    Transformation Berbasis Guided Filtering untuk Meningkatkan
                    Visibilitas pada Pemandangan Berkabut
                  </td>
                  <td className="border border-black px-4 py-2">
                    Disertasi Doktor
                  </td>
                </tr>
                {/* no 3 */}
                <tr>
                  <td className="border border-black px-4 py-2">3</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Catur Supriyanto, MCs
                  </td>
                  <td className="border border-black px-4 py-2">
                    IDSS-Net: Pengembangan Metode Baru Convolutional Neural
                    Network untuk Deteksi Dini Penyakit Kanker Kulit Berbasis
                    Incremental Dilated and Depthwise Separable Convolutions
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 4 */}
                <tr>
                  <td className="border border-black px-4 py-2">4</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Catur Supriyanto, MCs
                  </td>
                  <td className="border border-black px-4 py-2">
                    Optimasi Model Deep Learning dengan Modifikasi Fungsi
                    Aktivasi untuk Deteksi dan Klasifikasi Penyakit Kanker
                    Payudara pada Citra Histopatologi
                  </td>
                  <td className="border border-black px-4 py-2">
                    Tesis Magister
                  </td>
                </tr>
                {/* no 5 */}
                <tr>
                  <td className="border border-black px-4 py-2">5</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Catur Supriyanto, MCs
                  </td>
                  <td className="border border-black px-4 py-2">
                    Peningkatan Keberagaman Data Menggunakan SMOTE-ENN untuk
                    Klasifikasi Diagnosis Penyakit Diabetes Berbasis Stacking
                    Ensemble Learning
                  </td>
                  <td className="border border-black px-4 py-2">
                    Tesis Magister
                  </td>
                </tr>
                {/* no 6 */}
                <tr>
                  <td className="border border-black px-4 py-2">6</td>
                  <td className="border border-black px-4 py-2">
                    Christy Atika Sari, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Peningkatan Keamanan Smart Farming Berbasis Wireless Sensor
                    Network Bentuk IoT Aeroponik Urban Farming Berbasis Quantum
                    Cryptography
                  </td>
                  <td className="border border-black px-4 py-2">Terapan</td>
                </tr>
                {/* no 7 */}
                <tr>
                  <td className="border border-black px-4 py-2">7</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Muljono, S.Si, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Instrumen Pasien Monitor Hemoglobin dan Gula Darah Berbasis
                    Deep Learning Multimodal Mini Array Spektrofotometri
                  </td>
                  <td className="border border-black px-4 py-2">Terapan</td>
                </tr>
                {/* no 8 */}
                <tr>
                  <td className="border border-black px-4 py-2">8</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Muljono, S.Si, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Pengembangan Metode Sentiment Analysis Berbahasa Indonesia
                    Menggunakan Aspect Based Transform Learning Model
                  </td>
                  <td className="border border-black px-4 py-2">
                    Disertasi Doktor
                  </td>
                </tr>
                {/* no 9 */}
                <tr>
                  <td className="border border-black px-4 py-2">9</td>
                  <td className="border border-black px-4 py-2">
                    Dewi Agustini Santoso, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Optimasi Pemilihan Produk dalam Parcel berbasis AI untuk
                    Kelompok UMKM: Strategi Maksimalkan Nilai dan Efisiensi
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 10 */}
                <tr>
                  <td className="border border-black px-4 py-2">10</td>
                  <td className="border border-black px-4 py-2">
                    Eko Hari Rachmawanto, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Aplikasi Android Peningkatan Perlindungan Informasi Sensitif
                    Citra Medis Berbasis Quantum Frequency Encryption, Arnold
                    Cat Maps Scrambling, dan Discrete Wavelet Transform
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 11 */}
                <tr>
                  <td className="border border-black px-4 py-2">11</td>
                  <td className="border border-black px-4 py-2">
                    Erika Devi Udayanti, M.Cs
                  </td>
                  <td className="border border-black px-4 py-2">
                    Model Hybrid pada Sistem Monitoring Transportasi Cerdas
                    untuk Mendeteksi Pelanggaran Berkendaraan mengggunakan
                    Algoritma CNNLSTM
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 12 */}
                <tr>
                  <td className="border border-black px-4 py-2">12</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Farrikh Al Zami, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Peningkatan Algoritma Deteksi Kelelahan pada CNN dengan
                    pendekatan histogram menggunakan Data Kecil dan Lingkungan
                    Minim Cahaya
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 13 */}
                <tr>
                  <td className="border border-black px-4 py-2">13</td>
                  <td className="border border-black px-4 py-2">
                    Fauzi Adi Rafrastara, M.Cs
                  </td>
                  <td className="border border-black px-4 py-2">
                    Deteksi Malware berbasis Machine Learning dan Seleksi Fitur
                    untuk Melindungi Data pada Era Ekonomi Digital
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 14 */}
                <tr>
                  <td className="border border-black px-4 py-2">14</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Guruh Fajar Shidik, M.Cs
                  </td>
                  <td className="border border-black px-4 py-2">
                    Sistem Peringatan Dini (Early Warning System) Dampak Bencana
                    Alam Gempa Berbasis Internet of Things (IoT) dan Artificial
                    Intelligent (AI).
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 15 */}
                <tr>
                  <td className="border border-black px-4 py-2">15</td>
                  <td className="border border-black px-4 py-2">
                    Junta Zeniarja, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Generative Empathetic Model for Artificial Therapeutic
                    Intelligence (GEMATI): Inovasi Chatbot untuk Peningkatan
                    Kesehatan Mental dan Kesejahteraan Psikologis di Indonesia
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 16 */}
                <tr>
                  <td className="border border-black px-4 py-2">16</td>
                  <td className="border border-black px-4 py-2">
                    Lekso Budi Handoko, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Optimisasi Efisiensi Energi pada Federated Edge Computing
                    (FEC) melalui Peningkatan Fungsi Reward pada Agen
                    Reinforcement Qlearning
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 17 */}
                <tr>
                  <td className="border border-black px-4 py-2">17</td>
                  <td className="border border-black px-4 py-2">
                    Prof. Dr. Pulung Nurtantio Andono, ST, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Pemetaan Hotspot Penangkapan Ikan dengan Memperhatikan
                    Kesehatan Terumbu Karang melalui Pendekatan Computer Vision
                    berbasis Convolution Neural Network dan Observasi Bumi
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
                {/* no 18 */}
                <tr>
                  <td className="border border-black px-4 py-2">18</td>
                  <td className="border border-black px-4 py-2">
                    Prof. Dr. Pulung Nurtantio Andono, ST, M.Kom
                  </td>
                  <td className="border border-black px-4 py-2">
                    Optimasi CNN melalui Pemilihan Metode Augmentasi Terbaik
                    menggunakan Fox Optimization untuk Identifikasi Ikan
                  </td>
                  <td className="border border-black px-4 py-2">
                    Tesis Magister
                  </td>
                </tr>
                {/* no 19 */}
                <tr>
                  <td className="border border-black px-4 py-2">19</td>
                  <td className="border border-black px-4 py-2">
                    Dr. Ricardus Anggi Pramunendar, M.Cs
                  </td>
                  <td className="border border-black px-4 py-2">
                    Pemetaan Tutupan Lahan untuk Manajemen Bencana Alam berbasis
                    Computer Vision dan Adaptif Parameter CNN dalam Konteks
                    Ekonomi Hijau
                  </td>
                  <td className="border border-black px-4 py-2">Fundamental</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      "katalis-2024": {
        title1: (
          <h1 className="text-4xl font-poppins font-bold">
            Dr. Ricardus Receives DRTPM KATALIS Grant for Agriculture Research
          </h1>
        ),
        cover1: <img src={ricardus} alt="" className="flex w-[400px] mt-10 " />,
        content1: (
          <p className="text-xl font-poppins leading-loose text-justify">
            Dr. Ricardus Anggi Pramunendar successfully obtained funding through
            a research grant from DRTPM under the Strategic Research
            Collaboration or Kolaborasi Penelitian Strategis (KATALIS) scheme in
            2024. The research members are Prof. Dr. Pulung Nurtantio Andono and
            Dr. Farrikh Al Zami. The KATALIS scheme is research in the form of a
            consortium consisting of 3-4 research teams from different
            universities. The research conducted by Dr. Ricardus involves
            collaboration with Universitas Lambung Mangkurat and Universitas
            Sari Mulia.<br></br>
            <br></br>The consortium's research, titled ‘Presisi Pertanian untuk
            Ketahanan Pertanian terhadap Perubahan Iklim’, aims to support more
            resilient agriculture in the face of global climate change
            challenges. In the KATALIS, each consortium team is required to
            produce at least one publication in a reputable international
            journal as a research output. This initiative demonstrates a
            commitment to increasing Indonesia's scientific contribution to
            supporting agricultural innovation through cross-institutional
            collaboration. The success of obtaining this grant is an important
            step for Dr. Ricardus and his research team in their efforts to
            realize sustainable and climate change-resistant precision
            agriculture.
          </p>
        ),
      },
      "oncodoc-app": {
        title2: (
          <h1 className="text-4xl font-poppins font-bold">
            Oncodoc Application and Healthy Living Habits at Nurul Istiqomah Al
            Hira Orphanage
          </h1>
        ),
        content2: (
          <>
            <div className="carousel w-full rounded-md">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={oncodoc1} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={oncodoc2} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={oncodoc3} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xl font-poppins leading-loose text-justify mt-5">
              Dinus Reserch Group for AI in Medical Science (DREAMS), part of
              IDSS, recently conducted a community service activity at Panti
              Asuhan Nurul Istiqomah Al Hira, located in Kelurahan Kandri,
              Kecamatan Gunungpati, Kota Semarang, on Saturday, September 7,
              2024. The event was attended by around 50 orphanage children and
              led by Budi Tri Priambodo, the head of the orphanage.<br></br>
              <br></br>
              This event was part of the Community Partnership Program led by
              Abu Salam, with support from several faculty members including
              Yani Parti Astuti, Catur Supriyanto, Ardytha Luthfiarta, Cinantya
              Paramita, Sindhu Rakasiwi, and Danang Wahyu Utomo. The program
              activity was also joined by Dhita Aulia Octaviani, a lecturer from
              Poltekkes Kemenkes Semarang, who provided material on healthy
              living behaviors.<br></br>
              <br></br>
              During the event, DREAMS IDSS introduced the Oncodoc application
              designed to support self-monitoring of health. Oncodoc is a mobile
              application for early detection of cancer. This application is
              expected to help the students monitor their health conditions and
              obtain accurate information on preventive measures and care.
              Additionally, the event focused on educating about healthy living
              behaviors, including healthy eating, the importance of exercise,
              and personal hygiene habits. Through interactive and practical
              material presentation, the students are expected to apply this
              knowledge in their daily lives, thereby enhancing their learning
              activities.<br></br>
              <br></br>
              Abu Salam, the head of the event, explained that the main goal of
              the activity is to provide knowledge and tools needed for the
              students to maintain their health, which in turn will help them in
              their educational process. The activity received positive feedback
              from the orphanage children, who felt better informed about the
              importance of healthy living behaviors and the use of technology
              for monitoring their health. With this program, it is hoped that
              students will become more self-reliant in maintaining their health
              and managing their daily activities more effectively.<br></br>
              <br></br>
              This activity is a tangible example of DREAMS' commitment to
              applying scientific knowledge for the community and directly
              contributing to the improvement of quality of life and community
              health.
            </p>
          </>
        ),
      },
      "automated-xray": {
        title3: (
          <h1 className="text-4xl font-poppins font-bold">
            Integrating AI Imaging and LLMs to Develop Automated X-ray Radiology
            Report System
          </h1>
        ),
        content3: (
          <>
            <div className="carousel w-full rounded-md">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={dinustek} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={xray} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xl font-poppins leading-loose text-justify mt-5 mb-10">
              DREAMS (Dinus Research Group for AI in Medical Science), part of
              IDSS, in collaboration with DINUSTEK, is developing a
              disease-detection application focused on the chest area. The
              application can detect various diseases such as Atelectasis,
              Consolidation, Infiltration, Pneumothorax, and Edema using X-ray
              images. It identifies disease-affected areas in the chest by
              automatically providing mask annotations and generating radiology
              diagnosis reports. The application leverages deep learning and
              Large Language Models (LLMs) as its core approaches.
            </p>
          </>
        ),
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
      <NavbarCp />

      <section className="container mx-auto py-10 px-5 sm:px-10 lg:px-24 mt-32">
        <button
          onClick={handleClickBack} // Event handler untuk navigasi
          className="inline-flex items-center bg-yellow-500 text-black font-bold font-poppins mb-10 py-2 px-4 rounded-md hover:bg-yellow-600"
        >
          <img src={arrow} alt="arrow" className="w-6 mr-2 scale-x-[-1]" />
          <span className="hidden sm:inline">Back to Homepage</span>
        </button>
        {/* artikel 1 drtpm 2024 */}
        <h1 className="text-4xl font-poppins font-bold">{artikel.title}</h1>
        {artikel.cover}
        <p className="mt-10">{artikel.content}</p>

        {/* artikel 2 skema katalis */}
        <h1 className="text-4xl font-poppins font-bold">{artikel.title1}</h1>
        {artikel.cover1}
        <p className="mt-10">{artikel.content1}</p>

        {/* artikel 3 Oncodoc Application  */}
        <h1 className="text-4xl font-poppins font-bold">{artikel.title2}</h1>
        {artikel.cover2}
        <p className="mt-10">{artikel.content2}</p>

        {/* artikel 4 Ai Imaging  */}
        <h1 className="text-4xl font-poppins font-bold">{artikel.title3}</h1>
        {artikel.cover3}
        <p className="mt-10">{artikel.content3}</p>
      </section>
    </>
  );
}

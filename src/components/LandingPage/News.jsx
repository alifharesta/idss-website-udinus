import bgnews from "../../assets/landingpage/bgnews.png";
import bgnews1 from "../../assets/landingpage/bgnews1.png";
import news1 from "../../assets/landingpage/news1.jpg";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();

  //handler ke news detail dengan slug
  const handleNewsDetail = (slug) => {
    navigate(`/news/${slug}`);
  }
  return (
    <>
    <section className="mx-auto container py-20 px-10">
      <div className="mt-32 text-4xl font-bold px-40 text-blue-900 stroke-slate-400 drop-shadow-lg text-center">
        Latest News
      </div>
      <div className="flex left-0 right-0 justify-left absolute mt-10">
        <img src={bgnews} alt="bgnews" className="w-96" />
      </div>
      <div className="flex right-0 justify-right absolute mt-10">
        <img src={bgnews1} alt="bgnews" className="w-96" />
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 mt-10 translate-x-60">
        <div className="card bg-blue-900 text-white border-2 w-96 shadow-xl rounded-xl">
          <figure onClick={() => handleNewsDetail('drtpm-2024')} className="cursor-pointer">
            <img src={news1} alt="pengabdian masyarakat" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-poppins">
              Penelitian di Pusat Kajian IDSS yang berhasil mendapatkan
              pendanaan DRTPM 2024
              <div className="badge badge-warning">NEW</div>
            </h2>
            <p>
              Beberapa dosen di pusat kajian IDSS Universitas Dian Nuswantoro
              berhasil mendapatkan dana hibah...
            </p>
            <div className="card-actions justify-end mt-2">
              <div className="badge badge-outline">August 25, 2024</div>
              <div className="badge badge-outline">Admin IDSS</div>
            </div>
          </div>
        </div>
        <div className="card bg-blue-900 text-white border-2 w-96 shadow-xl">
          <figure onClick={() => handleNewsDetail('katalis-2024')} className="cursor-pointer">
            <img src={news1} alt="pengabdian masyarakat" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-poppins">
              Pendanaan Penelitian Skema Katalis 2024 oleh Peneliti IDSS
              <div className="badge badge-warning">NEW</div>
            </h2>
            <p>
              Penelitian dengan judul konsorsium ‘Presisi Pertanian untuk
              Ketahanan Pertanian terhadap Perubahan Iklim’ ini merupakan bagian
              dari upaya untuk mendukung pertanian yang lebih tangguh di tengah
              tantangan perubahan iklim global....
            </p>
            <div className="card-actions justify-end mt-2">
              <div className="badge badge-outline">August 25, 2024</div>
              <div className="badge badge-outline">Admin IDSS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
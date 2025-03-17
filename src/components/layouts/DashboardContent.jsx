import { Link } from "react-router-dom";
import box from "../../assets/landingpage/box.png";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";

export default function DashboardContent() {
  const [newsCount, setNewsCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [publikasiCount, setPublikasiCount] = useState(0);
  const [anggotaCount, setAnggotaCount] = useState(0);

  const getDataNews = async () => {
    const { count: newsCount, error: countError } = await supabase
      .from("news")
      .select("*", { count: "exact" })
      .is("deleted_at", null);

    if (countError) throw countError;
    setNewsCount(newsCount);
  };

  const getDataEvent = async () => {
    const { count: eventCount, error: countError } = await supabase
      .from("events")
      .select("*", { count: "exact" })
      .is("deleted_at", null);

    if (countError) throw countError;
    setEventCount(eventCount);
  };

  const getDataPublikasi = async () => {
    const { count: publikasiCount, error: countError } = await supabase
      .from("publications")
      .select("*", { count: "exact" });

    if (countError) throw countError;
    setPublikasiCount(publikasiCount);
  };

  const getDataAnggota = async () => {
    const { count: anggotaCount, error: countError } = await supabase
      .from("members")
      .select("*", { count: "exact" });

    if (countError) throw countError;
    setAnggotaCount(anggotaCount);
  };



  useEffect(() => {
    getDataNews();
    getDataEvent();
    getDataPublikasi();
    getDataAnggota();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Berita</h2>
          <p className="text-3xl font-bold">{newsCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Event</h2>
          <p className="text-3xl font-bold">{eventCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Publikasi</h2>
          <p className="text-3xl font-bold">{publikasiCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Anggota</h2>
          <p className="text-3xl font-bold">{anggotaCount}</p>
        </div>
      </div>
        <div className="dropdown dropdown-right dropdown-hover mt-80">
          <div tabIndex={0} role="button" className="btn m-1 bg-blue-600 text-white font-bold text-lg">
            <img src={box} alt="archive" className="w-6 mr-3 inline-block" />
            Archive
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-blue-400 rounded-box z-10 w-52 p-2 shadow"
          >
            <li className="hover:bg-blue-500 rounded-box text-white">
              <Link to="/dashboard/archive-news">Archive News</Link>
            </li>
            <li className="hover:bg-blue-500 rounded-box text-white">
            <Link to="/dashboard/archive-events">Archive Events</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

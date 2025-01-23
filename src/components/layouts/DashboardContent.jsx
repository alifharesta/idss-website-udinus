import { Link } from "react-router-dom";
import box from "../../assets/landingpage/box.png";

export default function DashboardContent() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Berita</h2>
          <p className="text-3xl font-bold">10</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Event</h2>
          <p className="text-3xl font-bold">-</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Publikasi</h2>
          <p className="text-3xl font-bold">-</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Anggota</h2>
          <p className="text-3xl font-bold">-</p>
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

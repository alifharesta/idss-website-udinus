import { Link, useLocation, useNavigate } from "react-router-dom";
import adminicon from "../../assets/landingpage/adminicon.png";
import stroke from "../../assets/landingpage/Stroke.svg";
import Logout from "../../assets/landingpage/Logout.svg";
import { supabase } from "../../services/supabaseClient";
import user from "../../assets/landingpage/user.png";
import { nameMap } from "../../pathMap";

export default function NavbarAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Fungsi untuk mencocokkan rute dengan parameter dinamis
  const getHeaderTitle = (path) => {
    for (let pattern in nameMap) {
      const regex = new RegExp(
        `^${pattern.replace(/:[^\s/]+/g, "([^\\s/]+)")}$`
      );
      if (regex.test(path)) {
        return nameMap[pattern];
      }
    }
    return "Page Not Found";
  };

  const headerTitle = getHeaderTitle(currentPath);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    supabase.auth.signOut();
    navigate("/admin-2083/login");

    Swal.fire({
      icon: "success",
      title: "Logout Berhasil",
      text: "Anda telah berhasil logout.",
    }).then(() => {
      // Arahkan ke halaman login setelah logout
      navigate("/admin-2083/login");
    });
  };

  return (
    <nav className="navbar bg-white lg:sticky lg:top-0 z-40">
      <header className="navbar-start flex-1">{headerTitle}</header>

      <div className="navbar-end flex-none gap-10">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="avatar right-0 w-8 md:w-10">
              <img
                alt="profile"
                src={user}
                className="rounded-full"
              />
            </div>
            <figure>
              <img src={stroke} alt="Stroke" className="w-4" />
            </figure>
          </div>

          <ul
            tabIndex={0}
            className="mt-3 z-10 shadow menu menu-sm dropdown-content hover:bg-red-600  rounded-lg w-24 text-black"
          >
            <Link>
              <button onClick={handleLogout} className="flex gap-2 px-1">
                <img src={Logout} alt="Logout" />
                Logout
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

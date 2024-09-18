import { Link } from "react-router-dom";
import adminicon from "../../assets/landingpage/adminicon.png";
import stroke from "../../assets/landingpage/Stroke.svg";

export default function NavbarAdmin() {
  return (
    <nav className="navbar lg:sticky lg:top-0 z-40">
            <div className="navbar-end flex-none gap-10">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <div className="avatar w-8 md:w-10">
                            <img alt="Profile Photo" src={adminicon || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" } className="rounded-full"/>
                        </div>
                        <h1 className="font-light text-base hidden md:inline">admin</h1>
                        <figure><img src={stroke}  alt="Stroke" className="w-4" /></figure>
                    </div>

                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary-100 rounded-sm w-52 text-black">
                        <Link>
                            <button className="flex gap-2">
                                Logout
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

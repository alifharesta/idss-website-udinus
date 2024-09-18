import { NavLink } from 'react-router-dom';
import Logo from "../../assets/landingpage/logotext.png";
import newsdb from "../../assets/landingpage/newsdb.png";
import dashboardicon from "../../assets/landingpage/dashboardicon.png";
import eventicon from "../../assets/landingpage/eventicon.png";
import paper from "../../assets/landingpage/paper.png";
import membericon from "../../assets/landingpage/membericon.png";   
import adminicon from "../../assets/landingpage/adminicon.png";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-2 border-gray-500">
            <header className="flex items-center ps-2.5 mb-5">
                <img src={Logo} className="w-46 me-3" alt="IDSS Logo" />
            </header>

            <nav className="px-3 py-4">
                <NavLink className={({ isActive }) => isActive ? 'active-sidebar' : 'default-sidebar'} to="/dashboard" end>
                    {({ isActive }) => (
                        <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-500">
                            <img src={dashboardicon} className="w-5 h-5" alt="Dashboard" />
                            <span className="ms-3">Dashboard</span>
                        </div>
                    )}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-sidebar' : 'default-sidebar'} to="/dashboard/news">
                    {({ isActive }) => (
                        <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-500">
                            <img src={newsdb} className="w-5 h-5" alt="News" />
                            <span className="ms-3">News</span>
                        </div>
                    )}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-sidebar' : 'default-sidebar'} to="/dashboard/events">
                    {({ isActive }) => (
                        <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-500">
                            <img src={eventicon} className="w-5 h-5" alt="Event" />
                            <span className="ms-3">Event</span>
                        </div>
                    )}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-sidebar' : 'default-sidebar'} to="/dashboard/members">
                    {({ isActive }) => (
                        <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-500">
                            <img src={membericon} className="w-5 h-5" alt="Members" />
                            <span className="ms-3">Members</span>
                        </div>
                    )}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-sidebar' : 'default-sidebar'} to="/dashboard/publications">
                    {({ isActive }) => (
                        <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-500">
                            <img src={paper} className="w-5 h-5" alt="Publications" />
                            <span className="ms-3">Publications</span>
                        </div>
                    )}
                </NavLink>
            </nav>

            <div className="mt-auto px-3 py-4">
                <div className="flex items-center p-2 text-gray-900">
                    <img src={adminicon} className="w-7 h-7" alt="Admin" />
                    <span className="ms-3">Alif Admin</span>
                </div>
                <NavLink className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-600" to="/logout">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="ms-3">Sign Out</span>
                </NavLink>
            </div>
        </aside>
    )
}

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import ProfilesPages from '../pages/ProfilesPages';
import NewsDetail from '../components/News/NewsDetail';
import News from '../pages/News';
import Login from '../pages/Login';
import Dashboard from '../components/layout/Dashboard';


// const router = createBrowserRouter([
//     { index: true, element: <LandingPage /> },
//     {
//       path: "/dashboard",
//       element: <Dashboard />,
//       children: [
//         { index: true, element: <Dashboard /> },
//         { path: "manage-event", element: <ManageEvent /> },
//         { path: "manage-product", element: <ManageProduct /> },
//         { path: "manage-article", element: <ManageArticle /> },
//         { path: "manage-admin", element: <ManageAdmin /> },
//         {
//           path: "*",
//           element: <ErrorPage />,
//         },
//       ],
//     },

function Routing(){
  return (
      <Router>
              <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/profiles" element={<ProfilesPages />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/news/:slug" element={<NewsDetail />} />
                  <Route path="/dashboard" element={<Dashboard    />} />
                  <Route path="/login" element={<Login />} /> 
                  </Routes>
      </Router>
  );
}
export default Routing;
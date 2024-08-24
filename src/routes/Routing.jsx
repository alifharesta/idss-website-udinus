import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import ProfilesPages from '../pages/ProfilesPages';
import NewsDetail from '../components/News/NewsDetail';
import News from '../components/LandingPage/News';

function Routing(){
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/profiles" element={<ProfilesPages />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/:slug" element={<NewsDetail />} />
                    </Routes>
        </Router>
    );
}
export default Routing;

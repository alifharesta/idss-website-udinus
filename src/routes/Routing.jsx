import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import ProfilesPages from "../pages/ProfilesPages";
import News from "../pages/News";
import NewsDetail from "../components/News/NewsDetail";
import Events from "../pages/Events";
import EventsDetails from "../components/Events/EventsDetails";
import FormPage from "../components/layouts/FormPage";
import Dashboard from "../components/layouts/Dashboard";
import DashboardContent from "../components/layouts/DashboardContent";
import ManageEvent from "../components/dashboard/manageEvent/ManageMainEvent";
import AddEvent from "../components/dashboard/manageEvent/AddEvent";
import EditDeleteEvent from "../components/dashboard/manageEvent/EditDeleteEvent";
import ManageMember from "../components/dashboard/manageMember/ManageMainMember";
import AddMember from "../components/dashboard/manageMember/AddMember";
import EditDeleteMember from "../components/dashboard/manageMember/EditDeleteMember";
import ManageNews from "../components/dashboard/manageNews/ManageMainNews";
import AddNews from "../components/dashboard/manageNews/AddNews";
import EditDeleteNews from "../components/dashboard/manageNews/EditDeleteNews";
import ManagePublication from "../components/dashboard/managePublication/ManageMainPubs";
import AddPublication from "../components/dashboard/managePublication/AddPublication";
import EditDeletePub from "../components/dashboard/managePublication/EditDeletePublication";
import Login from "../pages/Login";
import ArchiveEvents from "../pages/ArchiveEvents";
import ArchiveNews from "../pages/ArchiveNews";
// import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import Publication from "../pages/Publication";
import PublicationDetails from "../components/Publication/PublicationDetails";

// User Routes
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/profiles", element: <ProfilesPages /> },
  { path: "/news", element: <News /> },
  { path: "news/:slug", element: <NewsDetail /> },
  { path: "/events", element: <Events /> },
  { path: "events/:slug", element: <EventsDetails /> },
  { path: "/publications", element: <Publication /> },
  { path: "publications/:slug", element: <PublicationDetails /> },


  // Admin Routes
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardContent /> }, 
      { path: "manage-news", element: <ManageNews /> },
      { path: "manage-events", element: <ManageEvent /> },
      { path: "manage-publications", element: <ManagePublication /> },
      { path: "manage-members", element: <ManageMember /> },
      {
        path: "/dashboard/archive-events",
        element: <FormPage />,
        children: [{ index: true, element: <ArchiveEvents /> }],
      },
      {
        path: "/dashboard/archive-news",
        element: <FormPage />,
        children: [{ index: true, element: <ArchiveNews /> }],
      },
      {
        path: "manage-news/add",
        element: <FormPage />,
        children: [{ index: true, element: <AddNews /> }],
      },
      {
        path: "manage-news/edit/:id",
        element: <FormPage />,
        children: [{ index: true, element: <EditDeleteNews /> }],
      },
      {
        path: "manage-events/add",
        element: <FormPage />,
        children: [{ index: true, element: <AddEvent /> }],
      },
      {
        path: "manage-events/edit/:id",
        element: <FormPage />,
        children: [{ index: true, element: <EditDeleteEvent /> }],
      },
      {
        path: "manage-publications/add",
        element: <FormPage />,
        children: [{ index: true, element: <AddPublication /> }],
      },
      {
        path: "manage-publications/edit/:id",
        element: <FormPage />,
        children: [{ index: true, element: <EditDeletePub /> }],
      },
      {
        path: "manage-members/add",
        element: <FormPage />,
        children: [{ index: true, element: <AddMember /> }],
      },
      {
        path: "manage-members/edit/:id",
        element: <FormPage />,
        children: [{ index: true, element: <EditDeleteMember /> }],
      },
    ],
  },
  {
    path: "/admin-2083/login",
    element: <Login />,
  },
  // {
  //   path: "/regis",
  //   element: <Register />,
  // },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;

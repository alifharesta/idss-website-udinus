import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import ProfilesPages from "../pages/ProfilesPages";
import News from "../pages/News";
import NewsDetail from "../components/News/NewsDetail";
import FormPage from "../components/layouts/FormPage";
import Dashboard from "../components/layouts/Dashboard";
import DashboardContent from "../components/layouts/DashboardContent"; // Pastikan file ini ada
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
// import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

// User Routes
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/profiles", element: <ProfilesPages /> },
  { path: "/news", element: <News /> },
  { path: "news/:slug", element: <NewsDetail /> },

  // Admin Routes
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <DashboardContent /> }, // Konten default untuk /dashboard
      { path: "manage-news", element: <ManageNews /> },
      { path: "manage-events", element: <ManageEvent /> },
      { path: "manage-publications", element: <ManagePublication /> },
      { path: "manage-members", element: <ManageMember /> },
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
    path: "/login",
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

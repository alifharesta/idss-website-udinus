import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import FormPage from "../components/layouts/FormPage";
import Dashboard from "../components/layouts/Dashboard";
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
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  { index: true, element: <LandingPage /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "manage-news", element: <ManageNews /> },
      { path: "manage-event", element: <ManageEvent /> },
      { path: "manage-publication", element: <ManagePublication /> },
      { path: "manage-member", element: <ManageMember /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard/manage-news/add",
    element: <FormPage />,
    children: [{ index: true, element: <AddNews /> }],
  },
  {
    path: "/dashboard/manage-news/edit/:id",
    element: <FormPage />,
    children: [{ index: true, element: <EditDeleteNews /> }],
  },
  {
    path: "/dashboard/manage-event/add",
    element: <FormPage />,
    children: [{ index: true, element: <AddEvent /> }],
  },
  {
    path: "/dashboard/manage-event/edit/:id",
    element: <FormPage />,
    children: [{ index: true, element: <EditDeleteEvent /> }],
  },
  {
    path: "/dashboard/manage-publication/add",
    element: <FormPage />,
    children: [{ index: true, element: <AddPublication /> }],
  },
  {
    path: "/dashboard/manage-publication/edit/:id",
    element: <FormPage />,
    children: [{ index: true, element: <EditDeletePub /> }],
  },
  {
    path: "/dashboard/manage-member/add",
    element: <FormPage />,
    children: [{ index: true, element: <AddMember /> }],
  },
  {
    path: "/dashboard/manage-member/edit/:id",
    element: <FormPage />,
    children: [{ index: true, element: <EditDeleteMember /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;

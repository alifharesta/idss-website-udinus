import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("id");

  if (!isAuthenticated) {
    return <Navigate to="/admin-2083/login" replace />;
  }

  return children;
}

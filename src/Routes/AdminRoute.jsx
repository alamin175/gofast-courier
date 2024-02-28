import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return "loading";
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default AdminRoute;

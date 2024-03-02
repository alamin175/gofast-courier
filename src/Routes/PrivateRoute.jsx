import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <progress className="text-center progress w-56"></progress>;
  }
  
  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

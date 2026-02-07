import { Navigate, Outlet  } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    //While checking localStorage, show nothing (or a spinner)
    //to prevent "flickering" the login page for logged-in users.
    if (loading) return null;

    //If not user is found, redirect to login
    //Outlet renders the child components if authorized; Navigate redirects if not.
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
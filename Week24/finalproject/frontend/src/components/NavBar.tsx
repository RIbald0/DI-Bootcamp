import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  // Destructures user and logout from our custom auth hook
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Handles the logout flow and redirects the user to the login page
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        PollMaster
      </Link>

      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        
        {/* Conditional Rendering: Only shows these links if a user object exists */}
        {user ? (
          <>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">My Polls</Link>
            <Link to="/create-poll" className="text-gray-600 hover:text-blue-600">Create Poll</Link>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
            <span className="text-sm font-medium text-gray-500 border-l pl-4">
              Hi, {user.username}
            </span >
          </>
        ) : (
          /* Shows Login/Register only when the user is logged out */
          <>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
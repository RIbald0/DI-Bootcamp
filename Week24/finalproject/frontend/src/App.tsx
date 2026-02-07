import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/NavBar';
import CreatePoll from './pages/CreatePoll';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import PollDetails from './pages/PollDetails';


function App() {
  return (
    // Wraps the entire application to enable URL navigation tracking
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Navbar is outside Routes so it stays visible on every page */}
        <Navbar />
        
        <Routes>
          {/* Public Routes: Accessible by anyone regardless of login status */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/polls/:id" element={<PollDetails />} />

          {/* Protected Routes (Require Login) */}
          {/* Using ProtectedRoute as a wrapper to guard the child routes below */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-poll" element={<CreatePoll />} />
          </Route>

          {/* 404 Page (Optional): Catches any URL that doesn't match the paths above */}
          <Route path="*" element={<div className="p-8">404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

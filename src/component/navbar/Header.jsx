import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../navbar/IDC.png";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 h-16 flex items-center shadow-md transition-all ${
        theme === "light" ? "bg-[#16213E] text-white" : "bg-[#1A1A2E] text-gray-100" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between w-full">
        
        <Link to="/" className="flex items-center">
          <img src={logo} alt="COSMINNOX Logo" className="h-12 w-auto" />
        </Link>
        <div className="hidden md:flex flex-grow justify-center space-x-8 text-lg">
          {["Home", "About", "Programs", "Startups", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`hover:text-[#E94560] transition duration-300 ${
                theme === "light" ? "text-white" : "text-gray-100"
              }`}
            >
              {item}
            </Link>
          ))}
          {user?.role === "admin" && (
            <Link
              to="/dashboard"
              className={`hover:text-[#E94560] transition duration-300 font-bold ${
                theme === "light" ? "text-white" : "text-gray-100"
              }`}
            >
              Dashboard
            </Link>
          )}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`bg-[#16213E] hover:bg-[#0F162C] text-white px-3 py-2 rounded-lg transition duration-300 ${
              theme === "light" ? "bg-[#16213E]" : "bg-[#0F162C]"
            }`}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#E94560] text-white px-4 py-2 rounded-md hover:bg-[#D13450] transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-[#16213E] text-white px-4 py-2 rounded-md hover:bg-[#0F162C] transition">
                Login
              </button>
            </Link>
          )}
        </div>
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div
          className={`md:hidden text-center py-4 space-y-4 absolute top-16 left-0 w-full shadow-md ${
            theme === "light" ? "bg-[#16213E]" : "bg-[#0F162C]"
          }`}
        >
          {["Home", "About", "Programs", "Startups", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`block text-lg hover:text-[#E94560] transition ${
                theme === "light" ? "text-white" : "text-gray-100"
              }`}
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          {user ? (
            <button
              onClick={handleLogout}
              className="block bg-[#E94560] text-white w-40 mx-auto py-2 rounded-md hover:bg-[#D13450] transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="block bg-[#1A1A2E] text-white w-40 mx-auto py-2 rounded-md hover:bg-[#0F162C] transition">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

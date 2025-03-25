import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

AOS.init();

export default function Login() {
  const [logindata, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleChange(e) {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logindata),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const result = await response.json();

      login(result.user, result.token);

      navigate("/home");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  }

  return (
    <div className="w-full flex h-screen justify-center items-center bg-[#F5F5F5]">
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        className="w-[70%] bg-[#1A1A2E] flex flex-col items-center lg:flex-row lg:h-[75%] h-[60%] shadow-2xl shadow-[#E94560] rounded-lg"
      >
        <div className="lg:w-1/2 w-full h-40 lg:h-full flex items-center">
          <img
            className="animate-pulse w-64 h-20 m-12 lg:m-20 lg:h-56 lg:w-64"
            src="/userlogin.svg"
            alt="User"
          />
        </div>
        <form
          onSubmit={handleLogin}
          className="flex w-full bg-[#F5F5F5] flex-col h-full p-4 lg:w-1/2 gap-4 justify-center items-center rounded-r-lg"
        >
          <h1 className="text-2xl text-[#E94560] font-bold mt-4 lg:mt-0">Login</h1>
          <input
            onChange={handleChange}
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560] text-[#333333]"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <input
            onChange={handleChange}
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560] text-[#333333]"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="lg:w-60 w-28 h-10 text-sm p-2 text-white bg-[#E94560] rounded-2xl font-bold hover:bg-[#16213E] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
          <p className="flex items-center flex-col lg:flex-row text-[#333333]">
            No account?
            <Link to="/signup" className="text-[#E94560] font-bold text-lg p-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

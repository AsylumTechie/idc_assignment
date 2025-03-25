import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [matchPassword, setMatchPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (matchPassword !== credentials.password) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("User Data:", credentials);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (response.ok) {
        navigate("/login");
      } else {
        console.log("Error while registering the user");
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  return (
    <div className="w-full flex h-screen justify-center items-center bg-[#F5F5F5]">
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        className="w-[70%] bg-[#1A1A2E] flex flex-col lg:flex-row lg:h-[75%] h-[60%] shadow-2xl shadow-[#E94560] rounded-lg"
      >
        <div className="lg:w-1/2 w-full h-40 lg:h-full flex items-center">
          <img
            className="animate-pulse w-64 h-20 m-12 lg:m-20 lg:h-56 lg:w-64"
            src="/userlogin.svg"
            alt="User"
          />
        </div>
        <form
          onSubmit={handleSignup}
          className="flex w-full bg-[#F5F5F5] flex-col h-full p-4 lg:w-1/2 gap-4 justify-center items-center rounded-r-lg"
        >
          <h1 className="text-2xl text-[#E94560] font-bold mt-4 lg:mt-0">
            Signup
          </h1>
          <input
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560] text-[#333333]"
            placeholder="User Name"
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560] text-[#333333]"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560] text-[#333333]"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <input
            className="lg:w-60 w-40 p-2 h-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560] text-[#333333]"
            placeholder="Confirm Password"
            type="password"
            value={matchPassword}
            onChange={(e) => setMatchPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            className="lg:w-60 w-28 h-10 text-sm p-2 text-white bg-[#E94560] rounded-2xl font-bold hover:bg-[#16213E] transition-all duration-300 shadow-md hover:shadow-lg"
            type="submit"
          >
            Signup
          </button>
          <p className="flex items-center flex-col lg:flex-row text-[#333333]">
            Already have an account?
            <Link to="/login" className="text-[#E94560] font-bold text-lg p-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import image from "./AiImage.jpg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: "All fields are required!" });
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/inquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Try again later.");
      }

      setStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
      console.log(formData);
    } catch (error) {
      setStatus({ success: false, message: error.message });
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-[#F5F5F5] shadow-lg rounded-lg flex flex-col md:flex-row items-center">
      <div className="w-full h-[400px] flex items-center justify-center">
        <img
          src={image}
          alt="AI Illustration"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-[40%] p-6">
        <h2 className="text-3xl font-bold text-[#1A1A2E] text-center md:text-left">
          Contact Us
        </h2>

        {status.message && (
          <div
            className={`mt-4 p-3 text-center text-sm font-semibold rounded ${
              status.success
                ? "bg-green-100 text-green-700"
                : "bg-[#E94560] text-white"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-[#333333] font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#16213E] bg-white text-[#333333]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#16213E] bg-white text-[#333333]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#16213E] bg-white text-[#333333]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A1A2E] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#16213E] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

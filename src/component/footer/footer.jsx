import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer({ theme }) {
  return (
    <footer
      className={`py-8 transition-all ${
        theme === "light" ? "bg-[#16213E] text-white" : "bg-[#1A1A2E] text-gray-100" 
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-gray-300 ${theme === "light" ? "text-white" : "text-gray-100"}`}
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-gray-300 ${theme === "light" ? "text-white" : "text-gray-100"}`}
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-gray-300 ${theme === "light" ? "text-white" : "text-gray-100"}`}
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-gray-300 ${theme === "light" ? "text-white" : "text-gray-100"}`}
          >
            <FaInstagram size={20} />
          </a>
        </div>

        <div className="text-center md:text-left flex flex-col md:flex-row items-center md:space-x-6 mt-3 md:mt-0">
          <p>Email: <a href="mailto:contact@company.com" className="underline">contact@company.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a></p>
        </div>

        {/* Copyright */}
        <div className="text-sm mt-3 md:mt-0">
          <p>© 2025 COSMINNOX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FilePlus,
  Menu,
  TicketPercent,
  User,
  UserRoundSearch,
  View,
} from "lucide-react";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/inquiries`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch enquiries");
        }
        const data = await response.json();
        setEnquiries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="h-auto flex flex-col min-h-screen bg-[#F5F5F5] text-[#333333] py-14">
  
      <div className="hidden lg:flex justify-center items-center bg-[#1A1A2E] text-white py-6 px-8">
        <h1 className="text-2xl font-bold">Admin Control</h1>
      </div>

      <div className="lg:hidden flex justify-between items-center bg-[#1A1A2E] text-white py-4 px-6">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-8 h-8" />
        </button>
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        <User className="w-8 h-8" />
      </div>

      {menuOpen && (
        <div className="lg:hidden z-40 flex flex-col bg-[#16213E] text-white w-full py-4 px-6 gap-4">
          <Link
            to="/addproduct"
            className="flex items-center gap-2 hover:text-[#E94560]"
          >
            <FilePlus /> Add Product
          </Link>
          <Link
            to="/orderlist"
            className="flex items-center gap-2 hover:text-[#E94560]"
          >
            <View /> View Order
          </Link>
          <Link
            to="/userview"
            className="flex items-center gap-2 hover:text-[#E94560]"
          >
            <UserRoundSearch /> View User
          </Link>
          <Link
            to="/productlist"
            className="flex items-center gap-2 hover:text-[#E94560]"
          >
            <TicketPercent /> Product List
          </Link>
        </div>
      )}

      <div className="p-8">
        <h2 className="text-2xl font-bold text-[#16213E] mb-4">
          Customer Enquiries
        </h2>

        {loading && <p className="text-[#E94560]">Loading enquiries...</p>}
        {error && <p className="text-[#E94560]">{error}</p>}

        {!loading && !error && enquiries.length === 0 && (
          <p className="text-[#333333]">No enquiries found.</p>
        )}

        {!loading && !error && enquiries.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead className="bg-[#1A1A2E] text-white">
                <tr>
                  <th className="py-3 px-6 border">Name</th>
                  <th className="py-3 px-6 border">Email</th>
                  <th className="py-3 px-6 border">Message</th>
                  <th className="py-3 px-6 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className="border bg-[#F5F5F5] text-[#333333]"
                  >
                    <td className="py-3 px-6 border">{enquiry.name}</td>
                    <td className="py-3 px-6 border">{enquiry.email}</td>
                    <td className="py-3 px-6 border">{enquiry.message}</td>
                    <td className="py-3 px-6 border">
                      {new Date(enquiry.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

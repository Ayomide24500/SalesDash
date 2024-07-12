import React, { useContext, useState } from "react";
import { GlobalContext } from "../global/ContextProvider";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBars } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";

const Sidebar = () => {
  const { toggle } = useContext(GlobalContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Icon for toggling sidebar on small screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={handleSidebarToggle} className="text-black">
          <FaBars size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-transform duration-300 bg-gray-800 text-white ${
          isSidebarOpen
            ? "transform translate-x-0 w-[90px]"
            : "transform -translate-x-full"
        } lg:transform lg:translate-x-0 lg:w-[200px] lg:block ${
          toggle ? "lg:w-[200px]" : "lg:w-[80px]"
        }`}
      >
        <div className="flex flex-col items-center mt-10">
          <nav className="mt-10">
            <Link
              to="/dashboard"
              className="flex items-center mb-6 text-lg transition-colors duration-300 hover:text-gray-400"
            >
              <FaHome className="mr-4" />
              {toggle && <span className="text-[14px]">Home</span>}
            </Link>
            {/* <Link
              to="/profile"
              className="flex items-center text-lg transition-colors duration-300 hover:text-gray-400"
            >
              <FaUser className="mr-4" />
              {toggle && <span className="text-[14px]">Profile</span>}
            </Link> */}
            <Link
              to="/org"
              className="flex items-center text-lg transition-colors duration-300 hover:text-gray-400"
            >
              <IoCreateSharp className="mr-4 mt-8" />
              {toggle && (
                <span className="mt-8 text-[14px]">Create Organization</span>
              )}
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={handleSidebarToggle}
        />
      )}
    </>
  );
};

export default Sidebar;

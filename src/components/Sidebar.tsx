import React, { useContext } from "react";
import { GlobalContext } from "../global/ContextProvider";
import { Link } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { logout } from "../global/reduxState";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const { toggle } = useContext(GlobalContext);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div
      className={`lg:fixed lg:top-0 lg:left-0 lg:h-full lg:bg-red-900 lg:text-white fixed bottom-0 w-full h-[40px] bg-red-900 text-white ${
        toggle ? "lg:w-[200px]" : "lg:w-[80px]"
      } lg:w-[12%] lg:block flex justify-center items-center`}
    >
      <div className="flex lg:flex-col lg:items-center mt-10 lg:mt-14">
        <nav className="lg:mt-0 flex lg:flex-col space-x-4 lg:gap-0 gap-9 lg:space-x-0 mb-4 lg:mb-0">
          <Link
            to="/dashboard"
            className="flex items-center mb-6 text-lg transition-colors duration-300 hover:text-gray-400"
          >
            <FaHome className="lg:mr-4 lg:" />
            {toggle && <span className="text-[14px]">Home</span>}
          </Link>

          <Link
            to="/org"
            className="flex items-center text-lg transition-colors duration-300 hover:text-gray-400"
          >
            <IoCreateSharp className="lg:mr-4 lg:mt-8 mb-5 lg:mb-0" />
            {toggle && (
              <span className="lg:mt-8 text-[14px]">Create Organization</span>
            )}
          </Link>

          <Link
            to="/profile"
            className="flex items-center text-lg transition-colors duration-300 hover:text-gray-400"
          >
            <FaUserCircle className="lg:mr-4 lg:mt-8 mb-5 lg:mb-0" />
            {toggle && <span className="lg:mt-8 text-[14px]">Profile</span>}
          </Link>

          <Link
            to="/register"
            onClick={handleLogout}
            className="flex items-center text-lg transition-colors duration-300 hover:text-gray-400"
          >
            <FaSignOutAlt className="lg:mr-4 lg:mt-8 mb-5 lg:mb-0" />
            {toggle && <span className="lg:mt-8 text-[14px]">Logout</span>}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

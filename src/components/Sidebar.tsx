import React, { useContext } from "react";
import { GlobalContext } from "../global/ContextProvider";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";

const Sidebar = () => {
  const { toggle } = useContext(GlobalContext);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white ${
        toggle ? "lg:w-[200px]" : "lg:w-[80px]"
      } w-[20%] hidden lg:block`}
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
  );
};

export default Sidebar;

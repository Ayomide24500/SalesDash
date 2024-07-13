import React from "react";
import { Link } from "react-router-dom";
import { IoCreateSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="p-2 lg:w-[95%]">
      <p className="text-xl lg:pt-0 pt-10">
        Welcome Back, <span className="font-bold">Ayomide</span>
      </p>
      <section className="grid grid-cols-1 md:grid-cols-4 mt-20 lg:gap-0 gap-3">
        <div className="bg-white p-4 rounded-lg shadow lg:h-[250px] w-[95%] lg:w-[300px]">
          <h2 className="text-xl font-semibold">Total Organization</h2>
          <p className="lg:text-7xl text-5xl lg:pt-9 p-10 text-center text-[#f30d6d]">
            50,000
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow lg:h-[250px] w-[95%] lg:w-[300px]">
          <h2 className="text-xl font-semibold">Member</h2>
          <p className="lg:text-7xl text-5xl lg:pt-9 p-10 text-center text-[#9a0a50] ">
            1000
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow lg:h-[250px] w-[95%] lg:w-[300px]">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="lg:text-7xl text-5xl lg:pt-9 p-10 text-center text-[#08c421]">
            50,000
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow  lg:h-[250px] lg:w-[310px] w-full">
          <h2 className="text-xl font-semibold">Plan</h2>
          <div className="flex gap-40 mt-3">
            <div className="flex gap-2 flex-col">
              <p className="text-[14px]">Weekly </p>
              <p className="font-bold text-2xl">200</p>
            </div>
            <div className="flex gap-2 flex-col">
              <p className="text-[14px]">Monthly </p>
              <p className="font-bold text-2xl">10000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Icon link to Organization */}
      <Link
        to="/org"
        className="fixed bottom-4 right-4 text-black lg:hidden p-2 bg-gray-200 rounded-full shadow-lg"
      >
        <IoCreateSharp size={24} />
      </Link>
    </div>
  );
};

export default Dashboard;

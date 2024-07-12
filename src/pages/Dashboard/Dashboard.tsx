// src/components/Dashboard.js
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-2">
      <p className="text-xl lg:pt-0 pt-10">Welcome Back, Ayomide</p>
      <section className="grid grid-cols-1 md:grid-cols-4 mt-20 lg:gap-0 gap-3">
        <div className="bg-white p-4 rounded-lg shadow h-[250px] w-full lg:w-[350px]">
          <h2 className="text-xl font-semibold">Total Organization</h2>
          <p className="text-8xl text-center pt-5 text-[#f30d6d]">50,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow  h-[250px] w-full lg:w-[350px]">
          <h2 className="text-xl font-semibold">Total Staff</h2>
          <p className="text-8xl text-center pt-5 text-[#9a0a50] ">1000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow h-[250px] w-full lg:w-[350px]">
          <h2 className="text-xl font-semibold">Remaining Budget</h2>
          <p className="text-8xl text-center pt-5 text-[#08c421]">50,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow  h-[250px] lg:w-[420px]w-full">
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
    </div>
  );
};

export default Dashboard;

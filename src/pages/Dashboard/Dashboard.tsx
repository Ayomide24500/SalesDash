import React from "react";

const Dashboard = () => {
  return (
    <div className="p-2 lg:w-[95%] lg:h-[100%] -mt-9 lg:mt-0">
      <p className="text-[17px] lg:pt-10 pt-10 pl-4">
        Welcome Back, <span className="font-bold">Ayomide</span>
      </p>
      <section className="grid grid-cols-1 md:grid-cols-4 mt-10 lg:gap-0 gap-3">
        <div className="bg-white p-4 rounded-lg h-[120px] shadow lg:h-[250px] w-[85%] lg:w-[300px] ml-5 lg:ml-0">
          <h2 className="text-[15px]lg:text-xl font-semibold">
            Total Organization
          </h2>
          <p className="lg:text-7xl text-3xl font-bold lg:pt-9 p-10 pt-4 text-center text-[#f30d6d] pl-4">
            50,000
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow lg:h-[250px] w-[85%] lg:w-[300px] h-[120px] ml-5 lg:ml-0">
          <h2 className="text-[15px]lg:text-xl font-semibold">Member</h2>
          <p className="lg:text-7xl text-4xl font-bold pl-4 lg:pt-9 pt-4 p-9 text-center text-[#9a0a50] ">
            1000
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow lg:h-[250px] w-[85%] lg:w-[300px] h-[120px] ml-5 lg:ml-0">
          <h2 className="text-[15px] lg:text-xl font-semibold">Revenue</h2>
          <p className="lg:text-7xl text-4xl font-bold lg:pt-9 p-10 text-center text-[#08c421] pt-4 pl-4">
            10,000
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow ml-5 lg:ml-0  lg:h-[250px] lg:w-[310px] w-[85%] h-[120px]">
          <h2 className="lg:text-xl text-[15px] font-semibold">Plan</h2>
          <div className="flex gap-32 lg:mt-6 mt-3 lg:ml-3">
            <div className="flex gap-2 flex-col">
              <p className="text-[14px]">Weekly </p>
              <p className="font-bold text-2xl">200</p>
            </div>
            <div className="flex gap-2 flex-col">
              <p className="text-[14px]">Monthly </p>
              <p className="font-bold text-2xl">1000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

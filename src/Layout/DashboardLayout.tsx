import { useContext } from "react";
import { Outlet } from "react-router-dom";
import React from "react";
import { GlobalContext } from "../global/ContextProvider";
import Sidebar from "../components/Sidebar";
import ToggleButton from "../components/ToggleButton";

const DashboardLayout = () => {
  const { toggle, toggled, setToggled } = useContext(GlobalContext);

  return (
    <div className="flex transition-all duration-400">
      <div
        className={`lg:fixed transition-all duration-300 w-full h-[100vh] ${
          toggle ? "lg:w-[200px]" : "lg:w-[70px]"
        }`}
        onMouseEnter={() => {
          setToggled(true);
        }}
        onMouseLeave={() => {
          setToggled(false);
        }}
      >
        <div className="absolute -right-2 top-16 z-10 lg:block hidden">
          {toggled && <ToggleButton />}
        </div>
        <Sidebar />
      </div>

      <div className="w-full flex justify-end transition-all duration-300">
        <div
          className={`min-h-[10vh] transition-all duration-300 w-[100vw] ${
            toggle ? "lg:w-[calc(100vw-200px)]" : "lg:w-[calc(100vw-79px)]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

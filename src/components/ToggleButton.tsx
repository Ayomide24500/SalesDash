import React, { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GlobalContext } from "../global/ContextProvider";

const ToggleButton = () => {
  const { onToggle, toggle } = useContext(GlobalContext);
  return (
    <div
      className={`w-6 h-6 pl-2 hidden lg:flex transition-all duration-1000 z-10 bg-red-800 text-white rounded-md cursor-pointer justify-center items-center ${
        !toggle ? "rotate-180" : "rotate-0"
      }`}
      onClick={onToggle}
    >
      <MdArrowBackIos />
    </div>
  );
};

export default ToggleButton;

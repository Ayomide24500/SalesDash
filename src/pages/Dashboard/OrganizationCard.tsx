// src/components/OrganizationCard.js
import React, { useState, FC } from "react";

interface iProp {
  props: any;
}

const OrganizationCard: FC<iProp> = ({ props }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      <div
        key={props.id}
        className="w-full lg:h-[80px] rounded-lg p-4 text-sm border transition-shadow duration-300 bg-white flex items-center cursor-pointer z-50"
      >
        <div className="flex-1" onClick={toggleDropdown}>
          <div className="flex lg:justify-around lg:items-center flex-col lg:flex-row">
            <div className="text-md font-bold">
              <div className="text-red-800">Organization Name:</div>{" "}
              <p className="text-[14px]">{props.organizationName}</p>
            </div>
            <div className="my-2 text-md">
              <div className="text-red-800 font-bold">Code:</div>
              <p className="text-[17px]">{props.code}</p>
            </div>
            <div className="my-2 text-md">
              <div className="text-red-800 font-bold">Email:</div>
              <p className="text-[17px]">{props.email}</p>
            </div>
            <div>20 Mins Ago</div>
          </div>
        </div>
      </div>
      {isDropdownVisible && (
        <div className="mt-2 p-4 border rounded-lg bg-gray-100">
          <div>Member Details</div>
        </div>
      )}
    </div>
  );
};

export default OrganizationCard;

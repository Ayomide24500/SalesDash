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
    <div className="my-4">
      <div
        key={props.id}
        className="w-full lg:h-auto rounded-lg p-4 text-sm border min-h-[60px] transition-shadow duration-300 bg-white flex items-center cursor-pointer shadow hover:shadow-lg"
      >
        <div className="flex-1" onClick={toggleDropdown}>
          <div className="flex flex-col lg:items-center space-y-2">
            <div className="flex w-full mb-2 lg:mb-0 text-md font-medium">
              <div className="flex-1">
                <div className="text-red-800">Org Name:</div>
                <p className="text-[14px] break-words">
                  {props.organizationName}
                </p>
              </div>
              <div className="flex-1">
                <div className="text-red-800">Phone:</div>
                <p className="text-[14px] break-words">{props.phone}</p>
              </div>
            </div>
            <div className="flex w-full mb-2 lg:mb-0 text-md font-medium space-x-4">
              <div className="flex-1">
                <div className="text-red-800">Address:</div>
                <p className="text-[14px] break-words">{props.address}</p>
              </div>
              <div className="flex-1">
                <div className="text-red-800">Code:</div>
                <p className="text-[17px] break-words">{props.code}</p>
              </div>
            </div>
            <div className="flex w-full text-md font-medium space-y-2">
              <div className="flex-1">
                <div className="text-red-800">Email:</div>
                <p className="text-[17px] break-words">{props.email}</p>
              </div>
            </div>
          </div>
          <div className="text-gray-500 text-xs mt-2 lg:mt-0">20 Mins Ago</div>
        </div>
      </div>
      {isDropdownVisible && (
        <div className="mt-2 p-4 border rounded-lg bg-gray-100 shadow-inner">
          <div className="text-sm text-gray-700">Member Details</div>
        </div>
      )}
    </div>
  );
};

export default OrganizationCard;

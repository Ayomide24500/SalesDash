// src/components/OrganizationCard.js
import React, { useState, FC } from "react";
import { deleteWebData } from "../../Api/Api";

interface iProp {
  props: any;
  onDelete: (id: number) => void;
}

const OrganizationCard: FC<iProp> = ({ props, onDelete }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDelete = async () => {
    try {
      await deleteWebData(props.id);
      onDelete(props.id);
    } catch (error) {
      console.error("Error deleting organization:", error);
    }
  };

  return (
    <div>
      <div
        key={props.id}
        className="w-full min-h-4 rounded-lg h-auto p-4 text-sm border transition-shadow duration-300 bg-white flex items-center cursor-pointer"
      >
        <div className="flex-1" onClick={toggleDropdown}>
          <div className="flex lg:justify-around lg:items-center flex-col lg:flex-row">
            <div className="text-lg font-bold">
              <div className="text-gray-400">Organization Name:</div>{" "}
              {props.organizationName}
            </div>
            <div className="text-gray-700 my-2">
              <div className="text-gray-400 text-[14px] font-bold">Code:</div>
              {props.code}
            </div>
            <div className="text-gray-700 my-2">
              <div className="text-gray-400 text-[14px] font-bold">Email:</div>
              {props.email}
            </div>
            <div>20 Mins Ago</div>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Delete
        </button>
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

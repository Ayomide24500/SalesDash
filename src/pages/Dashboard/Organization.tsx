import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getWebData } from "../../Api/Api";
import AddOrganizationForm from "./AddOrganizationForm";
import OrganizationCard from "./OrganizationCard";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Organization = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const [data, setData] = useState([]);
  const [showAddOrganizationForm, setShowAddOrganizationForm] = useState(false);

  useEffect(() => {
    getWebData().then((res: any) => {
      console.log(res);
      setData(res);
    });
  }, []);

  const handleAddOrganizationClick = () => {
    setShowAddOrganizationForm(true);
  };

  const handleCloseForm = () => {
    setShowAddOrganizationForm(false);
  };

  return (
    <div>
      <div className="lg:p-2 w-full">
        <header className="flex justify-between items-center mb-4">
          <h1 className="lg:text-2xl text-[14px] font-bold pl-4 lg:pt-0 pt-10">
            Organization
          </h1>
          <button
            onClick={handleAddOrganizationClick}
            className="bg-blue-600 text-white text-[10px] lg:text-[12px] p-2 mr-4 mt-3 lg:px-4 lg:py-2 rounded hover:bg-blue-500"
          >
            Add Organization
          </button>
        </header>
        <div className="mt-10 flex flex-col gap-4 py-3 p-4">
          {data.map((props: any) => (
            <OrganizationCard key={props.id} props={props} />
          ))}
        </div>
        {toggle && (
          <div className="flex w-full left-0 absolute top-0">
            <div
              className="w-[100%] h-[100vh] overflow-hidden"
              style={{
                background: "rgba(143, 200, 255, 0.08)",
                backdropFilter: "blur(8px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            ></div>
          </div>
        )}
        <AddOrganizationForm
          show={showAddOrganizationForm}
          onClose={handleCloseForm}
        />
      </div>

      {/* Icon link to Dashboard */}
      <Link
        to="/dashboard"
        className="fixed bottom-4 right-4 text-black lg:hidden p-2 bg-gray-200 rounded-full shadow-lg"
      >
        <FaHome size={24} />
      </Link>
    </div>
  );
};

export default Organization;

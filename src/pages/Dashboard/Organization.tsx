// src/components/Organization.js
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getOrg } from "../../Api/Api";
import AddOrganizationForm from "./AddOrganizationForm";
import OrganizationCard from "./OrganizationCard";
import { changeToggleDisplay } from "../../global/reduxState";

const Organization = () => {
  const dispatch = useDispatch();
  const toggleDisplay = useSelector((state: any) => state.toggleDisplay);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOrg();
      setData(result);
    };

    fetchData();
  }, []);

  const handleAddOrganizationClick = () => {
    dispatch(changeToggleDisplay(true));
  };

  const handleCloseForm = () => {
    dispatch(changeToggleDisplay(false));
  };

  return (
    <div>
      <div className="lg:p-2 w-full mb-10">
        <header className="flex justify-between items-center mb-4">
          <h1 className="lg:text-2xl text-[18px] font-bold pl-4 lg:pt-10 pt-6">
            Organization
          </h1>
          <button
            onClick={handleAddOrganizationClick}
            className="bg-red-950 text-white text-[10px] lg:text-[12px] z-50 p-2 mr-4 mt-3 lg:px-4 lg:py-2 rounded hover:bg-red-950"
          >
            Add Organization
          </button>
        </header>
        <div className="mt-10 flex flex-col gap-4 py-3 p-4">
          {data.length > 0 ? (
            data.map((props) => (
              <OrganizationCard key={props.id} props={props} />
            ))
          ) : (
            <p>No organizations found.</p>
          )}
        </div>
        {toggleDisplay && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div
              className="bg-white p-8 rounded shadow-lg lg:w-full w-[88%] max-w-md"
              style={{
                background: "rgba(143, 200, 255, 0.08)",
                backdropFilter: "blur(8px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <AddOrganizationForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Organization;

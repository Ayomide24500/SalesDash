import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getWebData } from "../../Api/Api";
import AddOrganizationForm from "./AddOrganizationForm";
import OrganizationCard from "./OrganizationCard";
import { changeToggleDisplay } from "../../global/reduxState";

const Organization = () => {
  const dispatch = useDispatch();
  const toggleDisplay = useSelector((state: any) => state.toggleDisplay);
  const [data, setData] = useState([]);

  useEffect(() => {
    getWebData().then((res: any) => {
      console.log(res);
      setData(res);
    });
  }, []);

  const handleAddOrganizationClick = () => {
    dispatch(changeToggleDisplay(true));
  };

  const handleCloseForm = () => {
    dispatch(changeToggleDisplay(false));
  };

  return (
    <div>
      <div className="lg:p-2 w-full">
        <header className="flex justify-between items-center mb-4">
          <h1 className="lg:text-2xl text-[18px] font-bold pl-4 lg:pt-10 pt-6 ">
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
          {data.map((props: any) => (
            <OrganizationCard key={props.id} props={props} />
          ))}
        </div>
        {toggleDisplay && (
          <div className="flex w-full left-0 absolute top-0">
            <div
              className="w-[100%] h-[100vh] overflow-hidden"
              style={{
                background: "rgba(143, 200, 255, 0.08)",
                backdropFilter: "blur(8px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <AddOrganizationForm
                show={toggleDisplay}
                onClose={handleCloseForm}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Organization;

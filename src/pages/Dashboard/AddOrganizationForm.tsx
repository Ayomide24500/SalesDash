// src/components/AddOrganizationForm.js
import React, { useState, FC } from "react";
import { createWebData } from "../../Api/Api";

interface iProp {
  show: any;
  onClose: any;
}

const AddOrganizationForm: FC<iProp> = ({ show, onClose }) => {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newOrganization = {
      organizationName,
      email,
    };

    try {
      await createWebData(newOrganization);
      onClose();
    } catch (error) {
      setError("Error creating organization. Please try again.");
      console.error("Error creating organization:", error);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg lg:w-full w-[88%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Organization</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label className="block text-gray-700">Organization Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#a82036] mt-4 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 mt-4 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrganizationForm;

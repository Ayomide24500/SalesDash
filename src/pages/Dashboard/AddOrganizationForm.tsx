import React, { useState, FC } from "react";
import { CreateOrg } from "../../Api/Api";
import { Toaster, toast } from "react-hot-toast";

interface iProp {
  show: any;
  onClose: any;
}

const AddOrganizationForm: FC<iProp> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmiteNow = (e: any) => {
    e.preventDefault();
    setLoading(true);

    CreateOrg({
      name,
      email,
      address,
      phone,
    })
      .then((res: any) => {
        setLoading(false);
        if (res) {
          toast.success("Organization created successfully!");
          onClose();
        } else {
          toast.error("Failed to create organization. Please try again.");
        }
      })
      .catch((err: any) => {
        setLoading(false);
        console.log(err);
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg lg:w-full w-[88%] max-w-md relative">
        <h2 className="lg:text-2xl font-bold mb-4">Add Organization</h2>
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-red-800 h-12 w-12 mb-4"></div>
            <h2 className="text-center text-lg font-semibold">
              Creating Organization...
            </h2>
          </div>
        ) : (
          <form onSubmit={handleSubmiteNow}>
            <div className="mb-4">
              <label className="block text-gray-700">Organization Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default AddOrganizationForm;

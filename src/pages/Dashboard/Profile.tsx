// src/components/ProfilePage.js
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    Firstname: "John",
    Lastname: "Doe",
    phone: +2342134403330,
  });
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setProfile({ ...formData });
    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-red-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 lg:w-3/4 w-full max-w-4xl">
        <div className="text-center mb-8">
          <FaUserCircle className="text-red-800 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl lg:text-4xl font-bold text-red-800 mb-2">
            Profile
          </h1>
          <p className="text-gray-600">
            Manage your personal information below.
          </p>
        </div>
        {editing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.Firstname}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="name"
                value={formData.Lastname}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your last name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your last name"
              />
            </div>
            <button
              type="submit"
              className="bg-red-800 text-white px-4 py-2 rounded w-full"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded w-full mt-2"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <p className="p-2 border rounded">{profile.Firstname}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <p className="p-2 border rounded">{profile.Lastname}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <p className="p-2 border rounded">{profile.phone}</p>
            </div>
            <button
              onClick={() => setEditing(true)}
              className="bg-red-800 text-white px-4 py-2 rounded w-full"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

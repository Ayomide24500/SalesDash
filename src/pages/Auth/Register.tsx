// src/components/RegisterForm.js
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-red-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md lg:w-full w-[85%] max-w-md">
        <h2 className="lg:text-2xl text-xl font-bold mb-4">
          Update your Account
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">SalesCode</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <Link to="/login">
            <button
              type="submit"
              className="bg-red-800 text-white px-4 py-2 rounded w-full"
            >
              Update Password
            </button>
          </Link>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-red-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

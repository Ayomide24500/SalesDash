// src/components/RegisterForm.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updatePass } from "../../Api/Api";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

   const handleSubmiteNow = (e: any) => {
    e.preventDefault();

    updatePass({
      email: email,
      accessCode: accessCode,
      newPassword: newPassword,
    })
      .then((res: any) => {
        if (res.success) { 
          toast.success("Password updated successfully!");
          navigate("/login");
        } else {
          setErrorMessage("Failed to update password. Please try again.");
        }
      })
      .catch((err: any) => {
        console.log(err);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="bg-red-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md lg:w-full w-[85%] max-w-md">
        <h2 className="lg:text-2xl text-xl font-bold mb-4">
          Update your Account
        </h2>
        <form onSubmit={handleSubmiteNow}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">AccessCode</label>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-600">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="bg-red-800 text-white px-4 py-2 rounded w-full"
          >
            Update Password
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-red-800">
            Login
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;

// src/components/LoginForm.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { login } from "../../Api/Api";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmiteNow = (e: any) => {
    e.preventDefault();

    login({
      email,
      password,
    })
      .then((res: any) => {
        if (res) {
          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000); // Delay the navigation by 2 seconds
        } else {
          setErrorMessage("Failed to login. Please try again.");
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
        <h2 className="lg:text-2xl text-xl font-bold mb-4">Login</h2>
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
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-800">
            Register
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;

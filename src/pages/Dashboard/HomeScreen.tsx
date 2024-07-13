// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-red-800 min-h-screen flex flex-col text-white">
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-4xl mb-4 font-bold">Welcome To Go Food</h2>
          <p className="lg:text-2xl mb-8">
            Discover the best quality food items at unbeatable prices, delivered
            straight to your door.
          </p>
          <Link
            to="/register"
            className="bg-white text-red-800 px-6 py-3 rounded hover:bg-red-500"
          >
            Register
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

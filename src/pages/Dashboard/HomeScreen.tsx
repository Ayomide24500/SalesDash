// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-blue-950 min-h-screen flex flex-col text-white">
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-4xl mb-4 font-bold">
            Welcome to Food Stuff Store!
          </h2>
          <p className="text-2xl mb-8">
            Discover the best quality food items at unbeatable prices, delivered
            straight to your door.
          </p>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500"
          >
            Join Us Today
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

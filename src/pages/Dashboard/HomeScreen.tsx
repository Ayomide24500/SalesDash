// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-blue-950 min-h-screen flex flex-col text-white">
      <header className="p-4 bg-blue-800 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-1xl font-bold">Logo</h1>
        </div>
        <nav>
          <Link
            to="/register"
            className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
          >
            Register
          </Link>
        </nav>
      </header>
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

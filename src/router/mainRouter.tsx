import { createBrowserRouter } from "react-router-dom";
import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeScreen from "../pages/Dashboard/HomeScreen";
import Layout from "../Layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Organization from "../pages/Dashboard/Organization";
import Profile from "../pages/Dashboard/Profile";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/org",
        element: <Organization />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Redirect to login if there's no token
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

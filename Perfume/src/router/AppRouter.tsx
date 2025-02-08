import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/customer/Home";
import StaffDashboard from "../pages/staff/StaffDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Customer Pages */}
      <Route path="/" element={<Home />} />

      {/* Staff Pages */}
      <Route path="/staff" element={<StaffDashboard />} />

      {/* Admin Pages */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;

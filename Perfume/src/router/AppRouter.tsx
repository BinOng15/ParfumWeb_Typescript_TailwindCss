import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/customer/Home";
import StaffDashboard from "../pages/staff/StaffDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import PerfumeProduct from "../components/product/PerfumeProduct";
import PerfumeProductDetail from "../components/product/PerfumeProductDetail";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Customer Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/perfumeProduct" element={<PerfumeProduct />} />
      <Route
        path="/perfumeProductDetail/:id"
        element={<PerfumeProductDetail />}
      />

      {/* Staff Pages */}
      <Route path="/staff" element={<StaffDashboard />} />

      {/* Admin Pages */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;

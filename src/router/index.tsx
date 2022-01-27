import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layout/dashboard';
import LoginLayout from '../layout/login';

const PanelRouter = () => {
  return (
    <Routes>
      <Route path="/login/*" element={<LoginLayout />} />
      <Route path="/*" element={<DashboardLayout />} />
    </Routes>
  );
};

export default PanelRouter;

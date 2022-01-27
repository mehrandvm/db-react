import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { panelEntities } from 'src/router/entities';

const DashboardLayout: FC = () => {
  return (
    <Routes>
      {panelEntities.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default DashboardLayout;

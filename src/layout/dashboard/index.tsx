import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { panelEntities } from 'src/router/entities';
import { Box, Toolbar } from '@mui/material';
import Header from '../../components/general/Header';
import Drawer from '../../components/general/Drawer';

const DashboardLayout: FC = () => {
  return (
    <>
      <Header />
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1, pl: 40 }}>
        <Toolbar />
        <Routes>
          {panelEntities.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Box>
    </>
  );
};

export default DashboardLayout;

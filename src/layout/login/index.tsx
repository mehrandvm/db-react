import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../components/login/Login';

const LoginLayout: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default LoginLayout;

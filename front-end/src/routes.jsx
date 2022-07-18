import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PAGES from './Pages';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={ <Navigate replace to="/login" /> } />
    <Route path="/login" element={ <PAGES.Login /> } />
    <Route path="/customer/products" element={ <PAGES.Customer /> } />
    <Route path="/register" element={ <PAGES.Register /> } />
  </Routes>
);

export default MainRoutes;

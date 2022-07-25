import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PAGES from './Pages';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={ <Navigate replace to="/login" /> } />
    <Route path="/login" element={ <PAGES.Login /> } />
    <Route path="/customer/products" element={ <PAGES.Customer /> } />
    <Route path="/customer/orders/" element={ <PAGES.Order /> } />
    <Route path="/customer/orders/:id" element={ <h1>detalhe do pedido</h1> } />
    <Route path="/customer/checkout" element={ <PAGES.Checkout /> } />
    <Route path="/customer/orders/:id" element={ <h1>Order Page</h1> } />
    <Route path="/admin/manage" element={ <PAGES.Admin /> } />
    <Route path="/register" element={ <PAGES.Register /> } />
  </Routes>
);

export default MainRoutes;

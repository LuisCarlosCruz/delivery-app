import React from 'react';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header({ page }) {
  const renderBtn = () => {
    if (page === 'customer') {
      return (
        <div className="itens-left">
          <NavLink
            to="/customer/products"
            className="btn-products"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </NavLink>
          <NavLink
            to="/customer/orders"
            className="btn-orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </NavLink>
        </div>
      );
    }

    if (page === 'seller') {
      return (
        <div className="itens-left">
          <NavLink
            to="/customer/products"
            className="btn-orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            PEDIDOS
          </NavLink>
        </div>
      );
    }
    return (
      <div className="itens-left">
        <NavLink
          to="/customer/products"
          className="btn-orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          GERENCIAR USUÁRIOS
        </NavLink>
      </div>
    );
  };

  return (
    <nav className="navbar">

      {renderBtn()}

      <div className="itens-right">
        <div>
          <h1
            data-testid="customer_products__element-navbar-user-full-name"
          >
            Cicrano da Silva
          </h1>
        </div>
        <button
          className="btn-logout"
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

Header.propTypes = {
  page: Proptypes.string.isRequired,
};

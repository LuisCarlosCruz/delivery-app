import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="itens-left">
        <Link
          to="/customer/products"
          className="btn-products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>
        <Link
          to="/customer/checkout"
          className="btn-orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
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

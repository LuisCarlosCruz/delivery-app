import React from 'react';
import './buttonCart.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ButtonCart({ totalValue }) {
  return (
    <Link
      to="/customer/checkout"
      className="btn-cart"
      data-testid="customer_products__button-cart"
    >
      <h2>
        Ver Carrinho: R$
        {' '}
        { totalValue }
      </h2>
    </Link>
  );
}

ButtonCart.propTypes = {
  totalValue: PropTypes.string.isRequired,
};

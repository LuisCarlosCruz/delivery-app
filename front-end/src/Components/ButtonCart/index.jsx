import React, { useContext } from 'react';
import './buttonCart.css';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../store';

export default function ButtonCart() {
  const { totalValue, disableButtonCart } = useContext(MainContext);
  const navigate = useNavigate();

  console.log(totalValue);

  const redirect = () => {
    navigate('/customer/checkout');
  };

  return (
    <button
      type="button"
      onClick={ redirect }
      className="btn-cart"
      data-testid="customer_products__button-cart"
      disabled={ disableButtonCart }
    >
      <h2 data-testid="customer_products__checkout-bottom-value">
        Ver Carrinho: R$
        {' '}
        { totalValue }
      </h2>
    </button>
  );
}

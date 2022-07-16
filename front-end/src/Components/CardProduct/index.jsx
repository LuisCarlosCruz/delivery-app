import React from 'react';
import './cardProduct.css';
import PropTypes from 'prop-types';

export default function CardProduct({ data }) {
  const { id, name, price, url } = data;

  const formatPrice = (value) => {
    let newPrice = value.toFixed(2);
    newPrice = newPrice.replace('.', ',');
    return newPrice;
  };

  return (
    <li>
      <h2
        className="tag-price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        R$
        {' '}
        { formatPrice(price) }
      </h2>
      <img
        src={ url }
        alt="cerveja"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h3 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h3>
      <div className="counters">
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <label htmlFor="input-quantity">
          <input
            id="input-quantity"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
        </label>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </li>
  );
}

CardProduct.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
};

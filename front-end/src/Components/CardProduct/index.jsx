import React, { useContext, useState } from 'react';
import './cardProduct.css';
import PropTypes from 'prop-types';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { MainContext } from '../../store';

export default function CardProduct({ data }) {
  const { setTotalValue, setDisableButtonCart } = useContext(MainContext);
  const [counter, setCounter] = useState(0);
  const { id, name, price } = data;

  const formatPrice = (value) => {
    let newPrice = Number(value).toFixed(2);
    newPrice = newPrice.replace('.', ',');
    return newPrice;
  };

  const totalPrice = () => {
    const cart = getLocalStorage('cartItems');
    const total = cart
      .reduce((prevValue, currValue) => (
        prevValue + (currValue.quantity * currValue.price)), 0);
    setTotalValue(formatPrice(total));

    if (total !== 0) setDisableButtonCart(false);
    if (total === 0) setDisableButtonCart(true);
  };

  const setIncrementCart = (array, items) => {
    const index = array.findIndex((value) => value.id === items.id);
    if (index < 0) {
      array.push(items);
      setLocalStorage('cartItems', array);
    } else {
      array[index] = items;
      const checkQuantityEmpty = array
        .filter((item) => item.quantity !== 0);
      setLocalStorage('cartItems', checkQuantityEmpty);
    }
    totalPrice();
  };

  const setInitialCart = (items) => {
    const arrayCart = getLocalStorage('cartItems');
    const arrayItems = [];
    if (!arrayCart) {
      arrayItems.push(items);
      setLocalStorage('cartItems', arrayItems);

      totalPrice();
    } else {
      setIncrementCart(arrayCart, items);
    }
  };

  const setCart = (quantity, idProduct, nameProduct, priceProduct) => {
    const items = {
      quantity,
      id: idProduct,
      name: nameProduct,
      price: priceProduct,
    };
    setInitialCart(items);
  };

  const plusCounter = (idProduct, nameProduct, priceProduct) => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setCart(newCounter, idProduct, nameProduct, priceProduct);
  };

  const minusCounter = (idProduct, nameProduct, priceProduct) => {
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);

      setCart(newCounter, idProduct, nameProduct, priceProduct);
    }
  };

  const handleQuantity = (target, idProduct, nameProduct, priceProduct) => {
    setCounter(Number(target.value));

    setCart(Number(target.value), idProduct, nameProduct, priceProduct);
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
        src={ data.url_image }
        alt="cerveja"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h3 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h3>
      <div className="counters">
        <button
          type="button"
          onClick={ () => minusCounter(id, name, price) }
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
            onChange={ ({ target }) => handleQuantity(target, id, name, price) }
            value={ counter }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
        </label>
        <button
          type="button"
          onClick={ () => plusCounter(id, name, price) }
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
    price: PropTypes.string,
    id: PropTypes.number,
    url_image: PropTypes.string,
  }).isRequired,
};

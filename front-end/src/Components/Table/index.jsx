import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './table.css';
import { MainContext } from '../../store';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export default function Table({ data }) {
  const [items, setItems] = useState([]);
  const {
    setTotalValue, setDisableButtonCart, setSubmitItems,
  } = useContext(MainContext);

  useEffect(() => {
    setItems(data);
    setSubmitItems(data);
  }, [data, setSubmitItems]);

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

  const subtotal = (value, quantity) => {
    const total = Number(value) * quantity;
    return formatPrice(total);
  };

  const removeItem = (id) => {
    const cart = getLocalStorage('cartItems');
    console.log(cart);
    const newCart = cart.filter((item) => item.id !== id);
    setLocalStorage('cartItems', newCart);
    setItems(newCart);
    setSubmitItems(newCart);
    totalPrice();
  };

  const teste = 'customer_checkout__element-order-table-item-number-';

  return (
    <table>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
          <th>Remover</th>
        </tr>
        {items.length > 0 && items.map((item, index) => (
          <tr key={ item.id }>
            <td
              data-testid={ `${teste}-${index}` }
            >
              {index + 1}

            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {item.name}

            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {item.quantity}

            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {formatPrice(item.price)}

            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {subtotal(item.price, item.quantity)}

            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              <button
                type="button"
                onClick={ () => removeItem(item.id) }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ).isRequired,
};

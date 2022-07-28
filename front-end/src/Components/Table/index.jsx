import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './table.css';
import { MainContext } from '../../store';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export default function Table({ data, removeButton = true, infoSale }) {
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
    const newCart = cart.filter((item) => item.id !== id);
    setLocalStorage('cartItems', newCart);
    setItems(newCart);
    setSubmitItems(newCart);
    totalPrice();
  };

  const teste = 'customer_checkout__element-order-table-item-number-';
  const dataTest = 'customer_order_details__';

  return (
    <table>
      <tbody>
        {
          !removeButton && (
            <tr>
              <th
                data-testid={ `${dataTest}element-order-details-label-order-id` }
              >
                PEDIDO:
                { ` 000${infoSale.sale.id}` }
              </th>
              <th
                data-testid={ `${dataTest}element-order-details-label-seller-name` }
              >
                P. vend:
                { infoSale.seller.name }
              </th>
              <th
                data-testid={ `${dataTest}element-order-details-label-order-date` }
              >
                { new Date(infoSale.sale.saleDate).toLocaleDateString('pt-BR') }
              </th>
              <th
                data-testid={ `${dataTest}element-order-details-label-delivery-status` }
              >
                { infoSale.sale.status }
              </th>
              <th>
                <button
                  disabled
                  type="button"
                  data-testid="customer_order_details__button-delivery-check"
                >
                  MARCAR COMO ENTREGUE
                </button>
              </th>
            </tr>
          )
        }

        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
          {
            removeButton && <th>Remover</th>
          }
        </tr>
        {items.length > 0 && items.map((item, index) => (
          <tr key={ item.id }>
            <td
              data-testid={ !removeButton
                ? `${dataTest}element-order-table-item-number-${index}`
                : `${teste}-${index}` }
            >
              {index + 1}

            </td>
            <td
              data-testid={ !removeButton
                ? `${dataTest}element-order-table-name-${index}`
                : `customer_checkout__element-order-table-name-${index}` }
            >
              {item.name}

            </td>
            <td
              data-testid={ !removeButton
                ? `${dataTest}element-order-table-quantity-${index}`
                : `customer_checkout__element-order-table-quantity-${index}` }
            >
              {!removeButton ? item.salesProducts.quantity : item.quantity}

            </td>
            <td
              data-testid={ !removeButton
                ? `${dataTest}element-order-table-unit-price-${index}`
                : `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {formatPrice(item.price)}

            </td>
            <td
              data-testid={ !removeButton
                ? `${dataTest}element-order-table-sub-total-${index}`
                : `customer_checkout__element-order-table-sub-total-${index}` }
            >
              { !removeButton ? subtotal(item
                .price, item.salesProducts.quantity) : subtotal(item
                .price, item.quantity)}

            </td>
            {
              removeButton && (
                <td
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                >
                  <button type="button" onClick={ () => removeItem(item.id) }>
                    Remover
                  </button>
                </td>
              )
            }
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
  ),
  infoSale: PropTypes.shape({
    sale: PropTypes.shape({
      id: PropTypes.number,
      saleDate: PropTypes.string,
      status: PropTypes.string,
    }),
    seller: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  removeButton: PropTypes.bool,
};

Table.defaultProps = {
  removeButton: true,
  data: {},
  infoSale: {},
};

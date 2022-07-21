import React, { useContext, useEffect, useState } from 'react';
import COMPONENT from '../../Components';
import { MainContext } from '../../store';
import { getLocalStorage } from '../../utils/localStorage';

export default function Checkout() {
  const { totalValue } = useContext(MainContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cart = getLocalStorage('cartItems');
    setItems(cart);
  }, []);

  return (
    <>
      <COMPONENT.Header page="customer" />
      <section className="section-table">
        <h1 className="table-checkout">Finalizar Pedido</h1>
        <COMPONENT.Table data={ items } />
        <h1
          className="name-total"
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$
          {' '}
          { totalValue }
        </h1>
      </section>
      <section className="section-submit-order">
        <COMPONENT.SubmitOrder />
      </section>
    </>
  );
}

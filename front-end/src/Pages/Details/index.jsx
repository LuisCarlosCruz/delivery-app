import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import COMPONENTS from '../../Components';
import { MainContext } from '../../store';

const Details = () => {
  const infoSaleInicial = {
    sale: {
      Products: [],
      id: 1,
      saleDate: '2022-07-28T01:18:26.000Z',
      status: 'Pendente',
    },
    seller: {
      name: '',
    },
  };

  const { totalValue } = useContext(MainContext);
  const [items, setItems] = useState([]);
  const [infoSale, setInfoSale] = useState(infoSaleInicial);

  useEffect(() => {
    const url = window.location.pathname;
    const id = url.split('/')[3];
    const URL = 'http://localhost:3001';

    const request = async () => {
      const sales = await axios.get(`${URL}/sales/${id}`);
      setInfoSale(sales.data);
      const { Products } = sales.data.sale;
      setItems(Products);
    };
    request();
  }, []);

  return (
    <div>
      <COMPONENTS.Header page="customer" />
      <h1>Detalhe do Pedido</h1>
      <section>
        <COMPONENTS.Table
          data={ items }
          infoSale={ infoSale }
          removeButton={ false }
        />
        <h1
          data-testid="customer_order_details__element-order-total-price"
        >
          Total: R$
          {' '}
          { totalValue }
        </h1>
      </section>
    </div>
  );
};

export default Details;

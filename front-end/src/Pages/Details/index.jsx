import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import COMPONENTS from '../../Components';
import { MainContext } from '../../store';

const Details = () => {
  const { totalValue } = useContext(MainContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = window.location.pathname;
    const id = url.split('/')[3];
    const URL = 'http://localhost:3001';
    const request = async () => {
      const sales = await axios.get(`${URL}/sales/${id}`);
      const { Products } = sales.data.sale;
      setItems(Products);
    };
    request();
  }, [items]);

  return (
    <div>
      <COMPONENTS.Header page="customer" />
      <h1>Detalhe do Pedido</h1>
      <section>
        <COMPONENTS.Table data={ items } removeButton={ false } />
        <h1>
          Total: R$
          {' '}
          { totalValue }
        </h1>
      </section>
    </div>
  );
};

export default Details;

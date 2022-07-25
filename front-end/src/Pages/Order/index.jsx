import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../store/Context';
import COMPONENTS from '../../Components';
import getAllSales from '../../Services/api/salesApi';

const Order = () => {
  const { email } = useContext(MainContext);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getAllSales(email).then((v) => setSales(v));
  });

  const dateStructure = (date) => {
    const limit = -14;
    const justDate = date.slice(0, limit);
    return justDate.split('-').reverse().join('/');
  };

  return (
    <div>
      <div><COMPONENTS.Header page="customer" /></div>
      <article>
        {sales.map(({
          id,
          totalPrice,
          status,
          saleDate,
        }, index) => (
          <Link key={ index } to={ `/customer/orders/${id}` }>
            <div
              data-testid={ `customer_products__element-order-date-${id}` }

            >
              <h4>{`Pedido \n 000${id}`}</h4>
              <h4>{status}</h4>
              <p>{dateStructure(saleDate)}</p>
              <p>{`R$ ${totalPrice}`}</p>
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
};

export default Order;

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../store/Context';
import COMPONENTS from '../../Components';
import { getAllSales } from '../../Services/api/saleApi';
import { getLocalStorage } from '../../utils/localStorage';

const Order = () => {
  const { email } = useContext(MainContext);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const infoUser = getLocalStorage('user').email;
    getAllSales(infoUser).then((v) => setSales(v));
  }, [email]);

  const formatPrice = (value) => {
    let newPrice = Number(value).toFixed(2);
    newPrice = newPrice.replace('.', ',');
    return newPrice;
  };

  const dateStructure = (date) => {
    const limit = -14;
    const justDate = date.slice(0, limit);
    return justDate.split('-').reverse().join('/');
  };

  return (
    <div>
      <div><COMPONENTS.Header page="customer" /></div>
      {sales.length < 1
        ? <h1>Nenhum Pedido</h1>
        : (
          <article>
            {sales.map(({
              id,
              totalPrice,
              status,
              saleDate,
            }, index) => (
              <Link
                key={ index }
                to={ `/customer/orders/${id}` }
              >
                <div>
                  <h4
                    data-testid={ `customer_orders__element-order-id-${id}` }
                  >
                    {`Pedido \n 000${id}`}
                  </h4>
                  <h4
                    data-testid={ `customer_orders__element-delivery-status-${id}` }
                  >
                    {status}
                  </h4>
                  <p
                    data-testid={ `customer_orders__element-order-date-${id}` }
                  >
                    {dateStructure(saleDate)}
                  </p>
                  <p
                    data-testid={ `customer_orders__element-card-price-${id}` }
                  >
                    {formatPrice(totalPrice)}
                  </p>
                </div>
              </Link>
            ))}
          </article>
        )}

    </div>
  );
};

export default Order;

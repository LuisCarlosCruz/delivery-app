import React from 'react';
// import COMPONENTS from '../../Components';
import sales from '../../utils/mockSales';

const Order = () => (
  <div>
    {/* <COMPONENTS.Header page="customer" /> */}
    <article>
      {sales.map((elements, index) => (
        <div key={ index }>
          <span>{elements.id}</span>
          <h4>{elements.status}</h4>
          <p>{elements.date}</p>
          <p>{elements.price}</p>
        </div>
      ))}
    </article>
  </div>
);

export default Order;

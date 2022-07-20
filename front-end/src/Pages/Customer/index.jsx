import React, { useContext, useEffect, useState } from 'react';
import COMPONENT from '../../Components';
import getAllProducts from '../../Services/api/customerApi';
import { MainContext } from '../../store';
import { getLocalStorage } from '../../utils/localStorage';

export default function Customer() {
  const { setTotalValue } = useContext(MainContext);
  const [data, setData] = useState([]);

  const formatPrice = (value) => {
    let newPrice = Number(value).toFixed(2);
    newPrice = newPrice.replace('.', ',');
    return newPrice;
  };

  useEffect(() => {
    const cart = getLocalStorage('cartItems');

    if (!cart) return setTotalValue(0);

    const totalPrice = cart
      .reduce((prevValue, currValue) => (
        prevValue + (currValue.quantity * currValue.price)), 0);
    return setTotalValue(formatPrice(totalPrice));
  }, [setTotalValue]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts();
      setData(products.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <COMPONENT.Header page="customer" />
      <section>
        <ul>
          {data.length > 0 && data.map((product) => (
            <COMPONENT.CardProduct key={ product.id } data={ product } />
          ))}
        </ul>
        <COMPONENT.ButtonCart />
      </section>
    </>
  );
}

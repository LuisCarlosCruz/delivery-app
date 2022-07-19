import React, { useContext, useEffect } from 'react';
import COMPONENT from '../../Components';
import { MainContext } from '../../store';
import { getLocalStorage } from '../../utils/localStorage';

const arrayTest = [
  { id: 1, name: 'Skol Lata 250ml', price: 2.20, url: '/images/skol_lata_350ml.jpg' },
  { id: 2, name: 'Heineken 600ml', price: 7.50, url: '/images/heineken_600ml.jpg' },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    url: '/images/antarctica_pilsen_300ml.jpg',
  },
  { id: 4, name: 'Brahma 600ml', price: 7.50, url: '/images/brahma_600ml.jpg' },
  { id: 5, name: 'Skol 269ml', price: 2.19, url: '/images/skol_269ml.jpg' },
  {
    id: 6,
    name: 'Skol Beats Senses 313ml',
    price: 4.49,
    url: '/images/skol_beats_senses_313ml.jpg',
  },
  { id: 7, name: 'Becks 330ml', price: 4.99, url: '/images/becks_330ml.jpg' },
  {
    id: 8,
    name: 'Brahma Duplo Malte 350ml',
    price: 2.79,
    url: '/images/brahma_duplo_malte_350ml.jpg',
  },
  { id: 9, name: 'Becks 600ml', price: 8.89, url: '/images/becks_600ml.jpg' },
  {
    id: 10,
    name: 'Skol Beats Senses 269ml',
    price: 3.57,
    url: '/images/skol_beats_senses_269ml.jpg',
  },
  {
    id: 11,
    name: 'Stella Artois 275ml',
    price: 3.49,
    url: '/images/stella_artois_275ml.jpg',
  },
];

export default function Customer() {
  const { totalValue, setTotalValue } = useContext(MainContext);

  useEffect(() => {
    const cart = getLocalStorage('cartItems');

    if (!cart) return setTotalValue(0);

    const totalPrice = cart
      .reduce((prevValue, currValue) => (
        prevValue + (currValue.quantity * currValue.price)), 0);
    return setTotalValue(totalPrice);
  }, [setTotalValue]);

  const formatPrice = (value) => {
    let newPrice = value.toFixed(2);
    newPrice = newPrice.replace('.', ',');
    return newPrice;
  };

  return (
    <>
      <COMPONENT.Header page="customer" />
      <section>
        <ul>
          {arrayTest.map((data) => (
            <COMPONENT.CardProduct key={ data.id } data={ data } />
          ))}
        </ul>
        <COMPONENT.ButtonCart totalValue={ formatPrice(totalValue) } />
      </section>
    </>
  );
}

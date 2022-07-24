import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../store/Context';
import { getLocalStorage } from '../../utils/localStorage';
import createSales from '../../Services/api/saleApi';

export default function SubmitOrder() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const {
    totalValue, submitItems, disableButtonCart, setDisableButtonCart,
  } = useContext(MainContext);

  useEffect(() => {
    const customer = getLocalStorage('user');
    setDisableButtonCart(true);
    setUser(customer);
  }, [setDisableButtonCart]);

  const formatPrice = (value) => {
    const newValue = Number(value.replace(',', '.'));
    return newValue;
  };

  const info = {
    totalPrice: formatPrice(totalValue),
    sellerId: Number(seller),
    deliveryAddress: address,
    deliveryNumber: number,
    status: 'Pendente',
    customerName: user.name,
    productsSale: submitItems,
  };

  useEffect(() => {
    const disableBtn = () => {
      if (
        (seller === '' || address === '' || number === '')
        || info.totalPrice === 0) {
        setDisableButtonCart(true);
      } else {
        setDisableButtonCart(false);
      }
    };
    disableBtn();
  }, [setDisableButtonCart, info.totalPrice, seller, address, number]);

  const handleSeller = async (value) => {
    if (!value) {
      setDisableButtonCart(true);
    }
    setSeller(value);
  };

  const handleAddress = (value) => {
    if (!value) {
      setDisableButtonCart(true);
    }
    setAddress(value);
  };

  const handleNumber = (value) => {
    if (!value) {
      setDisableButtonCart(true);
    }
    setNumber(value);
  };

  const setSale = async () => {
    const sale = await createSales(info, user.token);
    localStorage.removeItem('cartItems');
    navigate(`/customer/orders/${sale.data.id}`);
  };

  return (
    <>
      <h2 className="name-submit">
        Detalhes e Endereço para Entrega

      </h2>
      <div className="submit-input">
        <label htmlFor="seller">
          P. Vendedor(a) Responsável:
          <select
            name="seller"
            id="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => handleSeller(target.value) }
          >
            <option> </option>
            <option value="2">Fulana Pereira</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            id="address"
            placeholder="Digite o nome da rua e bairro"
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => handleAddress(target.value) }
          />
        </label>
        <label htmlFor="address-number">
          Número
          <input
            type="text"
            id="address-number"
            placeholder="Número"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ ({ target }) => handleNumber(target.value) }
          />
        </label>
      </div>
      <div className="submit-button">
        <button
          disabled={ disableButtonCart }
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ setSale }
        >
          Finalizar Pedido
        </button>
      </div>
    </>
  );
}

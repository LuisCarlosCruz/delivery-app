import React from 'react';

export default function SubmitOrder() {
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
          >
            <option> </option>
            <option>Fulana Pereira</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            id="address"
            placeholder="Digite o nome da rua e bairro"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="address-number">
          Número
          <input
            type="text"
            id="address-number"
            placeholder="Número"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </div>
      <div className="submit-button">
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </div>
    </>
  );
}

import React, { Component } from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';

export class UserWallet extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { globalUserState } = this.props;
    return (

      <div>
        <header>
          <h3 data-testid="email-field">
            { globalUserState }
          </h3>
          <h3 data-testid="total-field"> 0 </h3>
          <h3 data-testid="header-currency-field"> BRL </h3>
        </header>
        <label htmlFor="value-input">
          Valor das despesas:
          <input
            type="text"
            name="value-input"
            id="value-input"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição das despesas:
          <input
            type="text"
            name="description-input"
            id="description-input"
            data-testid="description-input"
          />
        </label>

        <h4>Moeda de compra:</h4>
        <select
          label="método_de_compra"
          name="currency-input"
          id="currency-input"
          data-testid="currency-input"
          options={ moedas }
        />
        <h4>Forma de pagamento:</h4>
        <select
          label="método_de_pagamento"
          name="method-input"
          id="method-input"
          data-testid="method-input"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>

        <h4>Selecionar categoria:</h4>
        <select
          label="categoria_de_compra"
          name="tag-input"
          id="tag-input"
          data-testid="tag-input"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>

        </select>

        <button
          type="submit"
        >
          Adicionar despesas
        </button>

      </div>

    );
  }
}
const mapStateToProps = (state) => ({ globalUserState: state.user.email });

UserWallet.propTypes = {
  globalUserState: PropsType.string.isRequired,
};
export default connect(mapStateToProps)(UserWallet);

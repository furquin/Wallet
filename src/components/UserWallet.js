import React, { Component } from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { saveCurrencyInfoThunk, saveWalletInfoThunk } from '../actions';

export class UserWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  submitExpenses = () => {
    const { getExpenses } = this.props;
    getExpenses(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag } = this.state;

    return (

      <div>
        <form>
          <label htmlFor="value-input">
            Valor das despesas:
            <input
              type="text"
              name="value"
              id="value-input"
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição das despesas:
            <input
              type="text"
              name="description"
              id="description-input"
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              data-testid="currency-input"
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencies.map((currencyValue, index) => (
                  <option
                    value={ currencyValue }
                    key={ index }
                    data-testid={ currencyValue }

                  >
                    {currencyValue}

                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="method">
            Forma de pagamento:
            <select
              label="método_de_pagamento"
              name="method"
              id="method"
              data-testid="method-input"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Selecionar categoria:
            <select
              label="categoria_de_compra"
              name="tag"
              id="tag"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>

            </select>
          </label>
          <button
            type="button"
            onClick={ this.submitExpenses }

          >
            Adicionar despesa
          </button>
        </form>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(saveCurrencyInfoThunk()),
  getExpenses: (expenses) => dispatch(saveWalletInfoThunk(expenses)),
});

UserWallet.propTypes = {
  currencies: PropsType.arrayOf(PropsType.string).isRequired,
  getCurrencies: PropsType.func.isRequired,
  getExpenses: PropsType.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserWallet);

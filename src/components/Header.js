import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    console.log(expenses);
    const sumExpenses = expenses.reduce((acc, curr) => {
      const values = curr.value * curr.exchangeRates[curr.currency].ask;
      return values + acc;
    }, 0);
    return (
      <div>
        <header>
          <h3 data-testid="email-field">
            { email }
          </h3>
          <h3 data-testid="total-field">
            Despesa: R$
            {sumExpenses.toFixed(2)}

          </h3>
          <h3 data-testid="header-currency-field">
            BRL
          </h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,

});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default connect(mapStateToProps)(Header);

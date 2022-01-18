import React, { Component } from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveInfoUser } from '../actions/index';

export class UserLogin extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      redirect: false,
      disabled: null,
    };
  }

  // & função consultada no repositório da Laura Fumagalli https://github.com/tryber/sd-016-a-project-trybewallet/pull/29/commits/1580e3f0f2c47a96e581661f01d88c984005aae2

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      const { senha, email } = this.state;
      const minValue = 6;
      const object = { key: senha.length >= minValue };
      const { key } = object;
      this.setState({ disabled: email.match(/\w{1,20}@\w{1,10}\.com/g) && key });
    });
  }

  redirect = () => {
    this.setState({ redirect: true });
    const { userValues } = this.props;
    const { email } = this.state;
    userValues(email);
  }

  render() {
    const { email, senha, redirect, disabled } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insira seu e-mail"
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Insira sua senha"
              data-testid="password-input"
              onChange={ this.handleChange }
              value={ senha }
            />
          </label>

          <button
            type="button"
            onClick={ this.redirect }
            disabled={ !disabled }
          >
            Entrar

          </button>
          {redirect && <Redirect to="/carteira" />}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userValues:
    (email) => dispatch(saveInfoUser(email)),
});

UserLogin.propTypes = {
  userValues: PropsType.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UserLogin);

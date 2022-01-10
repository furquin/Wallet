import React, { Component } from 'react';

export class UserLogin extends Component {
  render() {
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
              required="true"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Insira sua senha"
              data-testid="password-input"
              required="true"
              minLength={ 6 }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default UserLogin;

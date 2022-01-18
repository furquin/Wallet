import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import UserWallet from '../components/UserWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <UserWallet />
        <Table />
      </div>);
  }
}

export default Wallet;

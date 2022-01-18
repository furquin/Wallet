import React from 'react';
import Table from '../components/Table';
import UserWallet from '../components/UserWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <UserWallet />
        <Table />

      </div>);
  }
}

export default Wallet;

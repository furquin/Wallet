import { WALLET_INFO } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INFO: {
    return { ...state, user: action.saveWalletInfo };
  }

  default:
    return state;
  }
};

export default wallet;

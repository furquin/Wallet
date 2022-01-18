import { WALLET_INFO, CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INFO: {
    return {
      ...state,
      expenses: [...state.expenses,
        {
          ...action.expenses,
          exchangeRates: action.currencies,
          id: state.expenses.length,
        },
      ],
    };
  }

  case CURRENCY: {
    return { ...state, currencies: action.currencies };
  }

  default:
    return state;
  }
};

export default wallet;

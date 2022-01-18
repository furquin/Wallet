import fetchApi from '../services/walletAPI';

export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';
export const CURRENCY = 'CURRENCY';

export const saveInfoUser = (email) => ({
  type: USER_INFO,
  email,
});

export const saveWalletInfo = (expenses, currencies) => ({
  type: WALLET_INFO,
  expenses,
  currencies,
});

export const saveCurrencyInfo = (currencies) => ({
  type: CURRENCY,
  currencies,
});

export const saveWalletInfoThunk = (expenses) => async (dispatch) => {
  const currencies = await fetchApi();
  dispatch(saveWalletInfo(expenses, currencies));
};

export const saveCurrencyInfoThunk = () => async (dispatch) => {
  const ApiResult = await fetchApi();
  const objectApi = Object.keys(ApiResult);
  const USDT = objectApi.indexOf('USDT');
  objectApi.splice(USDT, 1);
  dispatch(saveCurrencyInfo(objectApi));
};

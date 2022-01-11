export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';

export const saveInfoUser = (email) => ({
  type: USER_INFO,
  email,
});

export const saveWalletInfo = (wallet) => ({
  type: WALLET_INFO,
  wallet,
});

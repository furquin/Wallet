export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';

export const saveInfoUser = (user) => ({
  type: USER_INFO,
  user,
});

export const saveWalletInfo = (wallet) => ({
  type: WALLET_INFO,
  wallet,
});

import { SET_BALANCE, DEPOSIT_BALANCE, WITHDRAW_BALANCE } from "./constants";

export const setBalance = balance => {
  return {
    type: SET_BALANCE,
    balance
  };
};

export const depositBalance = deposit => {
  return {
    type: DEPOSIT_BALANCE,
    deposit
  };
};

export const withdrawBalance = withdraw => {
  return {
    type: WITHDRAW_BALANCE,
    withdraw
  }
}

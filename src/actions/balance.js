import { SET_BALANCE } from "./constants";

export const setBalance = balance => {
  return {
    type: SET_BALANCE,
    balance
  }
}

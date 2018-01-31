import * as constants from "../actions/constants";
import * as actions from "../actions/balance";

it("creates an action to set the balance", () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});
it("creates an action to deposit into the balance", () => {
  const deposit = 10;
  const expectedAction = { type: constants.DEPOSIT_BALANCE, deposit };
  expect(actions.depositBalance(deposit)).toEqual(expectedAction);
});
it("creates an action to withdraw from the balance", () => {
  const withdraw = 10;
  const expectedAction = { type: constants.WITHDRAW_BALANCE, withdraw };
  expect(actions.withdrawBalance(withdraw)).toEqual(expectedAction);
})

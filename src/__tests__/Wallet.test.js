import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "../components/Wallet";

describe("Wallet", () => {
  const mockDepositBalance = jest.fn();
  const mockWithdrawBalance = jest.fn();
  const props = { balance: 20, depositBalance: mockDepositBalance, withdrawBalance: mockWithdrawBalance };
  const wallet = shallow(<Wallet {...props} />);
  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });
  it("displays the balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });
  it("creates an input to deposit into or withdraw from the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });
  describe("when the user types in the wallet input", () => {
    const userBalance = "25";
    beforeEach(() => {
      wallet.find(".input-wallet").simulate("change", { target: { value: userBalance } });
    })
    it("updates the local wallet balnce in `state` and converts it to a number", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });
    describe("and the user wants to make a deposit", () => {
      beforeEach(() => {
        wallet.find(".btn-deposit").simulate("click");
      });
      it("dispatches the `depositBalance()` it receives from props", () => {
        expect(props.depositBalance).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
    describe("and the user wants to make a withdrawal", () => {
      beforeEach(() => {
        wallet.find(".btn-withdraw").simulate("click");
      });
      it("dispatches the `withdrawBalance` it receives from props", () => {
        expect(props.withdrawBalance).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  })
});

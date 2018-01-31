import React, { Component } from "react";
import { connect } from "react-redux";
import { depositBalance, withdrawBalance } from "../actions/balance";

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = { balance: undefined }
  }
  updateBalance = event => {
    this.setState({balance: parseInt(event.target.value, 10)});
  }
  depositBalance = () => {
    this.props.depositBalance(this.state.balance);
  }
  withdrawBalance = () => {
    this.props.withdrawBalance(this.state.balance);
  }
  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
        <button className="btn-deposit" onClick={this.depositBalance}>Deposit</button>
        <button className="btn-withdraw" onClick={this.withdrawBalance}>Withdraw</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    balance: state.balance
  };
}

export default connect(mapStateToProps, { depositBalance, withdrawBalance })(Wallet);

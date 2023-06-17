import React from "react";
import ClassStatement from "./ClassStatementEntry";

class ClassBankAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      entries: [
        {index: 0, value: 'Opened the account'}
      ] // array of transactions
    }

    // this.deposit.bind(this);
  }

  deposit = (amount) => {
    this.setState((prev) => (
      {
        ...prev, balance: prev.balance + amount,
        entries: [...prev.entries, { index: this.state.entries.length, value: `An amount of ${amount} was deposited` }]
      }));
  }

  withdraw(amount) {
    this.setState((prev) => {
      console.log(prev.entries);
      return (

        {
          ...prev, balance: prev.balance - amount,
          entries: [...prev.entries, {index: this.state.entries.length, value: `An amount of ${amount} was withdrawn`}]
        })

    })
  }

  // using the index instead of the entry itself
  removeStatementEntry = (index) => {
    // entries are not unique since the same amount can be deposited more than once :)
    this.setState((prev) => {
      
      return ({
        ...prev,
        entries: [...prev.entries.filter(entry => entry.index !== index)]
      })
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.type} Account</h2>

        <button onClick={() => this.deposit(50)}>Deposit 50$</button>
        <button onClick={() => this.withdraw(50)}>Withdraw 50</button>

        <div>Current balance: {this.state.balance}</div>

        <div>My account activity</div>
        <div>
          {this.state.entries.map((entry) => (
            // no need to write the entire function as you pass removeEntry, 
            // since the ClassStatement component will do the invocation
            <ClassStatement key={entry.index} entry={entry} removeEntry={this.removeStatementEntry} />
          ))}
        </div>
      </div>
    )
  }
}

export default ClassBankAccount;
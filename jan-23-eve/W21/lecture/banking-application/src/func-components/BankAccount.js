import {  useState } from "react";
import ClassStatement from "../class-components/ClassStatementEntry";

const BankAccount = ({type}) => {
  const [accountInfo, setAccountInfo] = useState({
    balance: 0,
    entries: [
      'Opened the account'
    ]
  });

  const deposit = (amount) => {
    setAccountInfo((prevAcctInfo) => (
      {
        ...prevAcctInfo, balance: prevAcctInfo.balance + amount,
        entries: [...prevAcctInfo.entries, `An amount of ${amount} was deposited`]
      }));
  }

  function withdraw(amount) {
    setAccountInfo((prevAcctInfo) => (
      {
        ...prevAcctInfo, balance: prevAcctInfo.balance - amount,
        entries: [...prevAcctInfo.entries, `An amount of ${amount} was withdrawn`]
      }));
  }

  return (
    <div>
      <h2>{type} Account</h2>

      <button onClick={() => deposit(50)}>Deposit 50$</button>
      <button onClick={() => withdraw(50)}>Withdraw 50</button>

      <div>Current balance: {accountInfo.balance}</div>

      <div>My account activity</div>
      <div>
        {accountInfo.entries.map((entry, index) => (
          <ClassStatement entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}

export default BankAccount;
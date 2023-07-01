import { useState } from "react";
import RegularTransactionForm from "./RegularTransactionFrom";

const RegularAccountSection = () => {
  const [currentBalance, setCurrentBalance] = useState('empty');
  const [accountList, setAccountList] = useState([]);

const refreshBalance = (newBalance) => {
  setCurrentBalance((prev) => prev + newBalance);
}

  return (
    <div>
      <h2>Your Accounts (not typed)</h2>
      Your current balance: {currentBalance} <br/>
      <RegularTransactionForm updateBalance={refreshBalance}/>

      {accountList.map((acct, index) => <span>...</span>)}
    </div>
  )
}

export default RegularAccountSection;
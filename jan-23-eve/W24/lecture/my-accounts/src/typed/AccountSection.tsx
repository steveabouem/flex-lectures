import { useState } from "react";
import TransactionForm from "./TransactionForm";
import { accountsLits, personnalAccount } from "../types";

const AccountSection = (): JSX.Element => {
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const [accountList, setAccountList] = useState<accountsLits<personnalAccount>>([]);

const refreshBalance = (newBalance: number) => {
  setCurrentBalance((prev) => prev + newBalance);
}

  return (
    <div>
      <h2>Your Accounts (typed)</h2>
      Your current balance: {currentBalance} <br/>
      <TransactionForm updateBalance={refreshBalance}/>

      {accountList.map((acct, index) => <span>...</span>)}
    </div>
  )
}

export default AccountSection;
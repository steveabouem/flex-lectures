import React, { useState } from 'react';
import { transactionProps } from '../types';

const RegularTransactionForm = ({updateBalance}: transactionProps): JSX.Element => {
  const [currentAmount, setCurrentAmount] = useState<number>(0);

  const updateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAmount(Number(event.target.value));
  }

  const submitTransaction = () => {
    updateBalance(currentAmount);
  }

  return (
    <>
      <label>Amount</label>
      <input value={currentAmount} onChange={updateAmount} type='number'/>
      <button onClick={submitTransaction}>Submit</button>
    </>
  )
}

export default RegularTransactionForm;
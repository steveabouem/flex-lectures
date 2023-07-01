import React, { useState } from 'react';

const RegularTransactionForm = ({updateBalance}) => {
  const [currentAmount, setCurrentAmount] = useState(0);

  const updateAmount = (event) => {
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
import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassBankAccount from './class-components/BankAccountAsClass';
import BankAccount from './func-components/BankAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <ClassBankAccount type="Chequings" />
      <BankAccount type="Savings" />
      {/* <Child /> */}
    </>
  </React.StrictMode>
);


import { accountPurpose, accountType, accountsLits, businessAccount, depositAmount } from "./types";

const deposit = (amount: depositAmount, balance) => {
  console.log(`Your new balance is ${balance + amount}`);
}

// NOT Allowed with TS
// deposit('a lot of money', 1000000);

// CORRECT INVOCATION
deposit(120, 1000000);


const myAccount: accountType = {
  dateOfCreation: '2022/01/01',
  balance: 0,
  owners: ['John Simpson', 'Jane Simpson'],
  purpose: accountPurpose.sav
}

console.log('MyAccount', myAccount);

const businessAccounts: accountsLits<businessAccount> = {
  accounts: [
    {
      legalName: 'Apple',
      holdings: 1000000000,
      poa: false,
      isCorporate: true,
      creditScore: 1000,
    }
  ]
};

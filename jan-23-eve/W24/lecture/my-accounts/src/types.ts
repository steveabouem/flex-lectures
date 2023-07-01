// litteral types
export type depositAmount = number;

// Object types
export interface accountType {
  dateOfCreation: string;
  balance: number;
  owners: string[];
  purpose?: accountPurpose;
}

export interface personnalAccount {
  name: string;
  balance: number;
}

export interface businessAccount {
  legalName: string;
  holdings: number;
  poa: boolean;
  isCorporate: boolean;
  creditScore: number;
}

export enum accountPurpose {
  chq = 'Chequings',
  sav = 'Savings',
  mtg = 'Mortage',
}

export type accountsLits<AccountType> =  AccountType[];

export interface transactionProps {
  updateBalance: (amount: number) => void;
}


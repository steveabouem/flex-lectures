// HAndle information without classes
const chequingsAccount = {
  balance: 0,
}


deposit = (amount) => {
  chequingsAccount.balance + amount;
}

const statement = () => {
  return `Current balance is at ${chequingsAccount.balance}`;
}
// With classes
// construction
class BankAccount {
  constructor(balance, type) { // build teh class initial properties from arguments passed 
    this.balance = balance;
    this.type = type;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  printStatement = () => {
    return `Current balance is at ${this.balance}`;
  }
}

const chequings = new BankAccount(0, 'chequings');
const savings = new BankAccount(10, 'savings');

chequings.deposit(100);
savings.deposit(100);
// // console.log(chequings.printStatement());
// console.log(savings.printStatement());

// Inherittance
class Mortgage extends BankAccount {
  constructor(mortgageBalance, mortgageTerm) {
    super(mortgageBalance, 'mortgage');// Run BankAccount class' constructor
    this.term = mortgageTerm;
  }
}

const home = new Mortgage(150000, 30);

home.withdraw(1000);
// console.log(home.printStatement());

console.log(home.type)
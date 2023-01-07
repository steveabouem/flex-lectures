/**
 * TYPESCRIPT PLAYGROUND
 * */
enum accountTypeEnum {
    investment = 'INV',
    chequings = 'CHQ',
    savings = 'SAV',
}

interface personalAccountInterface {
    id: number;
    balance: number;
    transactions: string[];
    type: accountTypeEnum;
}

interface tradingAccountInterface extends personalAccountInterface {
    stock: string;
}


const accounts: (tradingAccountInterface | personalAccountInterface)[] = [
    {
        id: 1,
        balance: 25000,
        transactions: [],
        type: accountTypeEnum.chequings
    },
    {
        id: 2,
        balance: 150,
        transactions: [],
        type: accountTypeEnum.savings
    },
    {
        id: 3,
        balance: 150,
        transactions: [],
        type: accountTypeEnum.investment,
        stock: 'tweeter'
    },
];

const myNumber: number = 1;
const myString: string = '1';

const processTransaction = <T>(amount: number, accountNum: number, thirdArgument?: T) => {
    let currentAcc: personalAccountInterface | tradingAccountInterface = accounts.find(acct => acct.id === accountNum );
    const message = `
        You made a ${amount < 0 ? 'withdrawal' : 'deposit'}
        from your account #${accountNum}. Balance: ${currentAcc.balance += amount}
    `;
    console.log(message);
    console.log('You are using a third argument of type ', typeof thirdArgument);
    
};

// VALID TRANSACTIONS
processTransaction(50, 2);
// INVALID TRANSACTIONS
// processTransaction('50', 2);
// processTransaction(50, '2');
// GENERIC TYPES IDENTIFICATION
processTransaction(50, 2, myNumber);
processTransaction(50, 2, myString);

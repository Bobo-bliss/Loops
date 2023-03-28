// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
    // Your code goes here...
    
    const lowestAccount = { id: 0, name: '', balance: Infinity, deposits: [], withdrawals: [] };
  
    for (let account of array) {
        if (account.balance < lowestAccount.balance && account.balance > 0) {
            lowestAccount.id = account.id;
            lowestAccount.name = account.name;
            lowestAccount.balance = account.balance;
            lowestAccount.deposits = account.deposits;
            lowestAccount.withdrawals = account.withdrawals;
        }
    }
  
    return [lowestAccount];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

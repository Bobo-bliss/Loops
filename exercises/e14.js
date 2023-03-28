
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
    // Your code goes here...
    let accounts = [];
  
  //Itterate through array
    for (let i = 0; i < array.length; i++) {
      
      //Collect all deposits
        let depos = [];
      
        if (array[i].deposits) {
            depos = array[i].deposits;
        } else {
            depos = 0;
        }
      
      //Sum all deposits
        let depoSum = 0;
      
        for (let j = 0; j < depos.length; j++) {
            depoSum += depos[j];
          
        }
      
      //Collect all withdrawals
        let withs = [];
      
        if (array[i].withdrawals) {
            withs = array[i].withdrawals;
        } else {
            withs = 0;
        }
      
      //Sum all withdrawals
        let withSum = 0;
      
        for (let n = 0; n < withs.length; n++) {
            withSum += withs[n];
        }
      
      //Collect all balance
        let bal = [];
      
        if (array[i].balance > 0) {
            bal = array[i].balance;
        } else {
            bal = 0;
        }
      
      //Deposits - withdrawals === balance?
        if (depoSum - withSum !== bal) {
            accounts.push(array[i])
        }
      
    }
  
    return accounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
    // Your code goes here...
    const accounts = [];
  
    for (let object in array) {
        accounts.push(array[object]);
    }
  
    const names = [];
      
    for (let name of accounts) {
        names.push(name.name);
    }
  
    const matches = [];

    for (let name of names) {
        for (let char of name) {
            if (char.toLowerCase() === letter.toLowerCase()) {
                matches.push(name);
            }
        }
    }
  
    return matches;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

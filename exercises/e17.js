
// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code

export function doesArrayInclude(array, value) {
    let result = false;
    
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
      
        // Store each element in a separate array
        let arr = [];
        for (let j = 0; j < array[i].length; j++) {
          arr.push(array[i][j]);
        }
        
        // Check if the element is equal to the value
        for (let n = 0; n < arr.length; n++) {
          if (arr[n] === value) {
            result = true;
            break;
          }
        }
        
        if (result) {
          break;
        }
    }
    
    return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

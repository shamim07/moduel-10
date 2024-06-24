//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(a, b) {
    return a + b;   
  } 
console.log ( calculateSum(4,7))
//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
  function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
//3)Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(reverseString("hello")); 
  console.log(reverseString("JavaScript")); 
 
  //5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
  function filterOddNumbers(numbers) {
    return numbers.filter(number => number % 2 !== 0);
  }
  
  // Example usage:
  console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log(filterOddNumbers([10, 15, 20, 25, 30])); 
  //6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
  function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  
  // Example usage:
  console.log(sumArray([1, 2, 3, 4, 5])); 
  console.log(sumArray([10, 20, 30, 40, 50])); 
  console.log(sumArray([-1, -2, -3, -4, -5]));
  
  //7)Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
  
  function sortArray(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }
  
  // Example usage:
  console.log(sortArray([5, 3, 8, 1, 2])); // Outputs: [1, 2, 3, 5, 8]
  console.log(sortArray([10, 20, 5, 15, 0])); // Outputs: [0, 5, 10, 15, 20]
  console.log(sortArray([-1, -3, 2, 1, 0])); // Outputs: [-3, -1, 0, 1, 2]
//8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Example usage:
  console.log(capitalizeFirstLetter("hello"));  // Outputs: "Hello"
  console.log(capitalizeFirstLetter("javaScript"));  // Outputs: "JavaScript
  
  
  
  
  
  

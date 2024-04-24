// 2) Do the below programs in arrow functions.

// a) Print odd numbers in an array
var oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
      if(array[i] % 2 !== 0){
        console.log(array[i]);
      }
    }
  }
  
  // Test
  var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  oddNumbers(numArray);
  
  // b) Convert all the strings to title caps in a string array
  var titleCase = (str) => {
    str = str.toLowerCase().split(' ');
  
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  
    return str.join(' ');
  }
  
  // Test
  var stringArray = ["gokul selvam m"];
  var titleCasedArray = stringArray.map(titleCase);
  console.log(titleCasedArray);  
  
  // c) Sum of all numbers in an array
  var sumArray = (array) => {
    var sum = 0;
  
    for(var i = 0; i < array.length; i++){
      sum = sum + array[i];
    }
  
    return sum;
  }
  
  // Test
  var numArray2 = [1, 2, 3, 4, 5];
  console.log(sumArray(numArray2));
  
  // d) Return all the prime numbers in an array
  var primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
  
    console.log(numArray);
  }
  
  // Test
  var numArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  primeNumber(numArray3);  
  
  // e) Return all the palindromes in an array
  var Palindrome = (arr) => {
    return arr.filter((str) => {
      return str === str.split('').reverse().join('');
    });
  }
  
  // Test
  var strings = ["level", "hello", "radar", "world", "madam"];
  console.log(Palindrome(strings));
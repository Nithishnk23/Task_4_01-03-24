// A) Print odd numbers in an array

//anonymous
let printOddNumber = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]);
      }
    }
  };
  printOddNumber([1,2,3,4,5,6,7,8,9]);

// B) Convert all the strings to title caps in a string array
 let caps = function(arr) {
  let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  console.log(titlecase);
 }
 caps("my name is nithish");
  
// C) Sum of all numbers in an array
let num = function(arr) {
  
  let sum = arr.reduce(function(a, b){
    return a + b;
  });
  console.log(sum);
}
num([1,2,3,4,5]);

// D) Return all the prime numbers in an array
let prime = function (arr) {
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};
console.log(prime([7, 16, 9, 3]));

// E) Return all the palindromes in an array
let isPalindrome = function () {
  var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
}
isPalindrome()

// F) Return median of two sorted arrays of the same size
let median = function(a, b) {

  let c = [...a, ...b].sort((a, b) => a - b);

  const half = c.length / 2 | 0;
  
if (c.length % 2) {
  return c[half];
} else {
  
  return (c[half] + c[half - 1]) / 2;
}
}
let arr1 = [1, 12, 15, 26, 38,24];
let arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));

// G) Remove duplicates from an array
findDuplicates = function () {
  
  const yourArray = [1, 1, 2, 3, 4, 5, 5]
  let duplicates = []
  const tempArray = [...yourArray].sort() 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i])
    }
  }
  console.log(duplicates) 
}
findDuplicates()

// H) Rotate an array by k times
let rotateArray =function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
rotateArray([1,2,3,4,5],2)
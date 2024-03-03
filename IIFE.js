// a) Print odd numbers in an array

//IIFE
(function printOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]);
      }
    }
  })([1,2,3,4,5,6,7,8,9]);

// b) Convert all the strings to title caps in a string arrays
 (function (string) {
    string = string.toLowerCase().split(' ');
      for (let i=0; i< string.length; i++ ) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);  
      }
        console.log(string.join(' '));
    })("my name is nithish");

// c) Sum of all numbers in an array    
(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          console.log(sum);
    })([1,2,3,4,5]);

// D) Return all the prime numbers in an array
(function (){
    var primeNum = [7, 16, 9, 3]
    
    primeNum = primeNum.filter(function(number) {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(primeNum);
    })()

    
// E) Return all the palindromes in an array
const array = ['racecar', 'hello', 'level', 'javascript', 'pop'];

const palindromes = (function() {
  function isPalindrome(str) {
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }

  return array.filter(function(str) {
    return isPalindrome(str);
  });
})();
console.log(palindromes);

// F) Return median of two sorted arrays of the same size
( function() {
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      const half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
    })()

// G) Remove duplicates from an array
var Arr=[1,1,2,3,4,5];
(function (Arr){
   let dup = [...new Set(Arr)];
   return(dup);
 })
 (Arr);

 // H) Rotate an array by k times
 (function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5],2)
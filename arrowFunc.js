// a) Print odd numbers in an array

let printOddinArrow = (arr) => {
    for (let i = 0; i < arr.length; i++)
    {
      if (arr[i] % 2 != 0)
      {
        console.log(arr[i]);
      }
    }
 };
printOddinArrow([1,2,3,4,5,6,7,8,9]);

// b) Convert all the strings to title caps in a string array
let titlecase = (string) => {
  string = string.toLowerCase().split(' ');
    for (let i=0; i< string.length; i++ ) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);  
    }
      console.log(string.join(' '));
  };
  
titlecase("my name is nithish");

// c) Sum of all numbers in an array
let sum = (array)=>{
  var sum = 0;
       for(var i = 0 ; i< array.length ; i++){
          sum = sum + array[i];
        }
        console.log(sum);
        }
sum([1,2,3,4,5]);

// D) Return all the prime numbers in an array
primeNumber = (numArray) => {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}
primeNumber([7,16,9,3]);


// E) Return all the palindromes in an array
const words = ["level", "hello", "radar", "world", "deed"];

const palin = (() => {
  return words.filter(word => word === word.split('').reverse().join(''));
})();

console.log(palin);
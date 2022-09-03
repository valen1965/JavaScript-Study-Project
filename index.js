// ARRAYS
// 16 - Reducing an Array.

const numbers = [1, 15, 22, 3];

// let sum = 0;
// for (let value of numbers)
//   sum += value;


// Reduce method

// a = 0, c = 1 => a = 1
// a = 1, c =15 => a = 16
// a = 16, c = 22 => a = 38
// a = 38, c = 3 => a = 41

// const sum = numbers.reduce((accummulator, currentValue) =>{
//   return accummulator + currentValue;
// }, 0);


// we can make this code shorter.  

const sum = numbers.reduce(
  (accummulator, currentValue) => accummulator + currentValue);

console.log(sum);  
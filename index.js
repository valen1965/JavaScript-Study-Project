// ARRAYS
// 10 - Iterating an Array.

const numbers = [1, 2, 3,];

// for(let number of numbers)
//   console.log(number);

// numbers.forEach(function(number){
//   console.log(number);
// })  

numbers.forEach((number, index) => console.log(index, number)); 


for (let key in numbers)
  console.log(key, numbers[key]);
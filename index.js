// ARRAYS
// 03 - Finding Elements (Primitives)

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

// returns true if given element exists in the array

console.log(numbers.indexOf(1) !== -1);

// new method
console.log(numbers.includes(1));
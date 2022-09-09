//ARRAYS - 13 - Testing the Elements of an Array.

const numbers = [1, 2, 3, 4];

const allPositive = numbers.every(value => value >= 0);

console.log(allPositive);


const someNegative = numbers.some(value => value <= 0);

console.log(someNegative);
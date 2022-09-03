// ARRAYS
// 13 - Testing the Elements of an Array.

const numbers = [1, -2, 3];

//checking if all numbers in the array are positive

const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

// arrow function
const allPos = numbers.every(value => value >= 0);
console.log(allPos);

const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// ARRAYS
// 02 - Adding Elements (Primitives)

const numbers = [3, 4];

// Adding elements into an array
//=================================
// End
numbers.push(5, 6);
console.log(numbers);

// Begining
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

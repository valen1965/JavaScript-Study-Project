// ARRAYS 16 - Reducing an Array;
const numbers = [1, 2, 3 ];

let sum = 0;
for (let value of numbers)
  sum += value;

console.log(sum);

// a =0, c = 1 => 1
// a =1, c = 2 => 3
// a =3, c = 3 => 6

const result = numbers.reduce(
    (acc, curr) => acc + curr
);

console.log(result);
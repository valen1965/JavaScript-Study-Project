// ARRAYS
// 08 - Combining and Splicing Arrays.

// const first = [1, 2, 3,];
const first = [{ id: 1}];
const second = ['a', 'b', 'c'];


const combined = first.concat(second);
first[0].id = 10;
 
const slice = combined.slice(0);

console.log(combined);
console.log(slice);
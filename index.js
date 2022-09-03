// ARRAYS
// 09 - Spread Operator. ( ES6 - ECMASript 6 )

const first = [1, 2, 3,];
const second = ['a', 'b', 'c'];

// const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

// const copy = combined.slice(0);
const copy = [...combined, 'D'];

console.log(combined);
console.log(copy);
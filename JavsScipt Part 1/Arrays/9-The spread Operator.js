//ARRAYS - 9 - Spread Operators.
let  first = [1, 2, 3];
let second = [4, 5, 6];

//const combined = first.concat(second);

//const slice = combined.slice() 

// ES6 spread operator

const combined = [...first, 'a', 'b', ...second];
console.log(combined);


const slice = [...combined]; 
console.log(slice);
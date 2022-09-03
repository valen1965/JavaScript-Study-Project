// ARRAYS
// 15 - Mapping an Array.

const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(value => value  >= 0);
// console.log(items);

// const items = filtered.map(value => '<li>' + value + '<li>')
// const html = '<ul>' +  items.join('') + '</ul>';

// const items = filtered.map(value => {
//   const obj = { value: value };
//   return obj;
// }); 

// Arrow function
//const items = filtered.map(value => ({ value: value })); 



// Both filter and map methods return new array ( not modifying an array)

// therefore we can use chaining ( one method followed by another one)

const items = numbers
  .filter(value => value >=0)
  .map(value => ({ value: value }))
  .filter(obj => obj.value >1)
  .map(obj => obj.value);

console.log(items);

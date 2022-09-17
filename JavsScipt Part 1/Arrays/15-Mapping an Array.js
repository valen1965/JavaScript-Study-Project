// ARRAYS 15 - Mapping an Array.

const numbers = [1, -2, 3, 4];

const items = numbers
  .filter(number => number >= 0)
  .map(number => ({ value: number}))
  .filter(obj => obj.value > 1 )
  .map(obj => obj.value);

console.log(items);




//console.log(items);

//const html = '<ul>' + items.join('') + '<ul>';




//console.log(html);


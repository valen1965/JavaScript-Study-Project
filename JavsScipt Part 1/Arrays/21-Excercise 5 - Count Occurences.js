/ Excercise 5
const numbers = [1, 2, 1, 2, 3, 4, 4, 1];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let number of array)
//     if(number === searchElement) 
//     count ++;
//   return count;

// reduce method
return array.reduce((acc, curr) => {
//  if (searchElement === curr)
//   return acc + 1
//     return acc + 0
  
//   return acc;
const occurrence = (searchElement === curr) ? 1: 0;
return acc + occurrence;

}, 0);
}
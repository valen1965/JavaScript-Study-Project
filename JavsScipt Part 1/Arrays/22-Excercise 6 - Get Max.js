// Excercise 6
const numbers = [2, 3, 5, 7, 11];

const max = getMax(numbers);

console.log(max);

// function getMax(array) {
//  if(array.length === 0) return undefined;

//   let max = array[0];
//    for(let i =1; i < array.length; i++)
//     if(array[i] > max )
//       max = array[i];
  
//    return max;  
// }

function getMax(array) {
  if(array.length === 0) return undefined;
  return array.reduce((a, b) => (a > b) ? a : b);
}
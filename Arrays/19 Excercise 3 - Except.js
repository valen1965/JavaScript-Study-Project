// Excercise 3
const numbers = [1, 2, 3, 4, 5];

const output = except(numbers, []);
console.log(output);

function except(array, excluded) {
const newArray = [];
for (let number of array)
  if(!excluded.includes(number)) 
  newArray.push(number);
return newArray;  
}
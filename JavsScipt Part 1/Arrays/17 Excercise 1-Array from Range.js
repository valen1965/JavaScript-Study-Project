// Excercise 1 

const numbers = arrayFromRange (-1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
  const newArray = [];
  for(let i = min; i <= max; i++)
    newArray.push(i);
  
  console.log(newArray);
}
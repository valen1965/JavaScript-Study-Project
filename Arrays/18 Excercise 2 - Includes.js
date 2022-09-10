// Excercise 2
const numbers = [1, 2, 3, 4, 5];

const number = includes(numbers, 5);
console.log(number);

function includes(array, searchElement) {
  for (let value of array)
    if (value === searchElement) 
      return true;
  return false;  
}

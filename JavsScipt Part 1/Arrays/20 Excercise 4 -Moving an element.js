// Excercise 4
const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, -1);
console.log(output);
//console.error('Invalid')

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset');
    return;
  } 
        
  const newArray = [...array];
  const element = newArray.splice(index, 1)[0];
  newArray.splice(position, 0, element);
  return newArray;  
}

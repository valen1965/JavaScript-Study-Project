// 20 - Excercise 4 - Moving an element.
const numbers = [1, 2, 3, 4, 5, 6];

const output = move(numbers, 0, 0);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
   if (position >= array.length || position < 0) {
    console.error('Invalid offset');
    return;
   } 

  const output = [...array];          // copying the array
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
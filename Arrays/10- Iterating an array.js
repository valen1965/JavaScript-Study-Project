//ARRAYS - 10 - Iterating an Array.
const numbers = ['1', 'b', 0, 4];

for (let element of numbers)
  console.log(element);  

numbers.forEach((element, index) => console.log(index, element));  


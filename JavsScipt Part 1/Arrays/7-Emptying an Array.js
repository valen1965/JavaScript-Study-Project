//ARRAYS - 7 - Emptying an Array.

let numbers = [1, 2, 3, 4, 5, 6, 7];
let another = numbers;
// Solution 1
// If no other references to the original array, it will later be removed by javascript garbage collector.
numbers = [];

//despite the array was re-assigned to empty array, its data
// still remain in the memory and can be referenced by another variable/constant.

console.log(numbers);
console.log(another);

// if there are multiple references to the original array then we need to use another solution.

// Solution 2.

numbers.length = 0;  // setting numbers properties to zero will truncate the array
console.log(numbers);
console.log(another);

// Solution 3

numbers.splice(0, numbers.length);
console.log(numbers);

// Solution 4

const numbers2 = [1, 2, 3, 4, 5];
while(numbers2.length > 0)
  numbers2.pop();

console.log(numbers2);





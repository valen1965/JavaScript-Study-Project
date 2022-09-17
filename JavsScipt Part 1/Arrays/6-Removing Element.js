//ARRAYS - 6 - Removing Element.

const numbers = [1, 2, 3, 4, 5, 6, 7];

// End
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Middle
const middle = numbers.splice(1, 1);
console.log(numbers);
console.log(middle);
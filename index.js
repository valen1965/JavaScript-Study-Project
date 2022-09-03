// ARRAYS
// 05 - Arrow Functions

// In ES6 there is a shorter and cleaner way to write the same code using Arrow Functions. Wherner you want to pass a function as a callback function or as an argument for a differenet method, use the arrow function syntax.


const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

const course = courses.findIndex(course => course.name === 'b');

console.log(course);

const cours = courses.find(cours => cours.name === 'a');

console.log(cours);


// Finding Elelents (reference type) using function sytax;

const cour = courses.find(function(cour) {
  return cour.name === 'a';  
});

console.log(cour);
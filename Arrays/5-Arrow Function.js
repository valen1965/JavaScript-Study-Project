//ARRAYS - 5 - Arrow Function;

const courses = [
  { id: 1, name: 'alpha' },
  { id: 2, name: 'beta' },
];

// const course = courses.find(function(course) {
//   return (course.name === 'alpha');
// });

// console.log(course);

// Arrow Function.
const course = courses.find(course => course.name === 'alpha');

console.log(course);


// const foundIndex = courses.findIndex(function(course) {
//   return (course.name === 'beta');
// });

// console.log(foundIndex);

// Arrow Function.
const foundIndex = courses.findIndex(course => course.name === 'alpha');

console.log(foundIndex);

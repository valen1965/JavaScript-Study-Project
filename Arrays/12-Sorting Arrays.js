//ARRAYS - 12 - Sorting Arrays.

// numbers and strings

// const numbers = [4, 2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// objects

const courses = [
  { id: 1, name:'node.js'},
  { id: 2, name: 'javascript'},
];

courses.sort(function(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if(nameA < nameB) return -1;
  if(nameA > nameB) return 1;
  return 0;
});

console.log(courses);


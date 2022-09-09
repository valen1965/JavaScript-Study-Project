//ARRAYS - 4 - Finding Elements;
// (Reference Types).

// Find method returns first element that matches 
// certain criteria.  

const courses = [
  { id: 1, name: 'alpha' },
  { id: 2, name: 'beta' },
];

const course = courses.find(function(course) {
  return (course.name === 'alpha');
});

console.log(course);

const foundIndex = courses.findIndex(function(course) {
  return (course.name === 'beta');
});

console.log(foundIndex);
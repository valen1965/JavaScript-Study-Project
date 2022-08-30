
// Exercise  - String Properties.

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 5.7,
    director: 'd'
};

showProperties(movie);


function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') // "obj[]" to get value of a property
      console.log(key, obj[key]);
    } 
}



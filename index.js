
//FUNCTIONS - Excercise 3 - Error handling.


try {
  const numbers = [1, 2, 3, 4, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
}
catch(e) {
 console.log(e.message); 
 }

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
    throw new Error('Value is not an array.');

  return array.reduce((acc, current) => {
    const occ = (current === searchElement) ? 1: 0;
  
    return acc + occ; 
  },0);
}


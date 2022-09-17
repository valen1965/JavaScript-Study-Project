// EXCERCISE 3 - Error handling.  
try {
  const numbers = [1, 2, 3, 4, 1, 1, 4];
  const count = countOccurrences(null, 2);
  console.log(count);
  }
  catch(e) {
    console.log(e.message);
  }
  
  function countOccurrences(array, searchElement) {
        if (!Array.isArray(array))
          throw new Error ('Invalid array.');
    
    return array.reduce((accumulator, current) => {
      const occurrences = (current === searchElement) ? 1: 0;
      return accumulator + occurrences;
    },0);
  }
  
  
  
  
  // let count = 0;  
  //   for(let element of array)
  //     if(element === searchElement)
  //        count ++;
  //   return count;     
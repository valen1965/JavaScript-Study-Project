// 21 - Excercise 5 - Count Occurences.

// My solution

const numbers = [1, 2, 3, 4, 1, 4];

const count = countOccurances(numbers, 1);

console.log(count);

// function countOccurances(array, searchElement) {
//   const count = 0;
//   for (let element of array)
//     if (element === searchElement)
//       count++;
//   return count;
// }

// reduce method

function countOccurances(array, searchElement) {
    return array.reduce((accummulator, current) => {
    const occurrence = (current === searchElement) ? 1: 0;
    console.log(accummulator, searchElement, occurrence);
    return accummulator + occurrence;
  }, 0 );
}

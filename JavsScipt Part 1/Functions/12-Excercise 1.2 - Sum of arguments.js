// EXCERCISE 1.2 - Sum of arguments.  

const split = ([1, 2, 3, 4, 12,]);

const items = removeComma(split);

function removeComma (array) {
  const newArray = [];
  for(let element of array)
  if(element !== ',')
  newArray.push(element)
  return newArray;
}


//converting array of string into array of numbers.

let array = Object.keys(items)
    .map(function(key) {
        return items[key];
    });

const total = array.reduce((a, b) => a + b);

console.log(total);



// converting array of string into array of numbners

// const arrOfstring = array;

// const arOfn = arrOfstring.map(str => {
//   return Number(str);
// })

// console.log(arOfn);


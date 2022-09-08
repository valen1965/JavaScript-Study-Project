// let stringArray = (['1', '2', '3']);
// let numberArray = [];
// length = stringArray.length;

//      for (let i = 0; i < length; i++)
//     numberArray.push(parseInt(stringArray[i]));
    
//     console.log(numberArray);

// let stringArray = ['1', '2', '3', 4];
// let numberArray = stringArray.map(Number);
// console.log(numberArray);


// method 3

// let stringArray = ['1', '2', '3', '4', '5'];
// let numberArray = [];

// stringArray.forEach(element => numberArray.push(+ element));

// console.log(numberArray);

// method 4

let stringArray = ['1', '2', '3', '4', '5', '7'];

let numberArray = stringArray.reduce((acc, n) => acc.concat(+n), []);

console.log(numberArray);


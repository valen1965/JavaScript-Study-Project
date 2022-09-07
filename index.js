
// Functions  02 - Hoisting
//  is the process of moving function declaration to the top of a file. Therefore we can define fnction before function declaration.            

// Function declaration
walk();

function walk() {
  console.log('walk');
}

run(); // can not define function before function expression.

let run = function() {
  console.log('run');
};


// Functions  09 - Let vs Var.

// First problem with var declaration:

// function start() {
//   for (let i = 0; i < 5; i++) {
//     if(true) {
//       var color = 'green';
//     }
//     console.log(color);
//   }
//   console.log(i);
// }

// var => function-scoped variable
// let, const => block-scoped variable

// start();

// Second problem with var declaration:

var color = 'red';
let age = 30;

function sayHi() {
  console.log('hi');
}


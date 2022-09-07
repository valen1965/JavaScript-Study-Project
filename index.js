
// Functions  01 - Function Declaration vs Expressions


// Function declaration
function walk() {
  console.log('walk');
}

// //Named Function Expression.
// let run = function walk() {
//   console.log('run');
// };

//Anonymous Function Expression.
let run = function() {
  console.log('run');
};
let move = run;
run();
move();
// Functions - 1- Function Declaration vs Expression.

//Function Declaration  ( by convention no need to add (;) at the end)
function walk() {
  console.log(walk);
} 

//Named Function Expression ( need to add (;) at the end)
function walk() {
  console.log('walk');
}

//Anonymous Function Expression ( need to add (;) at the end)
let rune = function() {
  console.log('rune');
};
let move = rune;
rune();
move();
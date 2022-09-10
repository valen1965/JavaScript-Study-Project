// Functions - 2- Hoisting.

//Function Declaration  ( by convention no need to add (;) at the end)

// Function declaration acn be called before its definition
// due to javascript HOISTING process.

walk();

function walk() {
  console.log(walk);
} 

//Named Function Expression ( need to add (;) at the end)

// Function expression can be called only after it has been defined.

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
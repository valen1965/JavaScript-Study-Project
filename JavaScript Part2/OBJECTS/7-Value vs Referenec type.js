// OBJECTS 7 - Value (primitives) vs Reference types.  

// Value types

// Number
// String
// Boolean
// Symbol
// null

// Reference types

// Object
// Function
// Array

// primitives - copied by the value
let x = 10;
let y = x;

x = 20;

// x & y are two independant variables;

// reference type - copied by the reference
let xx = { value: 40 };
let yy = xx;

xx.value = 50;

let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number);


let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

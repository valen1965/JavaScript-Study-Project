
// Chapter OBJECTS
// 7 - Value Type vs Reference Type;

// Value Type
// Number
// String
// Boolean
// Symbol
// Undefined
// null

// Reference Type
// Objects
// Functions
// Arrays

// let x = 10;
// let y = x;

// x = 20;

// let x = { value: 10 };
// let y = x;

// x.value = 20;

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
// let name = 'Mosh'; //String literal
// let age = 30; //Number literal
// let isApproved = true; //Boolean literal
// let firstName = undefined; // if not initialized that Underfined literal
// let lastname = null; // Null literal ( used when we need explicitely clear value of a variable) 

// 3 - Primitive types

// String
//Number
//Boolean
//undefined
//null

// 4 - Dynamic Typing

// 5 - Objects

// 5 Reference Types

// - Objects
// - Arrays
// - Functions

//let name = 'Mosh';
//let age = 30;

// we will declare person object instead of two variable

let person = {
    name: 'Mosh',
    age: 30
};

//Lets assume that we want to chnage name

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);    

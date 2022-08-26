// This is my first JavaScript code!
console.log('Hellow World');

//1- Variables 

//lately expression var to declare variable is no longer used
// expression let is therfore used to declare variables.
let name ='Vlad'; 
console.log(name);

//A few rules for variable declaration:

//1-cann not be a reserved keyword.
//2-should be meaningful
//3-can not start with a number
//4-can not contain a space of hyphen (-)
//5-are case sensitive
//6-if we need to declare a few variables we can do this this
// in single line, separated by coma

//  let firstName = 'Mosh', lastName = 'Hamedani';

//however, modern best parctice is to declare each variable ona new line:

let firstName = 'Mosh';
let lastName = 'Hamedani';

//2 - Constants


const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// if you need to re-assigne value - use atribute let:
// if you do not need to re-assign values - use atribute const: 
//ARRAYS - 8 - Combining and Slicing Arrays.
let  first = [1, 2, 3];
let second = [4, 5, 6];

// Combining
const combined = first.concat(second);
console.log(combined);

//Slicing
const slice = combined.slice() // if parameter empty method slice will copy the original array if primitive type.  object types are copied by its reference.

console.log(slice);

// Note:
// If dealing wil primitive values, values will be copied

// Object types (when we use concat method, object itself is not copied but its reference instead. )


let  third = [{ id: 1, name: 'beta' }, { id: 2, name: 'alpha'}];
let forth = [4, 5, 6];

const combined2 = third.concat(forth);
third[0].id = 30;
console.log(combined2);

const slice2 = combined2.slice();
console.log(slice2);

// Bitwise operators.

// numbers in decimal system as follows:

// 1 = 00000001   ( 8 digits = 8 bits = 1 byte  )
// 2 = 00000010  
// 3 = 00000011 
// R = 00000000

// Assumming that we nned to implement accec control system
// that means, user need access to  Read, Write, Execute.
// Read, Write, Execute
// 00000100 for Read permission
// 00000010 for Write permission
// 00000001 for Execute permission


console.log(1 | 2);  // Bitwise OR
console.log(1 & 2);  // Bitwise AND

const readPermission = 4;  // 00000100 we can use on-line converter to get decimal number 
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission);

let message = 
(myPermission & readPermission) ? 'yes': 'no'
console.log(message);
// Option 1

// let num1 = 35;
// let num2 = 20;

// if (num1 > num2)
//     console.log(num1);
//     else console.log(num2);

// Option 2

// let number = max(234, 234);
// console.log(number);

// function max (num1, num2) {
//     if (num1 > num2) return num1;
//     else return num2; 
// }   

// function max (num1, num2) {
//   if (num1 > num2) return num1;
//   return num2; 
// }   

// Final clean option

let number = max(41, 24);
console.log(number);

function max (num1, num2) {
return (num1 > num2) ? num1: num2;
}
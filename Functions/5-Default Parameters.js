// Functions - 5- Default parameters.  

const payback = interest(10000, undefined, 4)
console.log(payback);

// function interest(principal, rate, years) {
//   rate = rate || 4.5;
//   years = years || 6;

//   return principal * rate / 100 * years;
// }



// Since ES6 we can set dafault values as function parameters.

function interest(principal, rate = 4.5, years = 5) {
    
    return principal * rate / 100 * years;
  }
  
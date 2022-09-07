
// Functions  05 - Default Parameters.

// function interest(principal, rate, years) {
//   rate = rate || 3.5;
//   years = years || 5;
//   return principal * rate / 100 * years;
// }

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
  }

console.log(interest(10000));
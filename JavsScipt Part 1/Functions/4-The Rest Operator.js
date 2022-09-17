// Functions - 4-Rest Operator.  
// Must be last formal parameter.

function sum(discount, ...prices) { // ...prices -rest parameter is the last one
  const total = prices.reduce((a, b) => (1 - discount) * (a + b));
  return (total);
}

console.log(sum(0.1, 20, 30));

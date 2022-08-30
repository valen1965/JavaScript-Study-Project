
// Exercise  - Sum of multiples of 3 and 5

//multiples of 3: 3,6,9
//multiples of 5: 5,10

const multiple = sum(10) 
console.log(multiple);

function sum(limit){
  let sum = 0;

  for (let i = 0; i <= limit; i++) 
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  
  return sum;
}

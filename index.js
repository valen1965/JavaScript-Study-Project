
// Exercise  - Prime Numbers

// Prime =- whose factor is 1 and itself
// Composite

// 12 = 1, 2, 3, 4, 6, 12

// 11 = 1, 11

// can be divided evenly by its factors

showPrimes(20)

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {

    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}
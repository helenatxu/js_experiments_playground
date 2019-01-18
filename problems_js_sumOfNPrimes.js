// sumOfNPrimes

// Using firstNPrimes, write a function sumOfNPrimes(n) that returns 
// the sum of the first n prime numbers.

function isPrime(number) {
  if (number < 2) return false;
  var divisor = 2; // as 2 is prime
  while (divisor < number) {
    if (number % divisor === 0)
      return false;
    else if ((number/divisor) < divisor) 
      break;
    divisor ++;
  }
  return true;
}

function firstNPrimes(numberPrimes) {
  let primesList = [];
  let countPrimes = 1;
  for (let number = 2; countPrimes <= numberPrimes; number++) {
    if (isPrime(number)) {
      countPrimes ++;
      primesList.push(number);
      
    } 
  }
  return primesList;
}

function sumOfNPrimes(number) {
  let primesArray = firstNPrimes(number);
  let sumArray = 0;
  primesArray.forEach( el => sumArray+=el);
  return sumArray;
}

console.log('sumOfNPrimes 0 -->', sumOfNPrimes(0));
console.log('sumOfNPrimes 1 -->', sumOfNPrimes(1));
console.log('sumOfNPrimes 4 -->', sumOfNPrimes(4));


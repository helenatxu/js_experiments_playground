// sumOfNPrimes

// Using firstNPrimes, write a function sumOfNPrimes(n) that returns 
// the sum of the first n prime numbers.

function isPrime(number) {
  var divisor = 3; // as 2 and 3 are primes
  while (divisor < number) {
    divisor ++;
    if (number % divisor === 0)
      return false;
    else if ((number/divisor) < divisor) break;
  }
  return true;
}
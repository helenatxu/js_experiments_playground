//isPrime
// Define a function isPrime(number) that returns true if number is prime. 
// Otherwise, false. Assume number is a positive integer.

function isPrime(number) {
  var divisor = 2; // as 2 is prime
  while (divisor < number) {
    console.log('number / divisor', number, divisor);
    if (number % divisor === 0)
      return false;
    else if ((number/divisor) < divisor) 
      break;
    divisor ++;
  }
  return true;
}

console.log('isPrime 1', isPrime(1));
console.log('isPrime 2', isPrime(2));
console.log('isPrime 3', isPrime(3));
console.log('isPrime 4', isPrime(4));
console.log('isPrime 5', isPrime(5));
console.log('isPrime 6', isPrime(6));
console.log('isPrime 7', isPrime(7));
console.log('isPrime 10', isPrime(10));
console.log('isPrime 15', isPrime(15));
console.log('isPrime 23', isPrime(23));
console.log('isPrime 190', isPrime(190));
console.log('isPrime 199', isPrime(199));
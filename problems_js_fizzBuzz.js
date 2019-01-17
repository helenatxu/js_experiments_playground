// fizzBuzz
// Define a function fizzBuzz(array) that takes an array and 
// returns a new array of every number in the array that is 
// divisible by either 3 or 5, but not both.

function fizzBuzz(numbers_array) {
  let magic_numbers = [];
  numbers_array.forEach(elem => {
    // console.log(elem);

    if (elem %  3 === 0) {
      if (elem %  5 !== 0)
        magic_numbers.push(elem);
    } else if (elem %  5 === 0)
    magic_numbers.push(elem);
  });

  return magic_numbers;
}

console.log('fizzBuzz', fizzBuzz([0, 1, 2, 3, 4, 5, 10, 15, 30, 33, 35]));
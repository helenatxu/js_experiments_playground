"use strict";

function soundMaker(sound, times) {

  // closure
  function makeSound() {
    console.log(`${sound}`);
  }

  for (let i = 0; i < times; i++) {
    makeSound();
  }
}

soundMaker("Wooof", 5);



function summation(arr) {

  let sum = 1;
  let res = 1;

  console.log('begin res =', res);

  // closure
  function summer(res) {
    for (let i = 0; i < arr.length; i++) {
      sum *= arr[i];
      res -= arr[i];
      console.log('res =', res);
    }
  }

  summer(res);
  console.log('final res =', res);

  return sum;
}

console.log(summation([1,2,3,4]));



  // closure
function createCounter() {
  let count = 0;

  // here ++count means increment the value of the count variable by 1 and then the count variable is evaluated in the statement.
  // count++ means the count variable is evaluated in the statement and then the value is incremented by 1. If we used count++ our counter would be off by 1.
  return () => ++count;
}

console.log("counter");

let counter = createCounter();
console.log("counter 1", counter()); // => 1
console.log("counter 2", counter()); // => 2
counter.count; // undefined

let counter2 = createCounter();
console.log(counter2()); // => 1
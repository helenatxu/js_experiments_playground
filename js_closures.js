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
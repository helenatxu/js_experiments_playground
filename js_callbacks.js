"use strict";

//callbacks

let callback = function() {
  console.log('It has been 4 seconds');
};

let timeToWait = 4000; //ms

global.setTimeout(callback, timeToWait);


// callbacks
function logIfEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number!`);
  }
}

[1, 2, 3, 4, 5, 6].forEach(logIfEven);




// ES5 way

global.setTimeout(function() {
  console.log('ES5 way: It has been 5 seconds');
}, 5000);




//ES6 way

global.setTimeout(() => {
  console.log('ES6 way: It has been 6 seconds');
}, 6000);

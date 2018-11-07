"use strict";

//callbacks

let callback = function() {
  console.log('It has been 4 seconds');
};

let timeToWait = 4000; //ms

global.setTimeout(callback, timeToWait);




// ES5 way

global.setTimeout(function() {
  console.log('ES5 way: It has been 5 seconds');
}, 5000);




//ES6 way

global.setTimeout(() => {
  console.log('ES6 way: It has been 6 seconds');
}, 6000);

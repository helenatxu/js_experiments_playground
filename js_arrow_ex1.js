"use strict";

// normal callback function
function showEach1(array) {
  array.forEach(function(el) {
    console.log(el);
  });
}

// fat arrow function
function showEach2(array) {
  array.forEach(el => console.log(el));
}

showEach1([1]);
showEach2([1]);
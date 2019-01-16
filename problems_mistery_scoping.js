"use strict";

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    // var x = 'in block';  // cannot declare again x
    x = 'in block';
    console.log(x);
  }
  console.log(x);
}
mysteryScoping1();


function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  // constants of the same names can be declared in nested scopes
    console.log(x);
  }
  console.log(x);
}
mysteryScoping2();


function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    // var x = 'in block'; // constants cannot be redeclared
    var y = 'in block';
    console.log(x);
  }
  console.log(x);
}
mysteryScoping3();


function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block'; // works because let it's block scoped
    console.log(x);
  }
  console.log(x);
}
mysteryScoping4();


function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    x = 'in block';  // cannot redeclare let variable
    console.log(x);
  }
  x = 'out of block again'; // cannot redeclare let variable
  console.log(x);
}
mysteryScoping5();



// madLib

// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
// ex. madLib('make', 'best', 'guac'); "We shall MAKE the BEST GUAC." ```


function madLib(verb, adj, noum) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noum.toUpperCase()}`;
}

console.log(madLib('make', 'best', 'guac'));
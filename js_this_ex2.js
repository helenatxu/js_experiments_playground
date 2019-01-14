"use strict";

function times(num, fun) {
  for (let i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }

}

const dog = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
  }
};

console.log("method style call", dog.ageOneYear()); // works
// console.log("function style call", times(10, dog.ageOneYear)); // ReferenceError; this.age is not defined


// Solutions

// Function argument is different:
console.log("function style call with method style call inside",
  times(10, function () {
  dog.ageOneYear();
})
  );

// Bind
console.log("bind style call", times(10, dog.ageOneYear.bind(dog)));

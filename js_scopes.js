function times(num, fun) {
  for (let i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

const cat = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
    return this.age;
  }

};

console.log("cat.ageOneYear()");
cat.ageOneYear(); // works

console.log("times(10, cat.ageOneYear)");
times(10, cat.ageOneYear); // ReferenceError; this.age is not defined


console.log("times(10, function cat.ageOneYear) -- Function argument");
// Function argument is different:
times(10, function () {
  cat.ageOneYear();
});

console.log("times(10, bind way)");
times(10, cat.ageOneYear.bind(cat));
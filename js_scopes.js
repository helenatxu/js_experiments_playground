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

console.log("cat.ageOneYear()", cat.ageOneYear()); // works

console.log("times(10, cat.ageOneYear)", times(10, cat.ageOneYear)); // ReferenceError; this.age is not defined

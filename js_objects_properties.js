function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

// We set instance methods for the object on the prototype
Dog.prototype.bark = function() {
  console.log(this.name + " says: Woof, woof!!!");
};

Dog.prototype.whichColor = function () {
  console.log("The dog " + this.name + " is: " + this.color);
};

Dog.prototype.numLegs = 4;

let doggie = new Dog("Lluna", 5, "brown");


// adds all of the own properties to ownProps and all of the prototype properties to prototypeProps
let ownProps = [];
let prototypeProps = [];

for (let property in doggie) {
  if(doggie.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log("ownProps: ", ownProps); // prints ["name"]
console.log("prototypeProps: ", prototypeProps); // prints ["numLegs"]
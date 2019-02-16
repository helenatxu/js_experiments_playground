function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

// We create a new prototype to set properties and instance methods for the object
Dog.prototype = {
  constructor: Dog,  // define the constructor property
  numLegs: 4,

  whichColor: function () {
    console.log("The dog " + this.name + " is: " + this.color);
  },
  bark: function() {
    console.log(this.name + " says: Woof, woof!!!");
  }
};

let doggie = new Dog("Lluna", 5, "brown");


Dog.prototype.numEyes = 2;

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

console.log("Test ", doggie.constructor);

doggie.whichColor();
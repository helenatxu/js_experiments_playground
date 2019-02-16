function Animal() {}

Animal.prototype = {
  eat: function() {
    console.log("Nom, nom");
  },
  describe: function() {
    console.log("This is an animal.");
  }
}

function Dog(name, color, age) {
  this.name = name; // own attributes
  this.color = color;
  this.age = age;
}

Dog.prototype = Object.create(Animal.prototype); //creates a new object of Animal's prototype and sets it to Dog prototype
Dog.prototype.constructor = Dog; // sets the inherited constructor to Dog

Dog.prototype.legsNumber = 4; // prototype attribute

Dog.prototype.bark = function () {
  console.log(this.name + " says: Woof, woof!");
};

Dog.prototype.eat = function () { // overrides eat inherited method
  console.log("Niam, Niam");
};

let doggie1 = new Dog("Lluna", "brown", 5);
let doggie2 = new Dog("Chica", "brown", 2);

doggie1.bark();
doggie1.eat();
doggie2.describe();
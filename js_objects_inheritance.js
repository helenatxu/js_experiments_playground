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
  this.name = name;
  this.color = color;
  this.age = age;
  this.legsNumber = 4;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(this.name + " says: Woof, woof!");
};

Dog.prototype.eat = function () {
  console.log("Niam, Niam");
};

let doggie1 = new Dog("Lluna", "brown", 5);
let doggie2 = new Dog("Chica", "brown", 2);

doggie1.bark();
doggie1.eat();
doggie2.describe();
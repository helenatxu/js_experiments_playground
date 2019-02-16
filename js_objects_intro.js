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


let doggie1 = new Dog("Lluna", 5, "Yellow");
doggie1.bark();

console.log("The dog " + doggie1.name + " has " + doggie1.numLegs + " legs.");


console.log(Object.getPrototypeOf(doggie1));


Dog.pack = [doggie1, new Dog("Chica", 2, "Yellow"), new Dog("Lulu", 3, "White")];

Dog.party = function() {
  Dog.pack.forEach(dog => {
    dog.bark();
  });
};

Dog.party();

Dog.colors = function () {
  Dog.pack.forEach(dog => {
    dog.whichColor();
  });
};

Dog.colors();
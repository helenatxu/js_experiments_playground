function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Dog.prototype.bark = function() {
    console.log(this.name + " says: Woof, woof!!!");
  }

let doggie = new Dog("Lluna", 5, "Yellow");

doggie.bark();
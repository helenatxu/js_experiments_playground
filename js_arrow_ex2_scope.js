function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.toys = ['ball', 'rope', 'balloon'];
};

Dog.prototype.play = function guau() {
    this.toys.forEach(toy => console.log(`${this.name} plays with ${toy}`));
};
const Lluna = new Dog('Lluna', 'ginger');
Lluna.play();
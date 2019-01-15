function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.toys = ['string', 'ball', 'balloon'];
};

Dog.prototype.play = function guau() {
    this.toys.forEach(function(toy) {
        console.log(`${this.name} plays with ${toy}`);
    });
};

const Lluna = new Dog('Lluna', 'ginger');
Lluna.play();

// output
// undefined plays with string
// undefined plays with ball
// undefined plays with balloon
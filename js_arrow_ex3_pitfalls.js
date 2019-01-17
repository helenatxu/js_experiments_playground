// Common pitfalls 

// Fat arrows are anonymous, they can't have names

// sayHello(name) => console.log(`Hi, ${name}!`); // SyntaxError
(name) => console.log(`Hi, ${name}!`); // correct

const sayHello = (name) => console.log(`Hi, ${name}!`); // you can assign it to a variable

sayHello('Helena');
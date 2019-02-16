let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
}) (); // the final () makes it execute inmediately


function Person(name, age) {
  this.name = name;
  this.age = age;
}

let adulto1 = new Person("Ana", 30);
funModule.singMixin(adulto1); // passes the object to the singMixin's module 
adulto1.sing(); // now the sing method is available for adulto1

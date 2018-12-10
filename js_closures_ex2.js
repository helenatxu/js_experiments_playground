function sayHelena() {
    var say = function() { console.log(helena); }
    // Local variable that ends up within closure
    var helena = 'Hello Helena';
    return say;
}
sayHelena()();// logs "Hello Helena"
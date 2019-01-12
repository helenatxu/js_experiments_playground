let dog = {
  bark: function () {
    console.log("Woof");
  },
  barkMore: function () {
    for (let i = 0; i < 10; i ++) {
      this.bark();
    }
  }
};

dog.bark();
dog.barkMore();
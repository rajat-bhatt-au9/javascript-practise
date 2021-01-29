const person = {
  name: "Rajat Bhatt",
  age: 34,
  greet() {
    console.log("Hi my name is " + this.name);
  },
};

person.greet();

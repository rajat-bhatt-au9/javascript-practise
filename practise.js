const person = {
  name: "Rajat Bhatt",
  age: 34,
  greet() {
    console.log("Hi my name is " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];

/* for (let hobby of hobbies) {
  console.log(hobby);
}
 */

console.log(
  hobbies.map((hobby) => {
    return "Hobby: " + hobby;
  })
);

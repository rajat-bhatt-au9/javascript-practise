/* let const and var */

const name = "Rajat";
let age = 24;
const hasHobbie = true;

age = 32;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (n) => n + 1;

/* console.log(summarizeUser(name, age, hasHobbie)); */
console.log(add(5));

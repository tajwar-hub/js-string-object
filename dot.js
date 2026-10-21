const person = {
  name: "tobarak Ali",
  profession: "student",
  age: 21,
  isSingle: true,
};

let age = person.age;
console.log(age);
age = 24;
console.log(age);

console.log(person);
person.age = 29;
person.isSingle = false;
console.log(person);

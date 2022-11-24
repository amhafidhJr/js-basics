// function sayHello() {
//   for(var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i)
// }

// sayHello();

const person = {
  name: "Abdulhalim",
  age: 22,
  address: "123 Main Street",
  education: () => {
      console.log("Degree of English");
      console.log("Degree of Mathematics");
  },
};

console.log(person);
//change person name to "Mohamed"
person.name = "Mohamed";
console.log(person.education());
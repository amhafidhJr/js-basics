// function sayHello() {
//   for(var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i)
// }

// sayHello();

// const person = {
//   name: "Abdulhalim",
//   age: 22,
//   address: "123 Main Street",
//   education () {
//     const edu_background = this;
//     console.log(edu_background);
//     // console.log("Degree of Mathematics");
//   },
// };

// // console.log(person);
// // //change person name to "Mohamed"
// // person.name = "Mohamed";
// // console.log(person.education());

// const education = person.education.bind(person);
// education();

const colors = ["blue", "green", "yellow", "red"];
const items = colors.map((color) => `<li><b>${color}</b></li>`);
console.log(items);

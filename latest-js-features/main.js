// const data = 5;

// const blah = `i have ${data} donuts`;

// function addSomething(num1, num2 = 5) {
//   return num1 + num2;
// }

// console.log(addSomething(10, 20)); // 30

// const name = "Zachary";
// const age = 24;

// const myObj = {
//   name,
//   age,
// };

// const myValue = "wasdzxcawd";

// const otherObj = {
//   name: "Zachary",
//   age: 24,
//   [myValue]: "asd",
// };

// const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let blah of arr) {
//   console.log(item);
// }

// arr.forEach((item) => {});

// spread operator

// const arr = ["a", "b", "c"];

// arr.splice(0, 1);

// // ["b", "c"]
// let newArray = [];

// for (let item of arr) {
//   newArray.push(item);
// }

// const arr2 = ["asdasd", ...arr, "asd"];

// const person = {
//   name: "zachary",
//   age: 24,
// };

// const employee = {
//   id: "1235123asd",
//   joinDate: "1/12/1241",
//   ...person,
// };

// const arr3 = [
//   {
//     fname: "zachary",
//     lname: "kipping",
//     age: 24,
//     id: "123123",
//   },
// ];

// {
//   name: "zachary kipping",
//   age: 24,
//   id: "123123",
// }

// const blah = arr3.map((item) => {
//   return {
//     name: item.fname + item.lname,
//     ...item,
//   };
// });

// console.log(arr3, blah);

// const person = {
//   name: "zachary",
//   age: 24,
// };

// destructuring
// const name = person.name;
// const age = person.age;

// const {name, age, blah} = person;

// ({name, age}) => {

// }

// (person) => {
//   const name = person.name;
//   const age = person.age;
// }

// const arr = ["a", "b", "c"];

// const [item1, ...restOfTheItems] = arr;

// Classes

// class Person {
//   name;
//   age;

//   constructor(initName, initAge) {
//     this.name = initName;
//     this.age = initAge;
//   }

//   updateName(newName) {
//     this.name = newName;
//   }
// }

// const currentDate = new Date();
// console.log(currentDate);

// const myPerson = new Person("zach", 24);
// console.log(myPerson);
// myPerson.updateName("zachary");
// console.log(myPerson);

// Promises (asynchronous work/data)

// new Promise((resolve) => {
//   // asynchronous work/data
//   resolve([{}, {}, {}, {}, {}]);
// }).then((data) => {
//   document.write(data.map());
// });

fetch("https://api.angularbootcamp.com/employees").then((data) => {
  console.log(data);
});

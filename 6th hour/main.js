// // String properties and methods
// // same like objects

// // google "js string methods"

// let text = 'elvis mahmutovic';
// let result = text.length;

// console.log(result); // it counts white spaces

// console.log(text.toLowerCase()); // method

// console.log(text.charAt(0)); // 0 index based same like arrays

// console.log(text.charAt(text.length - 1)); // get last value by property and method

// console.log(text.indexOf('E')); // will return first index and stop
// console.log(text.indexOf('z')); // if it doesn't exists -1

// console.log(text.trim()); // takes out empty space

// console.log(text.trim().toLowerCase().startsWith('elvis')); //chaining methods and properties

// console.log(text.includes('ron')); // checks if it is there

// console.log(text.slice(0, 2)); // new string from existing (substring)

// console.log(text.slice(-1)); // gives you the last value at the end

// const person = {
//     name: 'elvis', // property some value
//     greeting() {
//         // method
//         console.log("hi, I am Elvis");
//     },
// };

// console.log(person);
// console.log(person.name);  // dot notation
// person.greeting();

// Template Literals - ES6+ last major update
// Backtick characters `` - above tab key
// Interpolation ${} - insert expression (value)

// let fname = 'John';
// let age = 100;

// let sentence = "Hi my name is " + fname + "" + 'and I am' + age;
// let sentence = `Hi my name is ${fname} and I am ${33 - 5}`;

// Array Properties and Methods

let anything = ['pants', 'shoes', 'hat', 'sleep', 'soccer'];

// length
console.log(anything.length);

// by index
console.log(anything[2]);

// last item index
console.log(anything[anything.length -2]);

// concat new array combine two arrays
let something = ['suite', 'phone', 'hotel', 'house', 'cat'];

const everything = anything.concat(something);

console.log(everything);

// reverse array
console.log(everything.reverse());

// unshift -adds at the start of the array
everything.unshift('computer');
console.log(everything);

// shift - removes first item of the array
everything.shift();
console.log(everything);

// push - adds at the end of the array
everything.push('elvissssssssss');
console.log(everything);

// pop - removes from the end of the array
everything.pop();
console.log(everything);

// splice - mutates original array (updates it)
// first number where do you want to start (index)
// second number how many do you want to include

let nothing = everything.splice(2,5);
console.log(nothing);


// Functions

// let fname = 'Elvis';

// function hi(fname, lname) {
//     console.log('hi ' + fname + lname);
// }

// hi(fname);

const wallH = 20;
// calculate 1 in = 2.54cm

function calc(value) {
    // console.log('the value for dimensions in cm is: ' + (pants * 2.54) + "cm");
    //return value * 2.54;
    let newValue = value * 2.54;

    return newValue;
}

let width = calc(10);
let height = calc(wallH);

console.log(width);


let dimensions = [width, height];
console.log("wall dimensions in cm: " + dimensions);

// function declaration
function addValues(num1, num2) {
    return num1 * num2;
}
console.log(addValues(5, 'pants'));

let firstValue = addValues(2,2);
console.log(firstValue);
let secondValue = addValues(12412432423, 234234234324);
console.log(secondValue);

// function expression

let add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(5,5));

// arrow functions only as expression or callback function
let mult = (num1, num2) => num1 * num2;
console.log(mult(30,50));

//Objects(collection of properties) -key/value pairs
// methods(functions)
// dot notation

let person = {
    name: "elvis",
    age: 24,
    education: false,
    married: true,
    friends: ['Ron', 'Alex'],
    greeting: function () {
        console.log("hi my name is elvis");
    }
};

// dot notation
console.log(person.name);
console.log(person.friends[0]);
person.greeting();

person.name = "Ron";

console.log(person);

// assigning to variable
var pants = person.age;

console.log(pants);

// Conditionals Statements
// >, <, >=, <=, ==, ===, !=, !===

// let value = 5 > 25;

// if(value) {
//     console.log('This is correct');
// }
// else {
//     console.log('this is not correct');
// }

let num1 = 6;
let num2 = 36;
const result = num1 >= num2;

if(num1 > num2) {
    console.log('First number is bigger then second');
}
else if(result) {
    console.log('both numbers are equal');
}
else {
    console.log('second number is bigger then first');
}

let fname = 'joe';

if(fname) {
    console.log('you are not joe you are elvis');
}
else {
    console.log('hi joe');
}
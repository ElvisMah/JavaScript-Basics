// // unary operator - typeof

// let text = 'some text';

// console.log(typeof text);

// // binary operator - assignment
// let text1 = 'some text';

// // ternary operator
// // condition ? (runs if tru) : (runs if false)

// value ? console.log(`it is true`) : console.log(`it is false`);

// let value = true;

// if(value) {
//     console.log(`it is true`);
// }
// else {
//     console.log(`it is false`);
// }

// Global Scope vs Local Scope
// any variable outside code block {function, {}, or it can be if statements} is said to be in Global Scope

// Local Scope -inside {} functions and if statements
// can not be accessed from outside code blocks
// if - NOT VAR

let fname = 'elvis';
fname = 'ron';

function calc() {
    fname = 'orange';
    age = 22;
    console.log(`First ${fname}`);
    function inner() {
        //fname = 'Imani';
        console.log(`this is from inner function ${fname}`);
    }
    inner()
}
calc();
console.log(age);

{
    // this is code block

}

// JavaScript does variable look up first local scope, then global, then not defined

const globalNumber = 5;
 
function add(num1, num2) {
    // const globalNumber = 20;
    let result = num1 + num2 + globalNumber;
    console.log(result);
    function mult() {
        // const globalNumber = 2;
        let multResult = result * globalNumber;
        console.log(multResult);
    }
    mult();
}
add(2, 6);

// Callback Function, Higher Order Function, Functions are first class objects/citizens

// Functions are first class objects - stored in a variable (expression) passed as an argument to another function, return from the function (closure)

// Higher Order Function - accepts another function as an argument or return another function as a result

// Callback Function - passed to a another function as an argument and executed inside that function 

// Callback Function
function morning(name) {
    return `Good morning ${name.toUpperCase()}`
}

function afternoon(name) {
    return `Good afternoon ${name.repeat(3)}`
}

// higher order function
function greet(name, cb) {
    const myName = 'elvis';
    console.log(`${cb(name)}, my name is ${myName}`);
}
greet('ron', morning); //we dont need to invoke it
greet('Imani ', afternoon);

// Powerfull Array Methods
// forEach, map, filter, find, reduce
// iterate over array - no for loop required
// Accepts Callback function as an argument, calls callback against each item in array. Reference item in the callback paramater

let friends = ['Hanah', 'Imani', 'Ron', 'Manny'];

//show all my friends
// for( let i=0; i< friends.length; i++) {
//     console.log(friends[i]);
// }

let people = [
    {
        name: 'Elvis',
        age: 34,
        position: 'Developer'
    },
    {
        name: 'Imani',
        age: 12,
        position: 'Student'
    },    
    {
        name: 'Alex',
        age: 1,
        position: 'Intern'
    },
]


// forEach
// does not return new array

function showPerson(item){
    console.log(item.position);
}
people.forEach(showPerson);

// anonymous function
people.forEach((item) => {
    console.log(item.age);
})


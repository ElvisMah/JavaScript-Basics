// arrays and for loops
// combine each name with last name

let fnames = ['anna', 'elvis', 'joe', 'ron'];
let lname = 'Smith';

let fullName = [];

// for loop
for(let i=0; i < fnames.length; i++) {
    // console.log(i);
    console.log(fnames[i]);
    const pants = `${fnames[i]} ${lname}`;

    fullName.push(pants);

}
console.log(fnames);
console.log(fullName);

// Function, return, arrays, for loop
// end of month expenses

const gas = [ 200, 40, 100];
const food = [10, 45, 50];

function calcTotal(pants) {
    let total = 0;

    for( let i=0; i < pants.length; i++) {
        total += pants[i];
    }
    return total;
}

const gasTotal = calcTotal(gas);
const foodTotal = calcTotal(food);
const randomNumbers = calcTotal([100,200,300]);

console.log({
    gas: gasTotal,
    food: foodTotal,
    randomNumbers: randomNumbers
});

// Reference vs value
// primitive is a fundamental data type that cannot be broken down into a more simple data type
// Primitive Data Types (string, number, symbol, boolean, Undefined, Null)
// Arrays, Functions, Objects = Object
// typeof

// when assigning primitive data type value to a variable any changes are made directly
// to that value, without affecting original value

let num1 = 1;
let num2 = num1;

num2 = 7;

console.log(`first number is ${num1}`);
console.log(`second number is ${num2}`);

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references

let person = {fname: 'elvis'};
let person2 = person;

person2.fname = 'dave';
console.log(`first person is ${person.fname}`);
console.log(`second person is ${person2.fname}`);

// Null and Undefined
// both represent  'no value'
// undefined - JS can not find value for this thing
// null - is set by dev

let number = 22 + null; // 22 + 0
let number2 = 22 + undefined; //NaN

// Truthy and Falsy
// "", '', ``, 0, -0, Nan, false, null, undefined

const bool1 = true;
const bool2 = 2>1;

const text = '';

if(text) {
    console.log(`hey the value is truthy`);
}else {
    console.log(`hey its falsy`);
}

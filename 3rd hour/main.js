// // Numbers

// let age = 34; //integer
// let age2 = 2.2; //decimal

// const add = age + age2;
// const sub = age - age2;
// const mult = age * age2;
// const div = age / age2;

// console.log(div);

// // +=, -=, *=, ++, --, %

// let num = 40;
// num +=4;
// num -=1;
// num++;
// num--;
// console.log(num);

// //


// let pizza = 10;
// let children = 3;

// const slices = pizza % children;

// console.log("I will have " + slices + " for my self");

// // Basic math operations

// const random = 4 + 6 + 10 * 10;
// console.log(random);

// const random2 = (4 + 6 + 10) * 10;
// console.log(random2);

// let num1 = 3;

// let num3 = 3 - '1';

// console.log(num3);

// example of implicit type

const randomNumber = 9;

document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    let value = document.getElementById('amount').value;
    value = parseInt(value);
    console.log('Input Value Type ' + value);
    console.log("sum of two values")
    console.log(randomNumber + value);
}
);


// // Data Types

// //string
// let abby = "abby rocks";
// console.log(typeof abby);

// //number
// const ron = 25;
// console.log(typeof ron);

// //boolean
// let hanah = true;
// let alex = false;

// console.log(hanah); 
// console.log(alex);

// //null
// let result = null;
// console.log(typeof result);

// //undefined
// let fname;
// console.log(typeof fname);

// arrays

// const friend1 = 'friend 1';
// const friend2 = 'Manny';
// const friend3 = 'Alima';

// let friends = ['friend 1', 'Manny', 'Alima', 'Zachary', 14, null, true];

// // change value
// friends[3] = "Clark";

// console.log(friends);

// let bestFriend = friends[3];
// console.log(bestFriend);

// Function declare and invoke

// function helloE() {
//     console.log('hi there elvis');
// }

// function helloR() {
//     console.log('hi there ron');
// }
// helloE();
// helloR();

// Function parms and arguments
let firstN = 'Hanah';

function hi(name) {
    console.log("hi there " + name);
}

hi("Elvis");
hi("Ron");
hi(firstN);

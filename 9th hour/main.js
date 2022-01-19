// powerful array methods

// forEach, map, filter, find, reduce

// Iterate over array - no for loop required

// Accept CallBack function as an argument, calls Callback against each item in a array. Reference Item in the Callback Paramater

// const people = [
//     {
//         name: 'elvis',
//         age: 34,
//         position: 'developer'
//     },
//     {
//         name: 'Imani',
//         age: 12,
//         position: 'developer'
//     },
//     {
//         name: 'Alex',
//         age: 1,
//         position: 'sleeper'
//     }
// ];

// function showPerson(person) {
//     console.log(person);
// }

// people.forEach(showPerson); // dont invoke function

// people.forEach(function(item){
//     console.log(item.name);
// });

// map -most popular and powerful
// does return a new array
// does not change size of the original array
// uses values from original array when making a new one

const products = [
    {
        id: 1, product: 'shoes', make: 'nike', price: 22.95
    },
    {
        id: 2, product: 'pants', make: 'adidas', price: 44.55
    },
    {
        id: 3, product: 'socks', make: 'puma', price: 3.99
    },
    {
        id: 4, product: 'socks', make: 'adidas', price: 5.99
    }
];

// const singleProduct = products.map(function(item) {
//     return item.price;
// });
// console.log(singleProduct);

// const newProducts = products.map((p)=>{
//     return {
//         productMake: p.make,
//         productPrice: p.price + 1.00
//     }
// });
// console.log(newProducts);

// const makes = products.map((hs)=> {
//     return `<div>Make: ${hs.make}</div>
//     <div>Price: ${hs.price}</div>`;
// });
// console.log(makes);

// document.body.innerHTML = makes.join('');

// filter method
// does return a new array
// can manipulate the size of new array
// returns based on conditions

// const cheapShoes = products.filter(function(s){
//     return s.price <= 20;
// })

// console.log(cheapShoes);

// const adidas = products.filter((ad)=> {
//     return ad.make === 'adidas';
// });
// console.log(adidas);

// find
// returns object
// returns first match, if no match undefined
// great for getting unique value

// const productID = products.find(function(p){
//     return p.id === 2;
// })

// console.log(productID.make);

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc' - accumulator) total of all calculations
// 2 param ('curr' - current) current iteration

const cost = products.reduce(function(acc, currItem){
    console.log(`Total ACC: ${acc}`);
    console.log(`Cost Current Item ${currItem.price}`);
    acc += currItem.price;
    return acc;
}, 0);

console.log(`Cost of everything is $ ${cost}`);

// Math Object
// standard built-in objects

// rounding up
const num1 = 4.56789;
const result = Math.ceil(num1);
console.log(result);


// // rounding down
// const num2 = 4.56789;
// const result2 = Math.floor(num2);
// console.log(result2);

// // square root
// const num3 = 16;
// const result3 = Math.sqrt(num3);
// console.log(result3);

// // PI
// const result4 = Math.PI;
// console.log(result4);

// // min and max work the same way
// const res5 = Math.min(3,4,5,6);
// console.log(res5);

// random number up to 10

const res6 = Math.ceil(Math.random() * 10);
console.log(res6);

// Date Global Object

const months = [
    'January',
    'February',
    'March',
    'April',
    'June',
    'July'
]
const days = [
    'Sunday',
    'Monday',
    'Tue',
    'Wed',
    'Thursday',
    'Friday',
    'Saturday',
]

const date = new Date();
const month = date.getMonth();
let day = date.getDay();

console.log(months[month]);
console.log(days[day]);

console.log(date.getFullYear());
console.log(date.getDate());

const webDate = `Hello people, welcome! Today is ${days[day]}, ${months[month]} ${date.getDate()} ${date.getFullYear()}`;

document.body.innerHTML = webDate;
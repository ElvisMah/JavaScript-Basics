

// element.appendChild(childElement);

// createElement('element');
// const bodyDiv = document.createElement('h1');

// // createTextNode('text content');
// const text = document.createTextNode('This is heading 1');

// // append child
// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

// const result = document.getElementById('result');
// const first = document.querySelector('.red');

// // adding it to result
// const heading2 = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');

// heading2.appendChild(headingText);
// result.appendChild(heading2);
// heading2.classList.add('blue');


//// insertBefore('element', 'location')---------------
// document.body.insertBefore(bodyDiv, result)

// const heading2 = document.createElement('h2');
// const headingText2 = document.createTextNode('dynamic heading');
// heading2.appendChild(headingText2)
// heading2.classList.add('blue');

// result.insertBefore(heading2, first)

// replaceChild('new', 'old')
// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode(`I am small text`);

// smallHeading.classList.add('red');
// smallHeading.appendChild(smallText);

// document.body.replaceChild(smallHeading, result);

// const result = document.querySelector('#result');
// result.removeChild();

// innerHTML
// textContent

// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');

// console.log(list.textContent); // just text content 
// console.log(list.innerHTML); // you get html content

// const ul = document.createElement('ul');
// const randomVal = 'random value';

// ul.innerHTML = `
// <li>${randomVal}</li>
// <li>List item</li>
// <li>list item</li>
// `
// document.body.appendChild(ul);

// CSS-----------------------------------

// const random = document.querySelector('.random');

// // random.style.backgroundColor = 'red';
// // random.style.color = 'white';
// random.classList.add('red');
// random.classList.remove('red');
// random.classList.contains('red');
// console.log(random);

// Events
// select element
// addEventListener()
// what event, what to do ('click', callback function)

// const button = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// // function changeColors() {
// //     console.log('you clicked me');
// // }

// // button.addEventListener('click', changeColors);
// button.addEventListener('click', function() {
//    const hasClass = heading.classList.contains('red');
//    if(hasClass) {
//        heading.classList.remove('red');
//    } 
//    else {
//        heading.classList.add('red');
//    }
// });


// click - fires after full action occurs
// mousedown
// mouseup
// mouseenter
// mouseleave

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');

// function say() {
//     console.log('you clicked me');
// }

// btn.addEventListener('click', say);

// btn.addEventListener('mousedown', function(){
//     console.log('down');
// })

// btn.addEventListener('mouseup', function(){
//     console.log('up');
// })

// btn.addEventListener('mouseenter', function() {
//     console.log('hi');
// })

// btn.addEventListener('mouseleave', function() {
//     console.log('hi');
// });

// heading.addEventListener('mouseenter', ()=>{
//     heading.classList.add('red');
// });

// heading.addEventListener('mouseleave', ()=> {
//     heading.classList.remove('red');
// });

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released--------------------------------------

// const nameInput = document.getElementById('name');

// // nameInput.addEventListener('keypress', () => {
// //     console.log('you pressed a key');
// // });

// // nameInput.addEventListener('keydown', () => {
// //     console.log('you pressed a key');
// // });

// nameInput.addEventListener('keyup', ()=> {
//     console.log(nameInput.value);
// })

// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault()

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const link = document.getElementById('link');

// heading.addEventListener('click', function(e){
//     console.log(e.currentTarget);
//     //this keyword
//     console.log(this);
// });

// btn.addEventListener('click', function(evt){
//     evt.currentTarget.classList.add('blue');
//     console.log(evt.type);
// });

// link.addEventListener('click', function(e){
//     e.preventDefault();
// });

// currentTarget
// target

// const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         // console.log(e.currentTarget);
//         // e.currentTarget.style.color = 'orange';
//         // console.log(e.target);
//         // e.target.style.color = 'green';
//     });
// });

// submit

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('form submited');
    console.log(name.value);
    console.log(password.value);
    let name = name.value;
});

// web storage API - provided by browser
// session storage and local storage
// setItem, getItem, removeItem and clear

// localStorage.setItem('name', 'elvis'); // browser
// sessionStorage.setItem('name2', 'alex'); //while tab is open

// const fname = localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// console.log(fname);


// JSON.stringify() and JSON.parse()

const friends = ['alex', 'el', 'elvis'];
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));

console.log(values[1]);

let fruits = [];

if(localStorage.getItem('fruits')) {
    fruits.JSON.parse(localStorage.getItem('fruits'))
}else {
    fruits = [];
}

fruits.push('apple');
fruits.push('orange');

localStorage.setItem('fruits', JSON.stringify(fruits));


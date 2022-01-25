// // // DOM - Document Object Model
// // document.body.style.backgroundColor="blue";
// // document.body.style.color= 'yellow';
// // document.getElementById('btn').style.color ='pink';

// // // assign to a variable
// // // const element = document.getElementById('element);
// let button = document.getElementById('btn');
// button.style.color ='white';

// // // window object - this is where we are getting stuff from 'document.'
// // console.log(window);

// // returns a node object or a node list, which is an array like object (some methods we can use like on array)------------------------------

// const soccer = document.getElementById('btn');
// const fname = btn.nodeName;
// const css = btn.style;

// console.log(soccer);
// console.log(css);
// console.log(fname);

// // Select the element or group of elements that we want
// // decide the effects we want to apply to the selection

// // getElementById('element'); // css id from html
// let header1 = document.getElementById('title')
// header1.style.color = 'red';

// btn.style.backgroundColor = 'orange';

// getElementsByTagName ('tagname');
// node-list = array-like object
// index, length property but not array methods

// let h1 = document.getElementsByTagName('h1');

// console.log(h1.length);
// h1[2].style.color = 'orange';

// const items = document.getElementsByTagName('li');

// console.log(items);

// // items.forEach(function(item) {
// //     console.log(item); //can NOT use 
// // })

// const betterItems = [...items] // spread operator

// betterItems.forEach(function(i){
//     console.log(i);
// });

// getElementsByClassName('className'); // multiple elements
// node-list = array-like
// index, length property but not array methods

// const fruits = document.getElementsByClassName('special');

// console.log(fruits);
// fruits[0].style.color= 'orange';

// querySelector('any css'); selects single(first element)
// querySelectorAll('any css'); selects all and ou can user forEach

// const fruits = document.querySelector('.special');

// console.log(fruits);
// fruits.style.color='orange';

// const lastChild = document.querySelector('li:last-child');
// lastChild.style.color="blue"

// const list = document.querySelectorAll('.special');
// console.log(list);

// list.forEach(function(item){
//     console.log(item);
//     item.style.color = 'pink'
// })

// childNodes -returns all childNodes including whitespace which is treated as text

// const fruits = document.querySelector('#fruits');
// console.log(fruits);

// // children
// const allChildren = fruits.lastChild;
// console.log(allChildren);

// Parent Element you can chain 
// const heading2 = document.querySelector('h2');
// console.log(heading2.parentElement);

// const bg = heading2.parentElement;
// bg.style.backgroundColor = 'orange';

// previousSibling
// nextSibling
// return whitespace

// const first = document.querySelector('.first')
// first.style.color = 'orange';

// const second = first.nextSibling.nextSibling;
// second.style.color = 'red';
// console.log(second);

// getAttribute
// setAttribute

// const first = document.querySelector('.first');
// const classValue = first.getAttribute('id');
// console.log(classValue);

// const link = document.getElementById('link');

// const pants = link.nextElementSibling;
// pants.setAttribute('class', 'soccer');

// className - can be overwritten by accident
// classList - to add class

let first = document.getElementById('first');
let second = document.getElementById('second');

const classValue = first.className;
console.log(classValue);

first.className = 'first dshgkldfjsg';

second.classList.add('bla', 'gdfg');
second.classList.remove('bla');

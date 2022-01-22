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

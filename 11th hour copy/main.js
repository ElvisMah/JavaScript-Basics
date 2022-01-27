

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

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(list.textContent); // just text content 
console.log(list.innerHTML); // you get html content

const ul = document.createElement('ul');
const randomVal = 'random value';

ul.innerHTML = `
<li>${randomVal}</li>
<li>List item</li>
<li>list item</li>
`
document.body.appendChild(ul);

// CSS-----------------------------------
// const random = document.querySelector('.random');
// //show example with style (random.style)
// random.classList.add('title');


const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');

console.info(heading.textContent);
console.info(heading.innerText);
// set the textContent property on that element
heading.textContent = 'Joseph is cool';
console.info(heading.textContent);
console.info(heading.innerText);

console.info(heading.innerHTML);
console.info(heading.outerHTML);

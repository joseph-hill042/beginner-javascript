const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');

console.info('textContent:::', heading.textContent);
console.info('innerText:::', heading.innerText);
// set the textContent property on that element
heading.textContent = 'Joseph is cool';
console.info('textContent:::', heading.textContent);
console.info('innerText:::', heading.innerText);

console.info('innerHTML:::', heading.innerHTML);
console.info('outerHTML:::', heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.info(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');

console.info(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
console.dir(pic);
pic.alt = 'Cute Pup'; // setter
console.info(pic.alt); // getter
console.info(pic.width);
pic.width = 200;

const custom = document.querySelector('.custom');
console.info(custom.dataset);

custom.addEventListener('click', function () {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});

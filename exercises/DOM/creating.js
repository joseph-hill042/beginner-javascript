console.info('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.info(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Nice photo';
console.info(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.info(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// myImage.addEventListener('load', function () {
//   document.body.appendChild(myDiv);
// });

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');
const listItemOne = document.createElement('li');
listItemOne.textContent = 'One';
const listItemTwo = document.createElement('li');
listItemTwo.textContent = 'Two';
const listItemThree = document.createElement('li');
listItemThree.textContent = 'Three';
const listItemFour = document.createElement('li');
listItemFour.textContent = 'Four';
const listItemFive = document.createElement('li');
listItemFive.textContent = 'Five';
myList.insertAdjacentElement('afterbegin', listItemOne);
myList.appendChild(listItemTwo);
myList.appendChild(listItemThree);
myList.appendChild(listItemFour);
myList.appendChild(listItemFive);
document.body.appendChild(myList);

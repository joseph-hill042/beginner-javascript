const joseph = document.querySelector('.joseph');

console.info(joseph.children);
console.info(joseph.firstElementChild);
console.info(joseph.lastElementChild);
console.info(joseph.previousElementSibling);
console.info(joseph.nextElementSibling);
console.info(joseph.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed.';
document.body.appendChild(p);

p.remove();
console.info(p);

document.body.appendChild(p);

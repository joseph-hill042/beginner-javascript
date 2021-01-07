console.info('it works!');
const item = document.querySelector('.item');
const src = `https://picsum.photos/200`;
const desc = `Cute Pup <img src="https://picsum.photos/50" onload="alert('HACKED')" >`;
const myHtml = `
<div class="wrapper">
  <h2>${desc}</h2>
  <img src="${src}" alt="${desc}">
</div>
`;

// turn a string into an element
const myFragment = document.createRange().createContextualFragment(myHtml);

console.log(myFragment);

document.body.appendChild(myFragment);

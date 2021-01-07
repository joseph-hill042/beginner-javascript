const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const uList = `
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
`;
const myListFragment = document.createRange().createContextualFragment(uList);
wrapper.appendChild(myListFragment);

const imgSrc = `https://picsum.photos/200`;
const imgWidth = 250;
const imgClass = `cute`;
const imgAlt = `Cute Puppy`;
const myImg = `<img src="${imgSrc}" alt="${imgAlt}" class="${imgClass}" width="${imgWidth}">`;
const myImgFragment = document.createRange().createContextualFragment(myImg);
wrapper.appendChild(myImgFragment);

const myHtml = `
  <div>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const myDivFragment = document.createRange().createContextualFragment(myHtml);
wrapper.prepend(myDivFragment);
wrapper.firstElementChild.children[1].classList.add('warning');
wrapper.firstElementChild.children[0].remove();

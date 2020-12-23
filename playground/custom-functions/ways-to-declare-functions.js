// Function Statement
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// Function Expression
const doctorizer = function (firstname) {
  return `Dr. ${firstname}`;
};

// Arrow Functions
const inchToCm = (inches) => inches * 2.54;

const babyMaker = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression
(function () {
  console.info('Running the Anon function');
  return 'You are cool';
})();

// Methods
const joseph = {
  name: 'Joseph Hill',
  // Method
  sayHi() {
    console.info('Hey Joseph');
    return 'Hey Joseph';
  },
  // Short Hand Method
  yellHi() {
    console.info('HEY JOSEPH');
  },
  // Arrow Function
  whisperHi: () => {
    console.info('hi joseph');
  },
};

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');
console.info(button);
button.addEventListener('click', joseph.yellHi);

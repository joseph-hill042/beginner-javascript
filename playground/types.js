// Strings
const firstName = 'Joseph';
const middleName = 'Anthony';
const lastName = `Hill`;

console.info(`Hi, ${firstName} ${middleName} ${lastName}`);

// Numbers
const a = 10;
const b = 20;

const result = a + b;

console.info(`${a} + ${b} = ${result}`);

// Objects
const person = {
  age: 41,
  first: 'Joseph',
  last: 'Hill',
};

console.info(
  person,
  `My name is ${person.first} ${person.last} and I am ${person.age} years old.`
);

// null & undefined
let somethingUndefined;
const somethingNull = null;

console.info(
  `the variable somethingUndefined is equal to ${somethingUndefined}`
);
console.info(`the variable somethingNull is equal to ${somethingNull}`);

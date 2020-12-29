function outer() {
  const outerVar = 'Hey I am the outer var!';
  console.info('Outer function has run!');
  function inner() {
    const innerVar = 'Hey I am an inner var!';
    console.info('Inner function has run!');
    console.info(innerVar);
    console.info(outerVar);
  }
  return inner;
}

const innerFn = outer();
innerFn();

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.info(sayHello('joseph'));
console.info(sayHello('kait'));
console.info(sayHey('kait'));

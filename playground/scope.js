// global scope
const age = 100;

function isCool(name) {
  // function scope
  let cool;
  if (name === 'joseph') {
    // block scope
    cool = true;
  }
  console.info(cool);
  return cool;
}

console.info(age);

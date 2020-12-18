function calculateBill(billAmount, taxRate) {
  // this is the function body
  console.info('Running Calculate Bill!!');
  const total = billAmount * (1 + taxRate);
  return total.toFixed(2);
}

const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.info(myTotal, myTotal2);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

console.info(doctorize('Joseph'));
console.info(yell('Joseph'));

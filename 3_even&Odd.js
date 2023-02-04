function checkEven(num) {
  return !(num & 1);
}

function checkOdd(num) {
  return !!(num & 1);
}

console.log(checkEven(2));
console.log(checkOdd(3));
//Did this using bitwise operator

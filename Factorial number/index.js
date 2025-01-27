const number = 5;

function getFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * getFactorial(number - 1);
}
console.log(getFactorial(number));

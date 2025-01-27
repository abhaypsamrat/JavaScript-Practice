const array = [1, 2, 3, 14, 5, 6, 7, 54, 23, 10, 31];

// <--- method 1 ---> using loop

function getEvenNumbers() {
  const evenNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
}
console.log(getEvenNumbers(array));

// <--- method 2 ---> using filetr method

// function getEvenNumber() {
//   const evenNumbers = array.filter((num) => num % 2 === 0);
//   return evenNumbers
// }
// console.log(getEvenNumber(array));

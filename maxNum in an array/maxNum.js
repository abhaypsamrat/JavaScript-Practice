const array = [2, 23, 5, 6, 10];

function maxNum() {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log(maxNum(array));

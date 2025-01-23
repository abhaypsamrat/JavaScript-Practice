const array = [2, -23, 5, 6, 10];

function minNum() {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

console.log(minNum(array));

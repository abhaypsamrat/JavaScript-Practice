let array = [5, 2, 10, 19, 13, 44];
function removeEvenNum() {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) newArray.push(array[i]);
  }
  console.log(newArray);
}
removeEvenNum();

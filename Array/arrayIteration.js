let array = ["Apple", "Banana", "Cat", "Dog",2,3,4,5,6,7];

// iterate Array elements using while loop
let x = 0;
while (x < array.length) {
  console.log(array[x]);
  x++;
}

// iterate Array elements using do-while loop
let y = 0;
do {
  console.log(array[y]);
  y++;
} while (y < array.length);

// iterate Array elements using for loop
for (let z = 0; z < array.length; z++) {
  console.log(array[z]);
}

// iterate Array elements using for.. in loop
for (i in array) {
  console.log(array[i]);
}

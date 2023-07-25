let array = [10, 2, 45, 23, 12, 50];

// 1st Method

let min = Math.min(...array);
let max = Math.max(...array);
console.log(min, max);

// 2nd Method

let minValue = Infinity;
let maxValue = -Infinity;

for (item of array) {
  if (item < minValue) // Find minimum value
    minValue = item;

  if (item > maxValue) // Find maximum value
    maxValue = item;
}
console.log(minValue, maxValue);

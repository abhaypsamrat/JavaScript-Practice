const arr1 = ["Banana", "Orange", "Apple", "Mango"];

// converting object to string
let x = arr1.toString();
console.log(arr1);
console.log(typeof x); // string

const arr2 = ["hello", "hi"];
const arr3 = ["hiiii", "helllllooo"];

// Merging (Concatenating) Arrays
let arr4 = arr1.concat(arr2, arr3); // merging 2 array
console.log(arr4); // ['Banana', 'Orange', 'Apple', 'Mango', 'hello', 'hi', 'hiiii', 'helllllooo']

// JavaScript Array splice(4, 1)
// The first parameter (4) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Inserts at index 1 replace 0 element
console.log(months); // [("Jan", "Feb", "March", "April", "June")];

months.splice(4, 1, "May"); // Inserts at index 4 replace 1 element
console.log(months); // ['Jan', 'Feb', 'March', 'April', 'May']

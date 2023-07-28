// To run this code type "node addElementAtPosition.js" in cmd

let array = [10, 20, 40, 15, 25];

//Add using in build method splice(index, no of elements remove, element for added)

// array.splice(2, 0 , 30)
// console.log(array)        // [ 10, 20, 30, 40, 15, 25 ]


// using for loop 

let newElement = 30;
let position = 3;
for (i = array.length; i >= position; i--) {
  array[i] = array[i - 1];
}
array[i] = newElement;
console.log(array);    //[ 10, 20, 30, 40, 15, 25 ]

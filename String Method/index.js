let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// /length method
let lenght = text.length
console.log(lenght)   // 26

//slice() method
let part = text.slice(5,10)
console.log(part)  // FGHIJ

let part1 = text.slice(3)
console.log(part1)   // DEFGHIJKLMNOPQRSTUVWXYZ

let part2 = text.slice(-10)
console.log(part2)   // QRSTUVWXYZ

let part3 = text.slice(-10, -5)
console.log(part3)  //  QRSTU

//replace some text from other
let newtext = text.replace('ABCDEF',"GOOGLE")
console.log(newtext)   //  GOOGLEGHIJKLMNOPQRSTUVWXYZ

let text1 = text.toLocaleLowerCase();
console.log(text1)  //   abcdefghijklmnopqrstuvwxyz

// add text + text1
let text2 =  text.concat(" ", text1)
console.log(text2)  //   ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
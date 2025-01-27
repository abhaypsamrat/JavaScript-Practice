const string = "abcdef";

function reverseString() {
  const reverse = string.split("").reverse().join("");
  console.log("reverse string: ", reverse);
}

reverseString();

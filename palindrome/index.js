const string = "abba";

function palindromeNum(string) {
  return string === string.split("").reverse().join("");
}

console.log(palindromeNum(string));

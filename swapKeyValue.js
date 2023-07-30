// swap key value of objects using for...in loop


let json = { A: 1, B: 2, c: 3 };
// console.log(json)
function swap(json) {
  let newJson = {};

  for (let key in json) {
    let value = json[key];
    newJson[value] = key;
  }
  return newJson;
}
console.log(swap(json));

//Write a function which receives two strings and removes appearances of the second string from the first one.

let a = "This is some text";
let b = "is";
function string(str) {
  let newString = str.split(b);

  return newString.join("");
}
console.log(string(a));

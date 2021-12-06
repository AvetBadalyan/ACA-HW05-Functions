//Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.
function number(sentence) {
  let arr = sentence.split("");
  let str = "";
  let result = 0;

  arr.forEach((element) => {
    if (!isNaN(+element) || element === "-") {
      str += element;
    } else {
      if (!isNaN(+str)) {
        result += +str;
      }
      str = "";
    }
  });
  return result;
}

console.log(number("FwrtY45KHL120mn10P"));

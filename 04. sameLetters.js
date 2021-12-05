//Given a word and a list of possible anagrams, select the correct sublist.

let word = "listen";
let arr = ["enlist", "google", "inlets", "banana"];
let splittedArray = [];
let anagrams = [];

function sublist(word, arr) {
  let splittedWord = word.split("");
  arr.map(function (element) {
    splittedArray.push(element.split(""));
  });
  for (let i = 0; i < splittedArray.length; i++) {
    for (let j = 0; j < splittedArray[i].length; j++) {
      if (
        splittedArray[i][j].includes(splittedWord[i]) &&
        splittedArray[i].length === splittedWord.length
      ) {
        anagrams.push(splittedArray[i]);
      }
    }
  }
  return anagrams;
}
console.log(sublist(word, arr));

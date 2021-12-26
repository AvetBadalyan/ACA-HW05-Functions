//Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string.
//If there are several words which are the longest ones,
//print the last word(words can be separated by space, comma or hyphen).
let a = "A revolution without dancing is a revolution not worth having.";

function findLongestWord(string) {
  let newString = string.split(" ");
  let check = 0;
  let b = "";

  for (i = 0; i < newString.length; i++) {
    if (newString[i].length > b.length) {
      b = newString[i];
    }
  }
  return b;
}

console.log(findLongestWord(a));

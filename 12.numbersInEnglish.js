// Write a function, which will receive a number between 0 to 999,999 and spell out that number in English
function printInEnglish(number) {
  if (number > 20 && number < 100 && number % 10 !== 0) {
    let l = number % 10;
    let k = number - l;

    return printInEnglish(k) + " " + printInEnglish(l);
  }

  switch (number) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    case 10:
      return "ten";
    case 11:
      return "eleven";
    case 12:
      return "twelve";
    case 13:
      return "thirteen";
    case 14:
      return "fourteen";
    case 15:
      return "fiveteen";
    case 16:
      return "sixteen";
    case 17:
      return "seventeen";
    case 18:
      return "eighteen";
    case 19:
      return "nineteen";
    case 20:
      return "twenty";
    case 30:
      return "thirty";
    case 40:
      return "fourty";
    case 50:
      return "fivty";
    case 60:
      return "sixty";
    case 70:
      return "seventy";
    case 80:
      return "eighty";
    case 90:
      return "ninety";
  }
}
console.log(printInEnglish(24));

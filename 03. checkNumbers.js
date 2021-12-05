//Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
// If the phone number is less than 10 digits assume that it is a bad number
// If the phone number is longer than 10, then it is a bad number
// If the phone number is 10 digits assume that it is good
// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
// and return remaining 10 digits.
// If the phone number contains + symbol more than one, consider it as a bad number.
// If the phone number contains + symbol not as the first character, consider it as a bad number.

function phone(number) {
  let newNumber = number.split("");
  if (newNumber.length < 10) {
    return "bad number";
  } else if (newNumber.length > 10 && newNumber[0] !== "+") {
    return " bad number";
  } else if (newNumber.length === 10) {
    return "good number";
  } else if (newNumber.length === 11 && newNumber[0] === "+") {
    newNumber.shift();
    if (newNumber.includes("+") === false) {
      return newNumber;
    } else {
      return "bad number";
    }
  }
}

console.log(phone("123+2356897452"));

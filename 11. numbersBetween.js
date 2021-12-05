// Write a function, which receives two numbers as arguments and finds all numbers between them
// such that each digit of the number is even. The numbers obtained should be printed in a comma-
// separated sequence on a single line.

let firstNumber = 19;
let secondNumber = 42;
let between = [];

function btwNumbers(firstNumber, secondNumber) {
  for (let i = firstNumber; i <= secondNumber; i++) {
    if (i % 2 === 0) {
      between.push(i);
    }
  }
}
//NEED TO COMPLETE

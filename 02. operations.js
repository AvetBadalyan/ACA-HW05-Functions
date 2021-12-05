//Write a function that calculates sum, difference, multiplication and division between given array
//elements depending on passed operation symbol. Write appropriate function for each operation.

//Sum
function calculateSum(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  console.log(sum);
}
calculateSum([1, 2, 3]);

//Difference
function calculateDiff(arr) {
  let diff = arr[0];
  for (let i = 1; i < arr.length; i++) {
    diff = diff - arr[i];
  }

  console.log(diff);
}
calculateDiff([1, 2, 3]);

//Multiplication
function calculateMult(arr) {
  let mult = arr[0];
  for (let i = 1; i < arr.length; i++) {
    mult = mult * arr[i];
  }

  console.log(mult);
}
calculateMult([1, 2, 3]);

//Division
function calculateDiv(arr) {
  let div = arr[0];
  for (let i = 1; i < arr.length; i++) {
    div = div / arr[i];
  }

  console.log(div);
}
calculateDiv([1, 2, 3]);

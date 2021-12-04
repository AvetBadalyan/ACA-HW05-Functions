//Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
//[45, 12, 3, 6, 17, 0]
function separetor(arr) {
  debugger;
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log(` odds are ${odd} and evens are ${even} `);
}

separetor([45, 12, 3, 6, 17, 0]);

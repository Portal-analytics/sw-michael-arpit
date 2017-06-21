function Conjecture() {
  let count = 0;
  var prompt = require("prompt");
  prompt.start();
  number = prompt.get(["Number"], function(err, result) {
    let number = result.Number;
    let loop = true;
    while (loop) {
      if (number > 0) {
        if (number > 1) {
          if (number % 2 === 0) {
            number = number / 2;
            count++;
          } else if (number % 2 != 0) {
            number = number * 3 + 1;
            count++;
          }
        } else {
          loop = false;
        }
      } else {
        console.log("Error pick a positive number greater than 0");
        return;
      }
    }
    console.log("Total # of steps:" + count);
  });
}

function mergeSort() {
  var prompt = require("prompt");
  prompt.start();
  console.log("Input numbers with spaces in between.");
  number = prompt.get(["Numbers"], function(err, result) {
    let numList = result.Numbers.split(" ").map(Number);
    console.log(numList);
    console.log(numList.length);
    for (let i = 0; i < numList.length; i++) {}
  });
}

function merge(array) {
  if (-1 < array.length < 2) {
    return array;
  }
  let leftArray = [];
  let rightArray = [];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i <= Math.floor(array.length / 2)) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
  leftArray = merge(leftArray);
  rightArray = merge(rightArray);
  /*
  for (let i = 0; i < leftArray.length; i++) {
    for (let j = 0; j < rightArray.length; j++) {
      if (leftArray[i] < rightArray[j]) {
        newArray.push(leftArray[i]);
        leftArray.splice(i, 1);
        i--;
      } else if (rightArray[j] < leftArray[i]) {
        newArray.push(rightArray[j]);
        rightArray.splice(i, 1);
        i--;
      }
    }
  }*/
  console.log(leftArray);
}

merge([1, 2, 6, 5, 7, 4, 3, 8]);

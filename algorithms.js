function fibonacci() {
  var prompt = require("prompt");
  prompt.start();
  number = prompt.get(["Number"], function(err, result) {
    let fib = [0, 1];
    number = result.Number;
    for (let i = 1; i < number; i++) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    console.log(fib);
    console.log(fib[number]);
  });
}

function primeFactorization() {
  var prompt2 = require("prompt");
  prompt2.start();
  prompt2.get(["Number"], function(err, result2) {
    let number = result2.Number;
    if (number == 0) {
      console.log("0");
      return;
    }
    while (number % 2 == 0) {
      console.log("2");
      number = number / 2;
    }
    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
      while (number % i === 0) {
        console.log(i + " ");
        number = number / i;
      }
    }
    if (number >= 2) console.log(number + " ");
  });
}

function nextNumber(num) {
  numb = num;
  console.log(numb);
  console.log("Want the next prime number? Y/N");
  var prompt = require("prompt");
  prompt.start();
  prompt.get(["Repeat"], function(err, result) {
    let number = result.Repeat;
    let currentNum = numb;
    let loop = false;
    if (
      number === "Yes" ||
      number === "Y" ||
      number === "y" ||
      number === "yes"
    ) {
      loop = true;
    } else if (
      number === "No" ||
      number === "no" ||
      number === "n" ||
      number === "N"
    ) {
      loop = false;
    } else {
      console.log("Error invalid input.");
      return;
    }
    if (loop == true) {
      for (let i = currentNum; i < currentNum * 2; i++) {
        if (isPrime(i)) {
          currentNum = i;
          break;
        }
        if (0 < i < 3) {
          currentNum = i + 1;
          break;
        }
      }
    }
    numb = currentNum;
  });
  return nextNumber(numb);
}

function isPrime(number) {
  if (number % 2 === 0 || number % 3 == 0 || number % 5 == 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

nextNumber(2);

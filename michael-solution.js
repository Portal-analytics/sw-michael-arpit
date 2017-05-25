// Michael Crawford's solution to the daily challenge
let sum = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log("The sum is: " + sum);
//Sum and average
var numbers = [];
for (var i = 0; i < 5; i++) {
    numbers[i] = Math.floor((Math.random() * 100));
    console.log("Number " + i + " is " + numbers[i]);
}
var sum = 0;
for (var i = 0; i < 5; i++) {
    sum += numbers[i];
}
let avg = sum / 5;
console.log("Sum : " + sum);
console.log("Avergae is : " + avg);
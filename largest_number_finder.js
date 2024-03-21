const prompt = require('prompt-sync')();

console.log("This program will check which value you input is the largest!\n\n");

// three inputs, which we will check which is the largest
let first = parseFloat(prompt("Input the first value: "));
let second = parseFloat(prompt("Input the second value: "));
let third = parseFloat(prompt("Input the third value: "));

let temp;

// compare first and second values
if (second > first) {
    temp = first;
    first = second;
    second = temp;
}

// compare first and third values
if (third > first){
    temp = first;
    first = third;
    third = temp;
}

// we make sure second is greater than third
if (third > second) {
    temp = second;
    second = third;
    third = temp;
}

// output the result
console.log("\n\n★★★ RESULTS ARE IN ★★★\n\nThe largest number is "+first+"\nThe second largest number is "+second+"\nThe third largest number is "+third);

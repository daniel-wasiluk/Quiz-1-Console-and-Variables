const prompt = require('prompt-sync')();

console.log("This program converts Celcius to Fahrenheit!!!\n\n")

// the program first asks the user for the value in Fahrenheit, to be converted to Celcius
let fahr = prompt("Enter the value in Fahrenheit (\u00B0F) you would like to convert to Celcius (\u00B0C): ");

// declares cel variable, and sets it to the sum of Fahrenheit to Celcius equation
let cel = (fahr-32) * (5/9);

// outputs the result of that equation, with text to explain to the user
console.log(fahr + "\u00B0F is approximetly " + cel.toFixed(2) + "\u00B0C!");
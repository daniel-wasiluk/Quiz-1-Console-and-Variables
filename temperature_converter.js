const prompt = require('prompt-sync')();

console.log("This program converts Celcius to Fahrenheit, and Fahrenheit to Celcius!!!!\n\n")

// the program first asks the user to choose the conversion type
let conversionType = prompt("Type 'F' to convert Fahrenheit to Celcius or 'C' to convert Celcius to Fahrenheit: ").toUpperCase();

if(conversionType === 'F') {
    // the program asks for the value in Fahrenheit, to be converted to Celcius
    let fahr = prompt("Enter the value in Fahrenheit (\u00B0F) you would like to convert to Celcius (\u00B0C): ");
    
    // declares cel variable, and sets it to the result of the Fahrenheit to Celcius equation
    let cel = (fahr-32) * (5/9);
    // logs the result
    console.log(fahr + "\u00B0F is approximately " + cel.toFixed(2) + "\u00B0C!");
} else if(conversionType === 'C') {
    // the program asks for the value in Celcius, to be converted to Fahrenheit
    let cel = prompt("Enter the value in Celcius (\u00B0C) you would like to convert to Fahrenheit (\u00B0F): ");
    let fahr = (cel * (9/5)) + 32;
    console.log(cel + "\u00B0C is approximately " + fahr.toFixed(2) + "\u00B0F!");
} else {
    console.log("Invalid input. Please restart the program and enter 'F' or 'C'.");
}
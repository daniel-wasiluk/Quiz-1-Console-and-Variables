const prompt = require('prompt-sync')();

// quick little intro
console.log("!!! Leap Year Checker !!!\n\nEnter a year and find out if it's a leap year or not!\n");

// user inputs a year
let year = prompt("Please enter a year: ");

// a leap year is exactly divisible by 4 but not for for century years
if (year % 4 === 0 && year % 100 !== 0) {
    console.log("\n" + year + " is a leap year!");
}

// the century year is a leap year only if it is perfectly divisible by 400
else if ((year % 400 === 0)) {
    console.log("\n" + year + " is a leap year!");
}

else {
    console.log("\n" + year + " is not a leap year.");
}
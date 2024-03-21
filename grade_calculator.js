const prompt = require('prompt-sync')();

console.log("This program converts your percentage grade to a letter grade!!! \n\n")

// user inputs their grade
let grade = prompt("Input your percentage score that you received, to convert it to a letter grade: ")

//checks whether the user inputted a % sign into the input, and if they did the program removes it
grade = grade.replace("%","")

//Checks whether the value falls into a certain category through if and else if statements
if (grade >= 90) {
    console.log(grade + "% is an A in letter grades! Keep it up!")
}
else if (grade <= 89 && grade >= 80) {
    console.log(grade + "% is a B in letter grades! Good work!")
}
else if (grade <= 79 && grade >= 70) {
    console.log(grade + "% is a C in letter grades! Keep improving!")
}
else if (grade <= 69 && grade >= 60) {
    console.log(grade + "% is a D in letter grades.")
}

// If it does not fall into any of those, it must be F
else {
    console.log(grade + "% is an F in letter grades.")
}
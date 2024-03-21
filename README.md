[Back to Quiz](Directions.md)

# How to get input from the user

In a terminal, make sure you have npm installed by running:
```javascript
sudo apt update
sudo apt install npm
```
### Prompt-sync
Install the prompt-sync code library by running:
```javascript
npm install prompt-sync
```
Now you're ready to use prompt() in your code!

### Preparing the Code
We have to tell NodeJS that we want to use the prompt-sync library in our code. 

For this, we will add the following to the top of our code file - it declares the prompt() command:<br> **(I have already done this for you)**
```javascript
const prompt = require('prompt-sync')();
```

### Using prompt() to get user input:
After preparing the code, we can ask the user to enter something and store it in a variable.
Here are a few examples:
```javascript
/* main.js */
const prompt = require('prompt-sync')();

let age = prompt("How old are you? ");
console.log("You said you are", age, "years old.");

let name = prompt("What is your name? ");
let dogAge = prompt("How old is your dog? ");

// Write an output for how many years older you are comapred to your dog. 

let width = number(prompt("What is the width of the triangle? "); //4.56
console.log(width);   // 4.56

let year = parseInt("2022.5");
console.log(year);  // 2022
```

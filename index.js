#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
//greet the user
//ask user name
//which operator
//first digit
//second digit
//show result
let again = false;
function greetUser(message) {
    console.log(chalk.red(message));
}
async function userInput() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "firstNumber",
            message: "please enter first number",
            validate: function (input) {
                if (isNaN(input) || input === "") {
                    return "not a valid input.";
                }
                else {
                    return true;
                }
            },
        },
        {
            type: "list",
            name: "operation",
            message: "Please select operator.",
            choices: ["+", "-", "*", "/", "^", "%"],
        },
        {
            type: "input",
            name: "secondNumber",
            message: "please enter second number",
            validate: function (input) {
                if (isNaN(input) || input === "") {
                    return "Please enter valid input";
                }
                else {
                    return true;
                }
            },
        },
    ]);
    console.log("\n");
    const firstNum = Number(answers.firstNumber);
    const secondNum = Number(answers.secondNumber);
    switch (answers.operation) {
        case "+":
            console.log(chalk.yellow(`Result: ${firstNum + secondNum}`));
            break;
        case "-":
            console.log(chalk.yellow(`Result: ${firstNum - secondNum}`));
            break;
        case "*":
            console.log(chalk.yellow(`Result: ${firstNum * secondNum}`));
            break;
        case "/":
            console.log(chalk.yellow(`Result: ${firstNum / secondNum}`));
            break;
        case "%":
            console.log(chalk.yellow(`Result: ${firstNum % secondNum}`));
            break;
        case "^":
            console.log(chalk.yellow(`Result: ${firstNum ** secondNum}`));
            break;
    }
    const confirm = await inquirer.prompt([
        {
            name: "confirm",
            message: "\n\nDo you want another calculation?",
            type: "confirm",
        },
    ]);
    again = confirm.confirm;
    console.log("\n\n");
}
greetUser(`\n-----***Welcome***-----\n`);
do {
    await userInput();
} while (again);

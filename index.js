#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\n \t Welcome to Farhad Ali =====> Currency Convertor app\n"));
let exchange_rate = {
    "USD": 1,
    "GPF": 0.7615,
    "CNY": 7.0876,
    "EUR": 0.9019,
    "PKR": 278.6922,
    "AED": 3.6725,
    "SAR": 3.75,
    "EGP": 48.4342,
    "HKD": 7.7957,
    "IND": 83.9887,
    "LRD": 195.2002,
    "PHP": 56.1814,
    "QAR": 3.64,
    "TRY": 33.9845,
};
let exchane_currency = await inquirer.prompt([
    {
        message: "Select the currency to convert from:",
        name: "from_currency",
        type: "list",
        choices: ["USD", "GPF", "CNY", "EUR", "PKR", "AED", "SAR", "EGP", "HKD", "IND", "LRD", "PHP", "QAR", "TRY"],
    },
    {
        message: "Select the currency to convert into:",
        name: "to_currency",
        type: "list",
        choices: ["USD", "GPF", "CNY", "EUR", "PKR", "AED", "SAR", "EGP", "HKD", "IND", "LRD", "PHP", "QAR", "TRY"],
    },
    {
        message: "Enter the amount to convert:",
        name: "amount",
        type: "input",
    }
]);
// Perform currency conversion by using farmula
let from_amount = exchange_rate[exchane_currency.from_currency];
let to_amount = exchange_rate[exchane_currency.to_currency];
let amount = exchange_rate = exchane_currency.amount;
// Farmula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted amount = ${converted_amount}`);
console.log(chalk.blue.bold("\n \t Thanks for use my Currency convertor app   =====>  Engineer Farhad Ali Laghari"));

'use strict';

// Get "Start" button
let startButton = document.getElementById('start');

// Get all "Value" blocks
let resultValues = document.querySelectorAll('div[class*="-value"]');

// Get "expenses-item"
let expensesItems = document.querySelectorAll('.expenses-item');

// Get buttons "Confirm" and "Calculate"
let buttons = document.querySelectorAll('button');
let expensesButton = buttons[0],
    optionalExpensesButton = buttons[1],
    calculateButton = buttons[2];

// Get "optionalexpenses-item"
let optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');

// Get income input
let incomeInput = document.querySelector('#income');

// Get savings input
let savingsInput = document.querySelector('#savings');

// Get Sum input
let sumInput = document.querySelector('#sum');

// Get Percent input
let percentInput = document.querySelector('#percent');

// Get Year input
let yearInput = document.querySelector('.year-value');
// Get Month input
let monthInput = document.querySelector('.month-value');
// Get Day input
let dayInput = document.querySelector('.day-value');
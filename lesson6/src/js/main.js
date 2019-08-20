'use strict';

let startButton = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    resultValues = document.querySelectorAll('div[class*="-value"]'),
    expensesItems = document.querySelectorAll('.expenses-item'),
    expensesButton = document.querySelectorAll('button')[0],
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesButton = document.querySelectorAll('button')[1],
    calculateButton = document.querySelectorAll('button')[2],
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeInput = document.querySelector('#income'),
    incomeValue = document.querySelector('.income-value'),
    savingsInput = document.querySelector('#savings'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    sumInput = document.querySelector('#sum'),
    percentInput = document.querySelector('#percent'),
    yearInput = document.querySelector('.year-value'),
    monthInput = document.querySelector('.month-value'),
    dayInput = document.querySelector('.day-value');

let money, time;

startButton.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    
    while ( isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearInput.value = new Date(Date.parse(time)).getFullYear();
    monthInput.value = new Date(Date.parse(time)).getMonth() + 1;
    dayInput.value = new Date(Date.parse(time)).getDate();
});

expensesButton.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        console.log(i);
        let eT = expensesItems[i].value;
        let eV = expensesItems[++i].value;
        console.log(i);
        
        if ( (typeof(eT)) === 'string' && (typeof(eT)) !== null && (typeof(eV)) !== null 
            && eT !== '' && eV !== '' && eT.length < 50) {
            console.log('Done!');
            appData.expenses[eT] = eV;
            sum += +eV;
        } else {
            i--;
        }
    }

    expensesValue.textContent = sum;
});

optionalExpensesButton.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesItems[i].value;

        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

calculateButton.addEventListener('click', function() {
    if (appData.budget) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Low';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Mid';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'High';
        } else {
            levelValue.textContent = 'Something goes wrong';
        }
    } else {
        dayBudgetValue.textContent = 'Something goes wrong';
    }
});

incomeInput.addEventListener('input', function() {
    let items = incomeInput.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savingsInput.addEventListener('click', function () {
    if (appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }


});

sumInput.addEventListener('input', function () {
    if (appData.savings) {
        let sum = +sumInput.value,
            percent = +percentInput.value;
        
        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100/12 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentInput.addEventListener('input', function () {
    if (appData.savings) {
        let sum = +sumInput.value,
            percent = +percentInput.value;
        
        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100/12 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [],
    savings: false
};
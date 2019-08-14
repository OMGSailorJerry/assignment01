'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [],
    savings: false
};

let expensesOneTitle = prompt('Введите обязательную статью расходов в этом месяце');
let expensesOneValue = prompt('Во сколько обойдется?');

let expensesTwoTitle = prompt('Введите обязательную статью расходов в этом месяце');
let expensesTwoValue = prompt('Во сколько обойдется?');

appData.expenses[expensesOneTitle] = expensesOneValue;
appData.expenses[expensesTwoTitle] = expensesTwoValue;

alert(+appData.budget / 30);
'use strict';

let money, time;

function start () {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    
    while ( isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let eT = prompt('Введите обязательную статью расходов в этом месяце');
        let eV = prompt('Во сколько обойдется?');
    
        if ( (typeof(eT)) === 'string' && (typeof(eT)) !== null && (typeof(eV)) !== null 
        && eT !== '' && eV !== '' && eT.length < 50) {
            console.log('Done!');
            appData.expenses[eT] = eV;
        } else {
            i--;
        }
    }
};

chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert('Money per day: ' + appData.moneyPerDay);
};

detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log('Low');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Mid');
    } else if (appData.moneyPerDay > 2000) {
        console.log('High');
    } else {
        console.log('Something goes wrong');
    }
};

detectLevel();

function checkSevings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений!"),
            percent = +prompt("Под какой процент");

            appData.monthIncome = save/100/12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
};

checkSevings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
};

chooseOptExpenses();
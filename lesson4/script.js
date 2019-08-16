'use strict';

let money, time;

function start () {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while ( isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
};

// start();

let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let eT = prompt('Введите обязательную статью расходов в этом месяце', '');
            let eV = prompt('Во сколько обойдется?', '');
        
            if ( (typeof(eT)) === 'string' && (typeof(eT)) !== null && (typeof(eV)) !== null 
            && eT !== '' && eV !== '' && eT.length < 50) {
                console.log('Done!');
                appData.expenses[eT] = eV;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert('Money per day: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Low');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Mid');
        } else if (appData.moneyPerDay > 2000) {
            console.log('High');
        } else {
            console.log('Something goes wrong');
        }
    },
    checkSevings: function() {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений!", ''),
                percent = +prompt("Под какой процент", '');
    
                appData.monthIncome = save/100/12 * percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", '');
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислить через запятую)', '');

        if (typeof(items) !== 'string' || items === null || items === ' ' || items === '') {
            appData.chooseIncome();
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
            
            appData.income.forEach(function(e, i) {
                console.log('Способы доп. заработка: ' + (i + 1) + ' - ' + e);
            });
        }
    }
};

// appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSevings();
// appData.chooseOptExpenses();
// appData.chooseIncome();

for (let key in appData) {
    if (appData.hasOwnProperty(key)) {
        console.log("Наша программа включает в себя данные: " + key);
    }
}
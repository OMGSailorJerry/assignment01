'use strict';

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let eT = prompt('Введите обязательную статью расходов в этом месяце');
//     let eV = prompt('Во сколько обойдется?');

//     if ( (typeof(eT)) === 'string' && (typeof(eT)) !== null && (typeof(eV)) !== null 
//     && eT !== '' && eV !== '' && eT.length < 50) {
//         console.log('Done!');
//         appData.expenses[eT] = eV;
//     } else {
//         i--;
//     }
// }


// While -----------------------------------------------------------------------
// -----------------------------------------------------------------------------
// let i = 0;

// while (i < 2) {
//     let eT = prompt('Введите обязательную статью расходов в этом месяце');
//     let eV = prompt('Во сколько обойдется?');

//     if ( (typeof(eT)) === 'string' && (typeof(eT)) !== null && (typeof(eV)) !== null 
//     && eT !== '' && eV !== '' && eT.length < 50) {
//         console.log('Done!');
//         appData.expenses[eT] = eV;
//         i++;
//     }
// }

// Do while --------------------------------------------------------------------
// -----------------------------------------------------------------------------
let i = 0;

do {
    let eT = prompt('Введите обязательную статью расходов в этом месяце');
    let eV = prompt('Во сколько обойдется?');

    if ( (typeof(eT)) === 'string' && (typeof(eT)) !== null && (typeof(eV)) !== null 
    && eT !== '' && eV !== '' && eT.length < 50) {
        console.log('Done!');
        appData.expenses[eT] = eV;
        i++;
    }
}
while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Money per day: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Low');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Mid');
} else if (appData.moneyPerDay > 2000) {
    console.log('High');
} else {
    console.log('Something goes wrong');
}


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt('Введите дату в формате YYYY-MM-DD');
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

var appData = {
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings:true
};

function chooseExpences() {
    for  (let i = 0; i < 2; i++) {
        let itemExpName = prompt
            ('Введите обязательную статью расходов в этом месяце'),
            itemExpCost = +prompt('Во сколько обойдутся траты по ней?');
    
        if ((typeof(itemExpName)) === 'string' && 
        (typeof(itemExpName)) != null && (typeof(itemExpCost)) != null &&
         itemExpName != '' && itemExpCost != ''  && itemExpName.length < 50) {
            console.log('done');
            appData.expenses[itemExpName] = itemExpCost;
        } else {
            alert('please, use correct input');
            i--; 
            continue;
        }
    }
    
}

chooseExpences();


function detectDayBudget(summBudget) {
    appData.moneyPerDay = (summBudget/30).toFixed(2);
    alert("Бюджет на один день составит " + appData.moneyPerDay);
    return appData.moneyPerDay;
}

detectDayBudget(money);



function detectLevel (dayliMoney) {
    if(dayliMoney < 100) {
        console.log('poor level');
    } else if (dayliMoney > 100 && dayliMoney < 2000) {
        console.log('high level');
    } else {
        console.log('WRONG!');
    }
}

detectLevel(appData.moneyPerDay);


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    let counter = 1;
    for  (let i = 0; i < 3; i++) {
        let OptExpNumb = counter,
            OptExpName = prompt('Статья необязательных расходов?');
    
        if ((typeof(OptExpName)) === 'string' && 
        (typeof(OptExpName)) != null && (typeof(OptExpName)) != null &&
        OptExpName != '' && OptExpName.length < 50) {
            console.log('done');
            appData.optionalExpenses[OptExpNumb] = OptExpName;
            counter++;
        } else {
            alert('please, use correct input');
            i--; 
            continue;
        }
    }
}

chooseOptExpenses();


var a = console.log(appData);
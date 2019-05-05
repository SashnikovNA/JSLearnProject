var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    item1ExpName = prompt('Введите обязательную статью расходов №1 в этом месяце'),
    item1ExpCost = +prompt('Во сколько обойдутся траты по ней?'),
    item2ExpName = prompt('Введите обязательную статью расходов №1 в этом месяце'),
    item2ExpCost = +prompt('Во сколько обойдутся траты по ней?');

var appData = {
    budget:money,
    timeData:time,
    expenses: {
        item1ExpName:item1ExpCost,
        item2ExpName:item2ExpCost        
    },
    optionalExpenses:'',
    income:[],
    savings:false
};

let oneDayBudget = (appData.budget - appData.expenses.item1ExpName - appData.expenses.item2ExpName) / 30 ;
alert("Бюджет на один день составит - " + oneDayBudget.toFixed(2));

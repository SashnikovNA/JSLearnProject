var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    item1ExpName = prompt('Введите обязательную статью расходов №1 в этом месяце'),
    item1ExpCost = +prompt('Во сколько обойдутся траты по ней?'),
    item2ExpName = prompt('Введите обязательную статью расходов №2 в этом месяце'),
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

let oneDayBudget = (appData.budget - appData.expenses.item1ExpName - appData.expenses.item2ExpName) / 30;
alert("Бюджет на один день составит - " + oneDayBudget.toFixed(2));

let woooooowwwww = alert("Hi, Dany");


/*  Ответы на вопросы из задания:
1 - Сколько типов данных существует в JS?
в JS существет 6 типов данных:
- number ('infinity' and 'NaN'  also there)
- string
- object
- null
- undefined
- symbol

2 - Как вывести информацию в консоль?
should use the command : 'console.log();

3 - Какая функция операторов || и &&? 
General function - logical compearing (AND - &&, OR - ||);
*/

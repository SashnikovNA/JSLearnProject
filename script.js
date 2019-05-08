var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt('Введите дату в формате YYYY-MM-DD');
    
var appData = {
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses:'',
    income:[],
    savings:false
};

for  (let i = 0; i < 2; i++) {
    let itemExpName = prompt('Введите обязательную статью расходов в этом месяце'),
        itemExpCost = +prompt('Во сколько обойдутся траты по ней?');

    if ((typeof(itemExpName)) === 'string' && (typeof(itemExpName)) != null && (typeof(itemExpCost)) != null
    && itemExpName != '' && itemExpCost != ''  && itemExpName.length < 50) {
        console.log('done');
        appData.expenses[itemExpName] = itemExpCost;
    } else {
        alert('please, use correct input');
        i--; 
        continue;
    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на один день составит " + appData.moneyPerDay.toFixed(2));

if(appData.moneyPerDay < 100) {
    console.log('poor level');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('high level');
} else {
    console.log('WRONG!');
}

var a = console.log(appData);

/*
  Ответы на вопросы из задания:
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
/*
let num = 50;

if (num<49) {
    console.log("not right!!!");
} else if (num > 100) {
    console.log("much more!!!");
} else {
    console.log("Correct!!!");
};

(num == 50) ? console.log("correct"): console.log("uncorrect");



switch (num) {
    case num < 49: 
        console.log("uncorrect");
        break;
    case num > 100:
        console.log("much more!!!");
        break;
    case num > 80:
        console.log("even much more!!!");
        break;
    case 50:
        console.log("good!");
        break;
    default:
        console.log("something strange!!!");
        break;
}



let num = 50;

//while (num < 55) {
   // console.log(num);
   // num++;
//}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}


*/





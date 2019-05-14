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

/*  //первый способ выполнения цикла
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
*/

/*
//второй способ выполнения цикла
var i = 0;
while (i < 2) {
        let itemExpName = prompt
        ('Введите обязательную статью расходов в этом месяце'),
        itemExpCost = +prompt('Во сколько обойдутся траты по ней?');
        i++;

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
*/


//третий способ выполнения цикла
var i = 0;
do {
                let itemExpName = prompt
                ('Введите обязательную статью расходов в этом месяце'),
                itemExpCost = +prompt('Во сколько обойдутся траты по ней?');
            i++;

            if ((typeof(itemExpName)) === 'string' && 
            (typeof(itemExpName)) != null && (typeof(itemExpCost)) != null &&
            itemExpName != '' && itemExpCost != ''  &&
             itemExpName.length < 50) {
                console.log('done');
                appData.expenses[itemExpName] = itemExpCost;
                
            } else {
                alert('please, use correct input');
                i--; 
                continue;
            } 
        }
while (i < 2);


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

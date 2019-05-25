// var a = console.log([ ] + false - null + true);
let arr = ["first", 2, 3, "four", 5];
arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ")");
})
console.log(arr);


let mass = [1, 3, 4, 6, 7];
for (let key of mass) {
    console.log(key);
}


let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

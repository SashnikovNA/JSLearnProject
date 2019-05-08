
let num = 50;
/*
if (num<49) {
    console.log("not right!!!");
} else if (num > 100) {
    console.log("much more!!!");
} else {
    console.log("Correct!!!");
};

(num == 50) ? console.log("correct"): console.log("uncorrect");
*/
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

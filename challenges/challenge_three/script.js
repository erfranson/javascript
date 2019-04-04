
var bills = [124, 48, 268];
var finalBill = ['$142.6', '$57.6', '$294.8'];

//My way
function calculateTip(tip){

    if (tip < 50) {
        return 'If you want to leave 20% tip of ' + tip + ' you owe $'+ (tip + (tip * 0.2));
    } else if (tip > 50 && tip < 200){
        return  'If you want to leave 15% tip of ' + tip + ' you owe $' + (tip + (tip * 0.15));
    } else {
        return  'If you to want leave 10% tip of ' + tip + ' you owe $' + (tip + (tip * 0.1));
    }
}

// His way
function calculateTip2(bill){
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill > 50 && bill < 200){
        percentage = 0.15;
    } else {
        percentage = .1;
    }
    return bill * percentage;
}

var tips = [
calculateTip2(bills[0]),
calculateTip2(bills[1]),
calculateTip2(bills[2])
];

var total = [bills[0] + tips[0],
bills[1] + tips[1],
bills[2] + tips[2]
];
console.log(tips, total);

console.log(calculateTip(124));
console.log(calculateTip(48));
console.log(calculateTip(268));

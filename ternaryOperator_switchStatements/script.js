
/***************************
 * The Ternary Operator and switch statements
 */

var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer you man you!!') : console.log(firstName + ' drinks juice grow up!');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

function test(){
    var drinkAge = prompt('What is your age');

    var canDrink = drinkAge >= 21 ? 'You can drink with us' : 'You can\'t drink with us!';

    console.log(canDrink);
}
test();

// SWITCH STATEMENT

var firstName = 'Todd';
var job = 'teacher';

switch (job) {
    case "teacher":
        console.log(firstName + ' teaches kids to code');
        break;
    case 'driver':
        console.log(firstName + ' drives uber');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful things');
    default:
        console.log(firstName + ' is lazy');
        break;
}

var age = 33;

switch (true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teen');
        break;
    case age >= 20 && age < 30:
        console.log(firstName +' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
        break;
}

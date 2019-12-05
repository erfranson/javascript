/*********************
 * Hoisting in practice
 */
// FUNCTIONS

//since functions declarations are hoisted it doesn't matter if you call them before they are declared

// works
calcAge(1989);

function calcAge(year) {
    console.log(2019 - year);
}

// doesnt work

// retirement(1989);

var retirement = function (year) {
    console.log(65- (2019 - year))
};

// Variables

// if we use the variable before we declare it the variable is hoisted and is set to undefined.
console.log(age);
var age = 23;

function foo(){
    console.log(age);
    var age = 25;
    console.log(age);
}
foo();
console.log(age);


/*********************
 * Scoping
 */

var a = 'hello!';
first();

function first(){
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
/*
 Basic Operators
*/

var now, yearJohn, yearMark;

now = 2019;
ageJohn = 28;
ageMark = 33;

// // Math operators
yearJohn = now - ageJohn;
yearMark =  now - ageMark;

console.log(yearJohn);

console.log(now * 2);
console.log(now + 2);
console.log(now / 10);

// logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//type of operator

console.log(typeof ageJohn);
console.log(typeof johnOlder);
console.log(typeof 'mark is older than john');
var x;
console.log(typeof x);

/*******************************************
 * Operator precedence
 */

var now = 2018
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;// 8 * 4 - 6 // 32 - 6 // 26 // right to left
console.log(x,y);

// 2 + 4 + 5 left to right


//More operators
x *= 2; // same as x = x * 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);

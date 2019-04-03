/*************************
 * Array
 */

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// Initialize new array
console.log(names[0],years[1]);
console.log(names.length);

// Mutate array data.
names[1] = 'Ben';
console.log(names);
names[names.length] = 'mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'designer', false];

// push function adds element at the end of array
john.push('blue');
// unshift add to the front of array
john.unshift('Mr.');

// shift removes the from the array
john.shift();
// pop removes from the end of array
john.pop();

// indexOf shows you the position of item in array
console.log(john.indexOf(1990));

//indexOF -1 will show up if element is not in an array very useful
console.log(john.indexOf(222));

var isDesigner = john.indexOf('designer') === -1 ? ' John is not a designer' : 'john IS a designer';

console.log(isDesigner);
console.log(john);

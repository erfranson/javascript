//Spread Operator

function addFourAges(a,b,c,d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1)

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
//... expands the array into its component 
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['Josh', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

//joining two arrays together. 
const bigFamily = [...familySmith,...familyMiller];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

const el = Array.from(all)
console.log(el)

el.forEach(cur => cur.style.color = 'purple')

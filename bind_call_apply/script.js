// Lecture: Bind, Call, Apply
//allow us to set the this variable manually


var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal'){
            console.log(`Good ${timeOfDay}, Ladies and Gentlemen! I'm ${this.name} I'm a ${this.job} and I'm ${this.age} years old.`);
        } else if (style === 'friendly') {
            console.log(`Hey! whats's up I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal','Morning');
john.presentation('friendly', 'Evening');

// this is called method borrowing because we borrowed a method from another object
john.presentation.call(emily, 'friendly', 'afternoon');
// the apply method has to be organized in an array see below.
john.presentation.apply(emily, ['formal', 'night']);
//the bind method stores the function for later use see below
var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('night');
johnFriendly('Day');

// this is called carrying where you create a function based on another function
var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('morrow');

//bind example in practice
var years = [1990, 1985, 1995, 1951, 2019];

function arrayCalc (arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn((arr[i])));
    }
    return arrRes;
}

function calcAge(el) {
    return 2019 - el;
}

function isFullAge(limit,el){
    return el >= limit;
}

var ages = arrayCalc(years, calcAge);

// the this is refering to what method you are borrowing, so this method is not refering to another object
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
/*
A function is an instance of the Object type
A function behaves like any other object;
we can store functions in a variable;
we can pass a function as an argument to another function
we can return a function from a function
 */

var years = [1990, 1987, 1995, 1951, 2019];

function arrayCalc (arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2019 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

// also callback functions
var ages = arrayCalc(years, calcAge);
var fullAge = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(heartRate);

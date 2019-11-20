// Lecture: let and Const

//es5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);


//es6

//const is immutable let is mutable both are block scoped
const name6 = 'Jane Smith';
let age6 = 23;



console.log(name6);

//es5 
function driversLicence5(passedTest) {
    if(passedTest){
        // console.log(firstName); // it is undefined when we call a var before it is defined
        var firstName = 'john';
        var yearOfBirth = 1990;
        
    }
    console.log(firstName + ' Born in ' + yearOfBirth + ' can drive a car');
}

driversLicence5(true);

//es6

function driversLicence6(passedTest) {

    // console.log(firstName); // throws initialization error if we call it before it is defined
    let firstName;
    const yearOfBirth = 1990;

    if(passedTest){
        firstName = 'john';
    }
    console.log(firstName + ' Born in ' + yearOfBirth + ' can drive a car');
}

driversLicence6(true);



let i = 23;
//the i variable is a different variable from outside of the for loop than in the for loop
for (let i = 0; i < 5; i++){
    console.log(i)
}
console.log(i);
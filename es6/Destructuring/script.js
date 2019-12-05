//Destructuring is used to create variables for each point of data for the data structure

//ES5

var john = ['John', 26];
var name = john[0];
var age = john[1]


//ES6
const [name6, age6] = ['John', 26];
console.log(name6, age6)

const obj ={
    firstName: 'John',
    lastName: 'Smith'
}

const{firstName, lastName} = obj;
console.log(firstName, lastName)

const{firstName: fn, lastName: ln} = obj
console.log(fn, ln)



function calcAgeRetirement(year){
    const age = new
    Date().getFullYear() - year;
    return [age, 65 - age];
}

const[ageyear, retirement] = 
calcAgeRetirement(1989);
console.log(ageyear, retirement);

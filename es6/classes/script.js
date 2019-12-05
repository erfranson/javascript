// Classes

//ES5

var Person5 = function(name,yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
} 

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1985, 'Uber Driver');

john5.calculateAge();

//ES6
//Classes are not hoisted
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() { //attaches the method to the person class;
        console.log('hi');
    }
}

const john6 = new Person6('john', 1995, 'Teacher');

john6.calculateAge();
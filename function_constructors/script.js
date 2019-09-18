// Function constructor



// function constructors start with a capital letter
var Person = function (name, yearOfbirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfbirth;
    this.job = job;
    // this.calculateAge = function () {
    //     console.log(2019 - this.yearOfBirth);
    // }
};

// new creates a empty object, then the function is called, and the the new operator makes it that the this variable is pointing to the empty object that is created instead of the golbal object.

Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');

var ethan = new Person('Ethan', 1988, 'Developer');

var tavia = new Person('Tavia', 1994, 'Speech Pathologist');

Person.prototype.lastName = 'Franson';

john.calculateAge();
ethan.calculateAge();
tavia.calculateAge();



